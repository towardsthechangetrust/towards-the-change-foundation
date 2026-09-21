import { getCloudflareContext } from "@opennextjs/cloudflare";

function getContentType(key: string): string {
  const ext = key.split(".").pop()?.toLowerCase();
  switch (ext) {
    case "jpg":
    case "jpeg":
      return "image/jpeg";
    case "png":
      return "image/png";
    case "webp":
      return "image/webp";
    case "gif":
      return "image/gif";
    case "svg":
      return "image/svg+xml";
    case "mp4":
      return "video/mp4";
    case "webm":
      return "video/webm";
    case "mov":
      return "video/quicktime";
    default:
      return "application/octet-stream";
  }
}

export async function GET(
  _request: Request,
  props: { params: Promise<{ key: string[] }> },
) {
  const { key } = await props.params;
  const objectKey = Array.isArray(key) ? key.join("/") : key;

  if (!objectKey) {
    return new Response("Missing key", { status: 400 });
  }

  try {
    const { env } = await getCloudflareContext({ async: true });
    if (!env?.MEDIA_BUCKET) {
      return new Response("Storage not available", { status: 503 });
    }

    const object = await env.MEDIA_BUCKET.get(objectKey);
    if (!object) {
      return new Response("Not found", { status: 404 });
    }

    const contentType =
      object.httpMetadata?.contentType || getContentType(objectKey);

    const headers = new Headers();
    headers.set("Content-Type", contentType);
    headers.set("Cache-Control", "public, max-age=31536000, immutable");
    if (object.httpEtag) {
      headers.set("ETag", object.httpEtag);
    }

    return new Response(object.body as unknown as BodyInit, {
      status: 200,
      headers,
    });
  } catch (err) {
    console.error("[api/media] Error streaming object:", err);
    return new Response("Internal Server Error", { status: 500 });
  }
}
