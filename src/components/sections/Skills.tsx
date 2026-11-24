import { Section } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { skillGroups } from "@/lib/data";

export function Skills() {
  return (
    <Section
      id="skills"
      index="03"
      label="Stack & Outils"
      title={
        <>
          Boîte à outils{" "}
          <span className="italic text-emerald-700 dark:text-emerald-400">
            technique
          </span>
        </>
      }
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {skillGroups.map((g, i) => (
          <Reveal key={g.title} delay={i * 0.05}>
            <div className="group h-full p-6 rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900/50 hover:border-emerald-600/50 dark:hover:border-emerald-400/50 hover:shadow-[0_4px_24px_-8px_rgba(16,185,129,0.15)] transition-all duration-300">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 grid place-items-center mb-4 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform">
                <g.icon size={18} />
              </div>
              <h3 className="font-medium text-stone-900 dark:text-stone-100 mb-3 text-sm">
                {g.title}
              </h3>
              <ul className="space-y-1.5">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="text-xs text-stone-600 dark:text-stone-400"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}