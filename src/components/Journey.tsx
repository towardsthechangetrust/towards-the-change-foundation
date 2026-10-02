import { journey } from "@/lib/site";
import { FootstepIcon } from "@/components/Logo";

export function Journey() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-2xl font-semibold text-brand-dark sm:text-4xl">
          Every step has taken us further
        </h2>
        <p className="mt-2.5 text-sm text-foreground/75 sm:mt-3 sm:text-base">
          A small, steady trail of work rather than one giant leap.
        </p>
      </div>

      <ol className="relative mx-auto mt-10 max-w-3xl sm:mt-14">
        {journey.map((step, i) => (
          <li key={step.year} className="relative flex gap-4 pb-9 last:pb-0 sm:gap-6 sm:pb-12">
            {i !== journey.length - 1 && (
              <span
                aria-hidden="true"
                className="absolute left-[17px] top-9 h-[calc(100%-1.25rem)] w-px bg-black/15 sm:left-[19px] sm:top-10 sm:h-[calc(100%-1.5rem)]"
              />
            )}
            <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sand sm:h-10 sm:w-10">
              <FootstepIcon className="h-6 w-6 text-black" />
            </span>
            <div className="pt-0.5 sm:pt-1">
              <p className="text-xs font-semibold tracking-wide text-coral sm:text-sm">{step.year}</p>
              <h3 className="mt-0.5 font-display text-lg font-semibold text-brand-dark sm:mt-1 sm:text-xl">
                {step.title}
              </h3>
              <p className="mt-1 text-xs text-foreground/75 sm:text-sm">{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
