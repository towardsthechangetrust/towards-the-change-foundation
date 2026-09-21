import { focusAreas } from "@/lib/site";

export function FocusGrid() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-2xl font-semibold text-brand-dark sm:text-4xl">
          Where we show up
        </h2>
        <p className="mt-2.5 text-sm text-foreground/75 sm:mt-3 sm:text-base">
          Six focus areas, one aim: communities that can stand on their own.
        </p>
      </div>
      <div className="mt-8 grid gap-4 sm:mt-14 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {focusAreas.map((area) => (
          <div
            key={area.title}
            className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm transition hover:shadow-md sm:p-6"
          >
            <h3 className="font-display text-base font-semibold text-brand-dark sm:text-lg">
              {area.title}
            </h3>
            <p className="mt-1.5 text-xs text-foreground/75 sm:mt-2 sm:text-sm">{area.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
