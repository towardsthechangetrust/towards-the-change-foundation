import { partners } from "@/lib/site";

export function Partners() {
  return (
    <section className="border-y border-black/5 bg-sand/35 py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-coral sm:text-sm">
            Institutional Collaboration
          </p>
          <h2 className="mt-2 font-display text-2xl font-semibold text-brand-dark sm:text-4xl">
            Our Partners & Collaborators
          </h2>
          <p className="mt-3 text-sm text-foreground/75 sm:text-base">
            Working alongside statutory bodies, national initiatives, and impact organizations to scale grassroots welfare across Tamil Nadu.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
          {partners.map((partner) => (
            <div
              key={partner.shortName}
              className="group relative flex flex-col justify-between rounded-3xl border border-black/5 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand/20 hover:shadow-md sm:p-7"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center rounded-full bg-sand px-3 py-1 text-[11px] font-semibold text-brand-dark">
                    {partner.badge}
                  </span>
                  <span className="text-xs font-mono font-bold tracking-wider text-coral">
                    {partner.shortName}
                  </span>
                </div>

                <div className="mt-5">
                  <h3 className="font-display text-lg font-semibold text-brand-dark transition group-hover:text-brand sm:text-xl">
                    {partner.name}
                  </h3>
                  <p className="mt-0.5 text-xs font-medium text-foreground/60">
                    {partner.organization}
                  </p>
                  <p className="mt-1 text-[11px] font-semibold text-brand-dark/80">
                    {partner.authority}
                  </p>
                </div>

                <p className="mt-4 text-xs leading-relaxed text-foreground/75 sm:text-sm">
                  {partner.description}
                </p>
              </div>

              <div className="mt-6 flex items-center gap-2 border-t border-black/5 pt-4 text-[11px] font-medium text-brand">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand" />
                Active Strategic Partner
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
