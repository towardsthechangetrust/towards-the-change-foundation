import { stats } from "@/lib/site";

export function Stats() {
  return (
    <section className="border-y border-black/5 bg-brand-dark text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-4 gap-y-6 px-5 py-10 sm:gap-8 sm:px-6 sm:py-14 sm:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center sm:text-left">
            <p className="font-display text-2xl font-semibold sm:text-4xl">{stat.value}</p>
            <p className="mt-1 text-xs text-white/75 sm:text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
