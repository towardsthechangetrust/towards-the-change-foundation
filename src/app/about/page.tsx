import type { Metadata } from "next";
import { Journey } from "@/components/Journey";
import { Partners } from "@/components/Partners";
import { site, legal, sdgs, team } from "@/lib/site";

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
      {/* Hero & Story */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <p className="text-sm font-semibold uppercase tracking-wide text-coral">About us</p>
        <h1 className="mt-3 font-display text-4xl font-semibold text-brand-dark sm:text-5xl">
          A Step Towards the Change
        </h1>
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-foreground/75">
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
            By staying deliberately close to the ground in tribal villages, factory townships, colleges, and government schools often overlooked by larger organizations. We ensure that every effort is relevant, accessible, and impactful. Over the past years, our programs have reached more than 25,000 beneficiaries through 220+ events, empowering students, women, tribal communities, and workers to access opportunities and build stronger futures.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
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

      {/* Legal & Financial Information */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="rounded-3xl border border-brand/20 bg-sand/40 p-8 sm:p-12">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-coral sm:text-sm">
              Compliance &amp; Governance
            </p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-brand-dark sm:text-4xl">
              Legal &amp; Financial Information
            </h2>
            <div className="mt-4 space-y-2 text-sm leading-relaxed text-foreground/85 sm:text-base">
              <p>{legal.trust}</p>
              <p>{legal.taxExemptions}</p>
              <p>{legal.csrAndDarpan}</p>
            </div>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {legal.cards.map((card) => (
              <div
                key={card.title}
                className="flex flex-col justify-between rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <div>
                  <span className="inline-block rounded-full bg-sand px-3 py-1 text-[11px] font-semibold text-brand-dark">
                    {card.badge}
                  </span>
                  <h3 className="mt-4 font-display text-base font-semibold text-brand-dark sm:text-lg">
                    {card.title}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-foreground/60">
                    {card.authority}
                  </p>
                  <p className="mt-2 font-mono text-xs font-bold text-coral">
                    {card.regNo}
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-foreground/75">
                    {card.description}
                  </p>
                </div>
                <div className="mt-5 border-t border-black/5 pt-3 text-[11px] font-semibold text-brand">
                  ✓ Verified Registration
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Journey />

      {/* Sustainable Development Goals (SDGs) */}
      <section className="border-y border-black/5 bg-sand/30 px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-coral sm:text-sm">
              Global Alignment
            </p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-brand-dark sm:text-4xl">
              Sustainable Development Goals (SDGs)
            </h2>
            <p className="mt-3 text-sm text-foreground/75 sm:text-base">
              Our ground-level programs align directly with the United Nations Sustainable Development Goals, driving inclusive development, environmental protection, and youth leadership.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {sdgs.map((sdg) => (
              <div
                key={sdg.number}
                className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="absolute top-0 left-0 h-1.5 w-full" style={{ backgroundColor: sdg.color }} />
                <div>
                  <div className="flex items-center justify-between">
                    <span
                      className="flex h-10 w-10 items-center justify-center rounded-xl font-display text-lg font-bold text-white shadow-sm"
                      style={{ backgroundColor: sdg.color }}
                    >
                      {sdg.number}
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-foreground/50">
                      SDG {sdg.number}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-base font-semibold text-brand-dark sm:text-lg">
                    {sdg.title}
                  </h3>
                  <p className="mt-1 text-xs font-semibold" style={{ color: sdg.color }}>
                    {sdg.tagline}
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-foreground/75">
                    {sdg.description}
                  </p>
                </div>
                <div className="mt-5 border-t border-black/5 pt-3 text-[11px] font-medium text-foreground/60">
                  Active Field Contribution
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team & Technical Partners */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-coral sm:text-sm">
            People &amp; Collaboration
          </p>
          <h2 className="mt-2 font-display text-2xl font-semibold text-brand-dark sm:text-4xl">
            Our Team &amp; Technical Partners
          </h2>
          <p className="mt-3 text-sm text-foreground/75 sm:text-base">
            Driven by dedicated grassroots youth organizers and supported by technology partners helping us operate transparently and at scale.
          </p>
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <div
              key={member.name}
              className="flex flex-col justify-between rounded-3xl border border-black/5 bg-sand/30 p-7 shadow-sm transition hover:bg-sand/50 hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between gap-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand text-lg font-bold text-white shadow-sm">
                    {member.initials}
                  </div>
                  <span className="inline-block rounded-full bg-white px-3 py-1 text-[11px] font-semibold text-brand-dark shadow-sm">
                    {member.badge}
                  </span>
                </div>

                <div className="mt-5">
                  <h3 className="font-display text-xl font-semibold text-brand-dark">
                    {member.name}
                  </h3>
                  <p className="mt-0.5 text-xs font-medium text-coral">
                    {member.role}
                  </p>
                </div>

                <p className="mt-4 text-xs leading-relaxed text-foreground/75 sm:text-sm">
                  {member.bio}
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-black/5 pt-4">
                <span className="text-[11px] font-semibold text-foreground/60">
                  Connect on LinkedIn
                </span>
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} LinkedIn`}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-brand-dark shadow-sm transition hover:bg-brand hover:text-white"
                  >
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.65 1.65 0 0 0 1.66-1.66 1.66 1.66 0 0 0-3.32 0 1.65 1.65 0 0 0 1.66 1.66m1.39 9.74v-8.37H5.07v8.37h2.78z" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Partners & Collaborators Component */}
      <Partners />

      {/* Focus Areas */}
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
