import type { Metadata } from "next";
import { FocusGrid } from "@/components/FocusGrid";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Programs",
  description: `Explore the community programs run by ${site.name} across Tamil Nadu, spanning youth leadership, safety, health, environment and livelihoods.`,
  alternates: { canonical: "/programs" },
};

export default function ProgramsPage() {
  return (
    <>
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
