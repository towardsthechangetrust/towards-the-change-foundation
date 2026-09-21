import { focusAreas } from "@/lib/site";

export function FocusGrid() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl font-semibold text-brand-dark sm:text-4xl">
          Where we show up
        </h2>
        <p className="mt-3 text-foreground/70">
          Six focus areas, one aim: communities that can stand on their own.
        </p>
      </div>
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {focusAreas.map((area) => (
          <div
            key={area.title}
            className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <h3 className="font-display text-lg font-semibold text-brand-dark">
              {area.title}
            </h3>
            <p className="mt-2 text-sm text-foreground/70">{area.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
