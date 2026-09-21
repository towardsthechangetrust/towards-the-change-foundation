import { getCloudflareContext } from "@opennextjs/cloudflare";
import { cookies } from "next/headers";

function sanitizeFilename(name: string): string {
  return name.replace(/[^a-zA-Z0-9.-]/g, "_").toLowerCase();
}

// GET: List media items (open to public gallery and admin)
export async function GET() {
  try {
    const { env } = await getCloudflareContext({ async: true });
    if (!env?.DB) {
      return Response.json({ media: [] });
    }

    const { results } = await env.DB.prepare(
      "SELECT id, title, category, media_type, r2_key, file_size, created_at FROM media ORDER BY created_at DESC",
    ).all();

    return Response.json({ media: results || [] });
  } catch (err) {
    console.error("[api/admin/media] Error listing media:", err);
    return Response.json({ error: "Failed to list media" }, { status: 500 });
  }
}

// POST: Upload new photo or video to R2 and D1 (admin only)
export async function POST(request: Request) {
  const cookieStore = await cookies();
  const auth = cookieStore.get("ttc_admin_auth");
  if (auth?.value !== "valid") {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;
    const title = (formData.get("title") as string | null)?.trim() ?? "";
    const category = (formData.get("category") as string | null)?.trim() ?? "General";

    if (!file || !title) {
      return Response.json({ error: "File and title are required" }, { status: 400 });
    }

    const isVideo = file.type.startsWith("video/");
    const isImage = file.type.startsWith("image/");
    if (!isVideo && !isImage) {
      return Response.json(
        { error: "Invalid file type. Only images and videos are supported." },
        { status: 400 },
      );
    }

    // Max 100MB
    if (file.size > 100 * 1024 * 1024) {
      return Response.json({ error: "File size exceeds 100MB limit" }, { status: 400 });
    }

    const { env } = await getCloudflareContext({ async: true });
    if (!env?.MEDIA_BUCKET || !env?.DB) {
      return Response.json({ error: "Storage or database not available" }, { status: 503 });
    }

    const safeName = sanitizeFilename(file.name);
    const mediaType = isVideo ? "video" : "image";
    const r2Key = `gallery/${mediaType}s/${Date.now()}-${safeName}`;

    const arrayBuffer = await file.arrayBuffer();

    // 1. Put into R2 bucket
    await env.MEDIA_BUCKET.put(r2Key, arrayBuffer, {
      httpMetadata: {
        contentType: file.type,
      },
    });

    // 2. Insert metadata into D1
    const insertResult = await env.DB.prepare(
      "INSERT INTO media (title, category, media_type, r2_key, file_size) VALUES (?, ?, ?, ?, ?) RETURNING id, created_at",
    )
      .bind(title, category, mediaType, r2Key, file.size)
      .first<{ id: number; created_at: string }>();

    return Response.json({
      success: true,
      media: {
        id: insertResult?.id,
        title,
        category,
        media_type: mediaType,
        r2_key: r2Key,
        file_size: file.size,
        created_at: insertResult?.created_at,
      },
    });
  } catch (err) {
    console.error("[api/admin/media] Upload error:", err);
    return Response.json({ error: "Upload failed" }, { status: 500 });
  }
}

// DELETE: Remove media item from R2 and D1 (admin only)
export async function DELETE(request: Request) {
  const cookieStore = await cookies();
  const auth = cookieStore.get("ttc_admin_auth");
  if (auth?.value !== "valid") {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { id, r2_key } = await request.json();
    if (!id || !r2_key) {
      return Response.json({ error: "ID and r2_key required" }, { status: 400 });
    }

    const { env } = await getCloudflareContext({ async: true });
    if (!env?.MEDIA_BUCKET || !env?.DB) {
      return Response.json({ error: "Service unavailable" }, { status: 503 });
    }

    // 1. Delete from R2
    await env.MEDIA_BUCKET.delete(r2_key);

    // 2. Delete from D1
    await env.DB.prepare("DELETE FROM media WHERE id = ?").bind(id).run();

    return Response.json({ success: true });
  } catch (err) {
    console.error("[api/admin/media] Delete error:", err);
    return Response.json({ error: "Delete failed" }, { status: 500 });
  }
}
