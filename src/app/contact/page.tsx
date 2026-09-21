import type { Metadata } from "next";
import { site } from "@/lib/site";

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
        reach out and we&apos;ll get back to you.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl border border-black/5 bg-white p-6">
          <h2 className="font-display text-lg font-semibold text-brand-dark">Email</h2>
          <a href={`mailto:${site.email}`} className="mt-2 block text-brand hover:text-brand-dark">
            {site.email}
          </a>
        </div>
        <div className="rounded-2xl border border-black/5 bg-white p-6">
          <h2 className="font-display text-lg font-semibold text-brand-dark">Phone</h2>
          <p className="mt-2 text-foreground/70">{site.phone}</p>
        </div>
        <div className="rounded-2xl border border-black/5 bg-white p-6 sm:col-span-2">
          <h2 className="font-display text-lg font-semibold text-brand-dark">Location</h2>
          <p className="mt-2 text-foreground/70">{site.location}</p>
        </div>
      </div>

      <a
        href={`mailto:${site.email}?subject=Volunteering with ${site.shortName}`}
        className="mt-10 inline-block rounded-full bg-brand px-7 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark"
      >
        Email us
      </a>
    </section>
  );
}
