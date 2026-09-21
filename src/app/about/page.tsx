import type { Metadata } from "next";
import { Journey } from "@/components/Journey";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `The story behind ${site.name}, a youth-led NGO founded in ${site.founded} in Salem, Tamil Nadu by ${site.founder}.`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-4xl px-6 py-16">
        <p className="text-sm font-semibold uppercase tracking-wide text-coral">About us</p>
        <h1 className="mt-3 font-display text-4xl font-semibold text-brand-dark">
          Started by one volunteer who decided to show up
        </h1>
        <div className="mt-6 space-y-4 text-lg text-foreground/70">
          <p>
            {site.name} began in {site.founded} in {site.location}, founded by{" "}
            {site.founder} on a simple belief: change is a walk, not a leap.
            It gets built one visit, one camp, one conversation at a time.
          </p>
          <p>
            What started with a handful of volunteers has grown into a
            network of youth clubs and self-organised drives across Tamil
            Nadu, working alongside government departments, colleges and
            local communities on health, safety, education, environment and
            livelihoods.
          </p>
          <p>
            We stay deliberately close to the ground. Most of our work
            happens in villages, factory townships and government schools
            that larger organisations rarely reach.
          </p>
        </div>
      </section>

      <Journey />

      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="font-display text-3xl font-semibold text-brand-dark">Our approach</h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-3">
          <div>
            <h3 className="font-display text-lg font-semibold text-brand-dark">Youth-led</h3>
            <p className="mt-2 text-sm text-foreground/70">
              Programs are designed and run by young volunteers, for their own
              communities.
            </p>
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold text-brand-dark">
              Ground-first
            </h3>
            <p className="mt-2 text-sm text-foreground/70">
              We go where the need is, from tribal hamlets to factory
              townships, rather than waiting for people to come to us.
            </p>
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold text-brand-dark">
              Partnered
            </h3>
            <p className="mt-2 text-sm text-foreground/70">
              We work alongside government bodies, colleges and local
              institutions to make every effort go further.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
