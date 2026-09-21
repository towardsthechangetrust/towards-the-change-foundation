import type { Metadata } from "next";
import { site } from "@/lib/site";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name} to volunteer, partner or support our work in ${site.location}.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <p className="text-sm font-semibold uppercase tracking-wide text-coral">Contact</p>
      <h1 className="mt-3 font-display text-4xl font-semibold text-brand-dark">
        Let&apos;s take the next step together
      </h1>
      <p className="mt-4 text-lg text-foreground/70">
        Whether you want to volunteer, partner with us, or support a program,
        fill out the form and we&apos;ll get back to you.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        <div className="rounded-2xl border border-black/5 bg-white p-6">
          <h2 className="font-display text-sm font-semibold uppercase tracking-wide text-coral">Email</h2>
          <a href={`mailto:${site.email}`} className="mt-2 block text-sm text-brand hover:text-brand-dark">
            {site.email}
          </a>
        </div>
        <div className="rounded-2xl border border-black/5 bg-white p-6">
          <h2 className="font-display text-sm font-semibold uppercase tracking-wide text-coral">Phone</h2>
          <p className="mt-2 text-sm text-foreground/70">{site.phone}</p>
        </div>
        <div className="rounded-2xl border border-black/5 bg-white p-6">
          <h2 className="font-display text-sm font-semibold uppercase tracking-wide text-coral">Based in</h2>
          <p className="mt-2 text-sm text-foreground/70">Salem, Tamil Nadu</p>
        </div>
      </div>

      <ContactForm />
    </section>
  );
}
