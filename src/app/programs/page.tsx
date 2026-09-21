import type { Metadata } from "next";
import { FocusGrid } from "@/components/FocusGrid";
import { site, focusAreas } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Programs & Initiatives",
  description: `Explore the community welfare programs run by ${site.name} across Tamil Nadu, spanning youth leadership, women & child safety, free health camps, tree plantation, and rural livelihoods.`,
  alternates: { canonical: "/programs" },
  openGraph: {
    title: `Our Programs & Initiatives · ${site.name}`,
    description: `Grassroots initiatives in youth leadership, healthcare, women safety, and environmental action by ${site.name} across Tamil Nadu.`,
    url: `${site.url}/programs`,
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `Programs by ${site.name}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Our Programs & Initiatives · ${site.name}`,
    description: `Grassroots initiatives in youth leadership, healthcare, women safety, and environmental action by ${site.name}.`,
    images: ["/opengraph-image"],
  },
};

const programsJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${site.url}/programs/#webpage`,
      url: `${site.url}/programs`,
      name: `Our Programs · ${site.name}`,
      description: `Community welfare programs run by ${site.name} across Tamil Nadu.`,
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
          name: "Programs",
          item: `${site.url}/programs`,
        },
      ],
    },
    {
      "@type": "ItemList",
      name: "Focus Areas & Community Programs",
      itemListElement: focusAreas.map((area, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: area.title,
        description: area.description,
      })),
    },
  ],
};

export default function ProgramsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(programsJsonLd) }}
      />
      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-coral">Programs</p>
        <h1 className="mt-3 font-display text-4xl font-semibold text-brand-dark">
          Work that meets people where they are
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/70">
          From village camps to factory townships and government schools, our
          programs are built around real, local needs rather than a fixed
          template.
        </p>
      </section>
      <FocusGrid />
    </>
  );
}
