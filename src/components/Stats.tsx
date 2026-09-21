import { stats } from "@/lib/site";

export function Stats() {
  return (
    <section className="border-y border-black/5 bg-brand-dark text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-14 sm:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center sm:text-left">
            <p className="font-display text-3xl font-semibold sm:text-4xl">{stat.value}</p>
            <p className="mt-1 text-sm text-white/70">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
