import type { Metadata } from "next";
import { Journey } from "@/components/Journey";
import { Partners } from "@/components/Partners";
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

      <section className="bg-sand px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-coral">
              Our mission
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-brand-dark">
              Helping young people build skills, confidence, and a life of contribution.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-foreground/75">
              <p>
                To empower young people with practical skills, training, work
                experience, leadership opportunities, and guidance that prepare
                them for meaningful careers and responsible participation in society.
              </p>
              <p>
                We encourage youth to discover their potential, develop
                confidence and leadership, and take an active role in
                volunteering and community development. Through learning,
                experience, and service, we help young people become skilled
                professionals, responsible citizens, and positive contributors
                to their communities.
              </p>
              <p>
                The growth of young people who have been part of our journey,
                many of whom have gone on to build meaningful careers while
                continuing to contribute responsibly to society, inspires us
                to prepare and support the next generation.
              </p>
            </div>
          </div>
          <div className="border-t border-brand/25 pt-8 md:border-l md:border-t-0 md:pl-12 md:pt-0">
            <p className="text-sm font-semibold uppercase tracking-wide text-coral">
              Our vision
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-brand-dark">
              A generation of skilled, confident, and socially responsible young leaders.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-foreground/75">
              <p>
                To build a generation of skilled, confident, and socially
                responsible young leaders who use their knowledge, skills, and
                energy to strengthen communities, care for nature, embrace
                volunteerism, and create positive and sustainable change for
                present and future generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Journey />
      <Partners />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-sm font-semibold uppercase tracking-wide text-coral">
          Our focus
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold text-brand-dark">
          Where young people create change
        </h2>
        <div className="mt-8 grid gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
          <div className="border-t border-brand/25 py-5">
            <h3 className="font-display text-lg font-semibold text-brand-dark">
              Youth Leadership
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground/70">
              Developing young people into confident, capable, and responsible leaders.
            </p>
          </div>
          <div className="border-t border-brand/25 py-5">
            <h3 className="font-display text-lg font-semibold text-brand-dark">
              Community Development
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground/70">
              Enabling youth to identify community needs and take meaningful action.
            </p>
          </div>
          <div className="border-t border-brand/25 py-5">
            <h3 className="font-display text-lg font-semibold text-brand-dark">
              Volunteerism
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground/70">
              Creating a culture of service, participation, and responsibility.
            </p>
          </div>
          <div className="border-t border-brand/25 py-5">
            <h3 className="font-display text-lg font-semibold text-brand-dark">
              Skills &amp; Career Development
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground/70">
              Providing practical skills, training, experience, and opportunities for
              young people to build their futures.
            </p>
          </div>
          <div className="border-t border-brand/25 py-5">
            <h3 className="font-display text-lg font-semibold text-brand-dark">
              Environment &amp; Sustainability
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground/70">
              Encouraging young people to protect nature and think responsibly about
              the future.
            </p>
          </div>
        </div>
        <div className="mt-8 border-t-2 border-brand pt-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-coral">
            Our core message
          </p>
          <p className="mt-3 font-display text-2xl font-semibold leading-snug text-brand-dark">
            Empowering Youth. Strengthening Communities. Caring for Nature. Creating
            Sustainable Change.
          </p>
        </div>
      </section>
    </>
  );
}
