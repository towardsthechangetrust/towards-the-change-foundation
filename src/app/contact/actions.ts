"use server";

import { Resend } from "resend";
import { getCloudflareContext } from "@opennextjs/cloudflare";
import { site } from "@/lib/site";

export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
};

const resend = new Resend(process.env.RESEND_API_KEY);

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

  // 1. Persist to D1 (non-fatal — we still send the email even if DB write fails)
  try {
    const { env } = await getCloudflareContext({ async: true });
    await env.DB.prepare(
      "INSERT INTO contact_submissions (name, email, interest, message) VALUES (?, ?, ?, ?)",
    )
      .bind(name, email, interest || null, message)
      .run();
  } catch (dbErr) {
    console.error("[contact] D1 write failed:", dbErr);
  }

  // 2. Send email via Resend
  try {
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: process.env.RESEND_TO_EMAIL ?? site.email,
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
  } catch {
    return {
      status: "error",
      message: "Something went wrong. Please try again or email us directly.",
    };
  }
}
