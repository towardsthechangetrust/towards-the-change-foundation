import { getCloudflareContext } from "@opennextjs/cloudflare";
import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = await cookies();
  const auth = cookieStore.get("ttc_admin_auth");

  if (auth?.value !== "valid") {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { env } = await getCloudflareContext({ async: true });
    if (!env?.DB) {
      return Response.json({ submissions: [] });
    }

    const { results } = await env.DB.prepare(
      "SELECT id, name, email, interest, message, submitted_at FROM contact_submissions ORDER BY submitted_at DESC",
    ).all();

    return Response.json({ submissions: results || [] });
  } catch (err) {
    console.error("[api/admin/submissions] Error querying submissions:", err);
    return Response.json({ error: "Database error" }, { status: 500 });
  }
}
