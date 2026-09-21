import type { Metadata } from "next";
import { getCloudflareContext } from "@opennextjs/cloudflare";
import { site } from "@/lib/site";
import { GalleryGrid, type MediaItem } from "./GalleryGrid";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impact Gallery | Photos & Videos",
  description: `Photos and videos from ground-level community drives, free medical camps, and youth initiatives conducted by ${site.name} across Tamil Nadu.`,
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: `Impact Gallery · ${site.name}`,
    description: `Photos and videos from ground-level community drives and health camps by ${site.name} in Tamil Nadu.`,
    url: `${site.url}/gallery`,
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `Impact Gallery - ${site.name}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Impact Gallery · ${site.name}`,
    description: `Photos and videos from ground-level community drives and health camps by ${site.name} in Tamil Nadu.`,
    images: ["/opengraph-image"],
  },
};

const galleryJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${site.url}/gallery/#webpage`,
      url: `${site.url}/gallery`,
      name: `Impact Gallery · ${site.name}`,
      description: `Photos and videos from community welfare initiatives across Tamil Nadu.`,
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
          name: "Impact Gallery",
          item: `${site.url}/gallery`,
        },
      ],
    },
  ],
};

async function getMediaItems(): Promise<MediaItem[]> {
  try {
    const { env } = await getCloudflareContext({ async: true });
    if (!env?.DB) return [];

    const { results } = await env.DB.prepare(
      "SELECT id, title, category, media_type, r2_key, file_size, created_at FROM media ORDER BY created_at DESC",
    ).all<MediaItem>();

    return results || [];
  } catch (err) {
    console.warn("[gallery] Could not fetch media from D1:", err);
    return [];
  }
}

export default async function GalleryPage() {
  const media = await getMediaItems();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(galleryJsonLd) }}
      />
      <section className="mx-auto max-w-4xl px-4 py-10 text-center sm:px-6 sm:py-16">
        <p className="text-xs font-semibold uppercase tracking-wide text-coral sm:text-sm">
          Field In Action
        </p>
        <h1 className="mt-2.5 font-display text-2xl font-semibold text-brand-dark sm:mt-3 sm:text-5xl">
          Visual stories of impact on the ground
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-foreground/75 sm:mt-4 sm:text-lg">
          Snapshots and recordings of youth leadership camps, rural medical outreach, and safety drives
          conducted across Tamil Nadu.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <GalleryGrid initialMedia={media} />
      </section>

      {/* CTA Section */}
      <section className="border-t border-black/5 bg-sand/40 py-14 text-center sm:py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-display text-2xl font-semibold text-brand-dark sm:text-3xl">
            Want to be a part of our next drive?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-foreground/75">
            Join hundreds of youth organizers and volunteers making tangible differences in local communities.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-dark"
            >
              Volunteer with us
            </Link>
            <Link
              href="/donate"
              className="rounded-full border border-brand/30 bg-white px-6 py-3 text-sm font-semibold text-brand-dark transition hover:border-brand"
            >
              Support our programs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
