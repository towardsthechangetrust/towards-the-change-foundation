"use client";

import { useState } from "react";

export type MediaItem = {
  id: number;
  title: string;
  category: string;
  media_type: "image" | "video";
  r2_key: string;
  file_size?: number;
  created_at: string;
};

export function GalleryGrid({ initialMedia }: { initialMedia: MediaItem[] }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeMedia, setActiveMedia] = useState<MediaItem | null>(null);

  const categories = [
    "All",
    "Photos",
    "Videos",
    "Health Camps",
    "Women & Child Safety",
    "Youth Leadership",
    "Environmental Action",
    "Rural Upliftment",
    "Awards & Recognition",
  ];

  const filteredMedia = initialMedia.filter((item) => {
    if (selectedCategory === "All") return true;
    if (selectedCategory === "Photos") return item.media_type === "image";
    if (selectedCategory === "Videos") return item.media_type === "video";
    return item.category === selectedCategory;
  });

  return (
    <>
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 pb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
              selectedCategory === cat
                ? "bg-brand text-white shadow-sm"
                : "bg-sand/60 text-brand-dark hover:bg-sand"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid of photos/videos */}
      {filteredMedia.length === 0 ? (
        <div className="mx-auto max-w-md rounded-3xl border border-dashed border-black/15 bg-white p-10 text-center">
          <p className="text-3xl">📷</p>
          <h3 className="mt-3 font-display text-lg font-semibold text-brand-dark">
            No media in this category yet
          </h3>
          <p className="mt-1 text-xs text-foreground/70">
            Field photos and videos from upcoming community camps will appear here.
          </p>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredMedia.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveMedia(item)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition hover:shadow-md"
            >
              <div className="relative aspect-4/3 w-full overflow-hidden bg-sand/30">
                {item.media_type === "video" ? (
                  <div className="relative h-full w-full">
                    <video
                      src={`/api/media/${item.r2_key}#t=0.5`}
                      className="h-full w-full object-cover"
                      preload="metadata"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition group-hover:bg-black/30">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-brand shadow-lg">
                        ▶
                      </div>
                    </div>
                  </div>
                ) : (
                  <img
                    src={`/api/media/${item.r2_key}`}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                )}

                <span className="absolute left-3 top-3 rounded-full bg-black/60 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-xs">
                  {item.media_type}
                </span>
              </div>

              <div className="p-4">
                <span className="rounded-full bg-sand px-2 py-0.5 text-[10px] font-medium text-brand-dark">
                  {item.category}
                </span>
                <h3 className="mt-1.5 font-display text-sm font-semibold text-brand-dark line-clamp-1 group-hover:text-brand">
                  {item.title}
                </h3>
                <time className="mt-1 block text-[11px] text-foreground/50">
                  {new Date(item.created_at).toLocaleDateString("en-IN", {
                    dateStyle: "medium",
                  })}
                </time>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Lightbox / Video Modal */}
      {activeMedia && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setActiveMedia(null)}
        >
          <div
            className="relative max-h-[90vh] max-w-4xl overflow-hidden rounded-2xl bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveMedia(null)}
              aria-label="Close modal"
              className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white transition hover:bg-black"
            >
              ✕
            </button>

            {activeMedia.media_type === "video" ? (
              <video
                src={`/api/media/${activeMedia.r2_key}`}
                className="max-h-[75vh] w-full"
                controls
                autoPlay
              />
            ) : (
              <img
                src={`/api/media/${activeMedia.r2_key}`}
                alt={activeMedia.title}
                className="max-h-[75vh] w-auto max-w-full object-contain"
              />
            )}

            <div className="bg-brand-dark p-4 text-white">
              <span className="rounded-full bg-white/20 px-2 py-0.5 text-[10px] uppercase tracking-wide">
                {activeMedia.category}
              </span>
              <h3 className="mt-1 font-display text-base font-semibold">{activeMedia.title}</h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
