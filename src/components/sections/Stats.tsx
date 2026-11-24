import { Reveal } from "../ui/Reveal";
import { Counter } from "../Counter";
import { stats } from "@/lib/data";

export function Stats() {
  return (
    <section className="relative border-y border-stone-200 dark:border-stone-800 py-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
            <div>
              <p className="font-display text-4xl md:text-5xl tracking-tight text-stone-900 dark:text-stone-100">
                <Counter to={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-stone-500 dark:text-stone-500">
                {s.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}