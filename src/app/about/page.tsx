import type { Metadata } from "next";
import { Journey } from "@/components/Journey";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `The story behind ${site.name}, a youth-led NGO founded in ${site.founded} in Salem, Tamil Nadu by ${site.founder}. Awarded the Chief Minister's Youth Award in 2026.`,
  alternates: { canonical: "/about" },
  openGraph: {
    title: `About Us · ${site.name}`,
    description: `The story behind ${site.name}, a youth-led NGO founded in ${site.founded} in Salem, Tamil Nadu by ${site.founder}. Awarded the Chief Minister's Youth Award in 2026.`,
    url: `${site.url}/about`,
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `About ${site.name}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `About Us · ${site.name}`,
    description: `Learn about ${site.name} and founder ${site.founder}'s youth-led community work in Salem, Tamil Nadu.`,
    images: ["/opengraph-image"],
  },
};

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": `${site.url}/about/#webpage`,
      url: `${site.url}/about`,
      name: `About Us · ${site.name}`,
      description: `The journey and mission of ${site.name}, founded in Salem, Tamil Nadu.`,
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
          name: "About Us",
          item: `${site.url}/about`,
        },
      ],
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
      <section className="mx-auto max-w-4xl px-6 py-16">
        <p className="text-sm font-semibold uppercase tracking-wide text-coral">About us</p>
        <h1 className="mt-3 font-display text-4xl font-semibold text-brand-dark">
          Started by one volunteer who decided to show up
        </h1>
        <div className="mt-6 space-y-4 text-lg text-foreground/70">
          <p>
            {site.name} began in {site.founded} in {site.location}, founded by{" "}
            {site.founder} on a simple belief: change is a walk, not a leap.
            It gets built one visit, one camp, one conversation at a time.
          </p>
          <p>
            What started with a handful of volunteers has grown into a
            network of youth clubs and self-organised drives across Tamil
            Nadu, working alongside government departments, colleges and
            local communities on health, safety, education, environment and
            livelihoods.
          </p>
          <p>
            We stay deliberately close to the ground. Most of our work
            happens in villages, factory townships and government schools
            that larger organisations rarely reach.
          </p>
        </div>
      </section>

      <Journey />

      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="font-display text-3xl font-semibold text-brand-dark">Our approach</h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-3">
          <div>
            <h3 className="font-display text-lg font-semibold text-brand-dark">Youth-led</h3>
            <p className="mt-2 text-sm text-foreground/70">
              Programs are designed and run by young volunteers, for their own
              communities.
            </p>
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold text-brand-dark">
              Ground-first
            </h3>
            <p className="mt-2 text-sm text-foreground/70">
              We go where the need is, from tribal hamlets to factory
              townships, rather than waiting for people to come to us.
            </p>
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold text-brand-dark">
              Partnered
            </h3>
            <p className="mt-2 text-sm text-foreground/70">
              We work alongside government bodies, colleges and local
              institutions to make every effort go further.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
