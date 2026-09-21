import type { Metadata } from "next";
import { site } from "@/lib/site";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact & Volunteer With Us",
  description: `Get in touch with ${site.name} to volunteer, partner, or invite us for community drives in Salem, Tamil Nadu. Phone: ${site.phone}, Email: ${site.email}.`,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `Contact & Volunteer · ${site.name}`,
    description: `Connect with ${site.name} to volunteer, partner, or support grassroot welfare initiatives across Tamil Nadu.`,
    url: `${site.url}/contact`,
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `Contact ${site.name}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Contact & Volunteer · ${site.name}`,
    description: `Connect with ${site.name} to volunteer, partner, or support grassroot welfare initiatives across Tamil Nadu.`,
    images: ["/opengraph-image"],
  },
};

const contactJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": `${site.url}/contact/#webpage`,
      url: `${site.url}/contact`,
      name: `Contact & Volunteer · ${site.name}`,
      description: `Contact form and communication channels for ${site.name} in Salem, Tamil Nadu.`,
      isPartOf: { "@id": `${site.url}/#website` },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: site.url,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Contact",
          item: `${site.url}/contact`,
        },
      ],
    },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
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
          <a href={`tel:${site.phone.replace(/[^+\d]/g, "")}`} className="mt-2 block text-sm text-brand hover:text-brand-dark">
            {site.phone}
          </a>
        </div>
        <div className="rounded-2xl border border-black/5 bg-white p-6">
          <h2 className="font-display text-sm font-semibold uppercase tracking-wide text-coral">Based in</h2>
          <p className="mt-2 text-sm text-foreground/70">Salem, Tamil Nadu</p>
        </div>
      </div>

      <ContactForm />
    </section>
    </>
  );
}
