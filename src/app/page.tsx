import Link from "next/link";
import Image from "next/image";
import { FootstepTrail } from "@/components/Logo";
import { Stats } from "@/components/Stats";
import { FocusGrid } from "@/components/FocusGrid";
import { Journey } from "@/components/Journey";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 pb-16 pt-10 sm:pb-24 sm:pt-24">
          <div className="relative z-10 max-w-2xl">
            <p className="inline-flex items-center rounded-full bg-sand px-3.5 py-1 text-xs font-medium text-brand-dark sm:px-4 sm:py-1.5 sm:text-sm">
              Based in Salem, Tamil Nadu &middot; since {site.founded}
            </p>
            <h1 className="mt-5 font-display text-3xl font-semibold leading-tight text-brand-dark sm:mt-6 sm:text-5xl">
              {site.tagline}, one community at a time.
            </h1>
            <p className="mt-4 text-base text-foreground/75 sm:mt-5 sm:text-lg">
              {site.name} is a youth-led movement working on health, safety,
              education and livelihoods across Tamil Nadu. It is built on the
              idea that lasting change comes from small, consistent steps.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Link
                href="/contact"
                className="w-full rounded-full bg-brand px-6 py-3.5 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-brand-dark sm:w-auto"
              >
                Volunteer with us
              </Link>
              <Link
                href="/about"
                className="w-full rounded-full border border-brand/30 bg-white/90 px-6 py-3.5 text-center text-sm font-semibold text-brand-dark transition hover:border-brand sm:w-auto"
              >
                Our story
              </Link>
            </div>
          </div>

          {/* Mobile subtle trail divider cleanly below the content */}
          <div className="mt-10 flex justify-center text-brand/40 sm:hidden">
            <FootstepTrail className="h-14 w-60" />
          </div>
        </div>

        {/* Desktop animated trail positioned safely below content */}
        <FootstepTrail className="pointer-events-none absolute bottom-8 left-1/2 hidden h-28 w-[480px] -translate-x-1/2 text-brand sm:block" />
      </section>

      <section className="bg-sand">
        <div className="mx-auto grid max-w-5xl items-center gap-8 px-6 py-12 sm:gap-10 sm:py-16 sm:grid-cols-2">
          <div className="order-2 overflow-hidden rounded-2xl shadow-md sm:order-1 max-h-[420px] sm:max-h-none">
            <Image
              src="/images/cm-youth-award.jpg"
              alt={`${site.founder} receiving the Chief Minister's Youth Award 2026`}
              width={700}
              height={860}
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <div className="order-1 sm:order-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-coral sm:text-sm">
              Recognition
            </p>
            <h2 className="mt-2.5 font-display text-2xl font-semibold text-brand-dark sm:mt-3 sm:text-4xl">
              Chief Minister&apos;s Youth Award, 2026
            </h2>
            <p className="mt-3.5 text-sm text-foreground/75 sm:mt-4 sm:text-base">
              In 2026, the Government of Tamil Nadu recognised our founder,{" "}
              {site.founder}, with the Chief Minister&apos;s Youth Award for
              youth-led social innovation and community empowerment across the
              state.
            </p>
          </div>
        </div>
      </section>

      <Stats />
      <FocusGrid />
      <Journey />

      <section className="mx-auto max-w-4xl px-6 py-14 text-center sm:py-20">
        <h2 className="font-display text-2xl font-semibold text-brand-dark sm:text-4xl">
          Take the next step with us
        </h2>
        <p className="mx-auto mt-3.5 max-w-xl text-sm text-foreground/75 sm:mt-4 sm:text-base">
          Whether it&apos;s volunteering a weekend, partnering as an
          organisation, or spreading the word, every step counts.
        </p>
        <Link
          href="/contact"
          className="mt-7 inline-block w-full rounded-full bg-brand px-7 py-3.5 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-brand-dark sm:w-auto"
        >
          Get in touch
        </Link>
      </section>
    </>
  );
}
