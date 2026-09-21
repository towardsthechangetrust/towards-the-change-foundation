import { getCloudflareContext } from "@opennextjs/cloudflare";
import { cookies } from "next/headers";

function escapeCsv(val: unknown): string {
  if (val === null || val === undefined) return '""';
  const str = String(val).replace(/"/g, '""');
  return `"${str}"`;
}

export async function GET() {
  const cookieStore = await cookies();
  const auth = cookieStore.get("ttc_admin_auth");

  if (auth?.value !== "valid") {
    return new Response("Unauthorized", { status: 401 });
  }

  try {
    const { env } = await getCloudflareContext({ async: true });
    if (!env?.DB) {
      return new Response("Database unavailable", { status: 503 });
    }

    const { results } = await env.DB.prepare(
      "SELECT id, name, email, interest, message, submitted_at FROM contact_submissions ORDER BY submitted_at DESC",
    ).all();

    const headers = ["ID", "Name", "Email", "Interest", "Message", "Submitted At"];
    const rows = (results || []).map((row: any) =>
      [
        row.id,
        escapeCsv(row.name),
        escapeCsv(row.email),
        escapeCsv(row.interest),
        escapeCsv(row.message),
        escapeCsv(row.submitted_at),
      ].join(","),
    );

    const csvContent = [headers.join(","), ...rows].join("\r\n");

    return new Response(csvContent, {
      status: 200,
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": `attachment; filename="ttc-submissions-${new Date().toISOString().slice(0, 10)}.csv"`,
      },
    });
  } catch (err) {
    console.error("[api/admin/submissions/export] CSV export error:", err);
    return new Response("Internal Server Error", { status: 500 });
  }
}
