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
        <div className="mx-auto max-w-6xl px-6 pb-20 pt-16 sm:pt-24">
          <div className="max-w-2xl">
            <p className="inline-flex items-center rounded-full bg-sand px-4 py-1.5 text-sm font-medium text-brand-dark">
              Based in Salem, Tamil Nadu &middot; since {site.founded}
            </p>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-tight text-brand-dark sm:text-5xl">
              {site.tagline}, one community at a time.
            </h1>
            <p className="mt-5 text-lg text-foreground/70">
              {site.name} is a youth-led movement working on health, safety,
              education and livelihoods across Tamil Nadu. It is built on the
              idea that lasting change comes from small, consistent steps.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark"
              >
                Volunteer with us
              </Link>
              <Link
                href="/about"
                className="rounded-full border border-brand/30 px-6 py-3 text-sm font-semibold text-brand-dark transition hover:border-brand"
              >
                Our story
              </Link>
            </div>
          </div>
        </div>
        <FootstepTrail className="pointer-events-none absolute bottom-10 left-1/2 h-24 w-[360px] -translate-x-1/2 text-brand sm:bottom-14 sm:h-32 sm:w-[480px]" />
      </section>

      <section className="bg-sand">
        <div className="mx-auto grid max-w-5xl items-center gap-10 px-6 py-16 sm:grid-cols-2">
          <div className="order-2 overflow-hidden rounded-2xl shadow-md sm:order-1">
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
            <p className="text-sm font-semibold uppercase tracking-wide text-coral">
              Recognition
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-brand-dark sm:text-4xl">
              Chief Minister&apos;s Youth Award, 2026
            </h2>
            <p className="mt-4 text-foreground/70">
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

      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h2 className="font-display text-3xl font-semibold text-brand-dark sm:text-4xl">
          Take the next step with us
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-foreground/70">
          Whether it&apos;s volunteering a weekend, partnering as an
          organisation, or spreading the word, every step counts.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-block rounded-full bg-brand px-7 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark"
        >
          Get in touch
        </Link>
      </section>
    </>
  );
}
