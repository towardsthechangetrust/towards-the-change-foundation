"use server";

import { Resend } from "resend";
import { getCloudflareContext } from "@opennextjs/cloudflare";
import { site } from "@/lib/site";

export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
};

export async function submitContact(
  _prevState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = (formData.get("name") as string | null)?.trim() ?? "";
  const email = (formData.get("email") as string | null)?.trim() ?? "";
  const interest = (formData.get("interest") as string | null)?.trim() ?? "";
  const message = (formData.get("message") as string | null)?.trim() ?? "";

  if (!name || !email || !message) {
    return { status: "error", message: "Please fill in all required fields." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  // Retrieve Cloudflare runtime bindings/env safely
  let cfEnv: CloudflareEnv | undefined;
  try {
    const ctx = await getCloudflareContext({ async: true });
    cfEnv = ctx?.env;
  } catch (err) {
    console.warn("[contact] getCloudflareContext not available or failed:", err);
  }

  // 1. Persist to D1 if available (non-blocking for email delivery)
  try {
    if (cfEnv?.DB) {
      await cfEnv.DB.prepare(
        "INSERT INTO contact_submissions (name, email, interest, message) VALUES (?, ?, ?, ?)",
      )
        .bind(name, email, interest || null, message)
        .run();
    }
  } catch (dbErr) {
    console.error("[contact] D1 write failed:", dbErr);
  }

  // 2. Send email via Resend
  const apiKey = cfEnv?.RESEND_API_KEY || process.env.RESEND_API_KEY;
  const toEmail =
    cfEnv?.RESEND_TO_EMAIL || process.env.RESEND_TO_EMAIL || site.email;

  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY is not defined in env or secrets");
    return {
      status: "error",
      message:
        "Unable to send message right now. Please email us directly at " +
        site.email,
    };
  }

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: toEmail,
      replyTo: email,
      subject: `New message from ${name} · ${site.shortName}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        interest ? `Interest: ${interest}` : null,
        "",
        message,
      ]
        .filter((l) => l !== null)
        .join("\n"),
    });

    return {
      status: "success",
      message:
        "Thank you! We've received your message and will get back to you soon.",
    };
  } catch (emailErr) {
    console.error("[contact] Resend email send failed:", emailErr);
    return {
      status: "error",
      message: "Something went wrong sending your email. Please email us directly at " + site.email,
    };
  }
}
