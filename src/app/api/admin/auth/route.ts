import { getCloudflareContext } from "@opennextjs/cloudflare";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  try {
    const { password } = await request.json();
    if (!password) {
      return Response.json({ error: "Password required" }, { status: 400 });
    }

    let expectedPassword = process.env.ADMIN_PASSWORD;
    try {
      const { env } = await getCloudflareContext({ async: true });
      if (env?.ADMIN_PASSWORD) {
        expectedPassword = env.ADMIN_PASSWORD;
      }
    } catch {
      // Dev environment
    }

    if (!expectedPassword || password !== expectedPassword) {
      return Response.json({ error: "Invalid password" }, { status: 401 });
    }

    const cookieStore = await cookies();
    cookieStore.set("ttc_admin_auth", "valid", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: "/",
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error("[api/admin/auth] Error:", err);
    return Response.json({ error: "Authentication failed" }, { status: 500 });
  }
}

export async function GET() {
  const cookieStore = await cookies();
  const authCookie = cookieStore.get("ttc_admin_auth");
  return Response.json({ authenticated: authCookie?.value === "valid" });
}

export async function DELETE() {
  const cookieStore = await cookies();
  cookieStore.delete("ttc_admin_auth");
  return Response.json({ success: true });
}
