import { journey } from "@/lib/site";

function FootIcon({ flip }: { flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 34"
      className={`h-6 w-6 text-brand/70 ${flip ? "-scale-x-100" : ""}`}
      aria-hidden="true"
    >
      <ellipse cx="12" cy="20" rx="7" ry="12" fill="currentColor" />
      <ellipse cx="5" cy="6" rx="2.1" ry="2.6" fill="currentColor" />
      <ellipse cx="10" cy="3.6" rx="2.1" ry="2.8" fill="currentColor" />
      <ellipse cx="15" cy="3.6" rx="2" ry="2.7" fill="currentColor" />
      <ellipse cx="19.5" cy="5.6" rx="1.8" ry="2.4" fill="currentColor" />
    </svg>
  );
}

export function Journey() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl font-semibold text-brand-dark sm:text-4xl">
          Every step has taken us further
        </h2>
        <p className="mt-3 text-foreground/70">
          A small, steady trail of work rather than one giant leap.
        </p>
      </div>

      <ol className="relative mx-auto mt-14 max-w-3xl">
        {journey.map((step, i) => (
          <li key={step.year} className="relative flex gap-6 pb-12 last:pb-0">
            {i !== journey.length - 1 && (
              <span
                aria-hidden="true"
                className="absolute left-[19px] top-10 h-[calc(100%-1.5rem)] w-px bg-brand/20"
              />
            )}
            <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sand">
              <FootIcon flip={i % 2 === 1} />
            </span>
            <div className="pt-1">
              <p className="text-sm font-semibold tracking-wide text-coral">{step.year}</p>
              <h3 className="mt-1 font-display text-xl font-semibold text-brand-dark">
                {step.title}
              </h3>
              <p className="mt-1 text-foreground/70">{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
