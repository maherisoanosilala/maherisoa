import { Section } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { education, languages, interests } from "@/lib/data";

export function Education() {
  return (
    <Section
      id="education"
      index="04"
      label="Formation"
      title={
        <>
          Diplômes &{" "}
          <span className="italic text-emerald-700 dark:text-emerald-400">
            langues
          </span>
        </>
      }
    >
      <div className="grid md:grid-cols-12 gap-8">
        <div className="md:col-span-7 space-y-3">
          {education.map((e, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="p-6 rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900/50 hover:border-emerald-600/50 dark:hover:border-emerald-400/50 transition-colors">
                <div className="flex flex-wrap justify-between items-baseline gap-2 mb-1">
                  <h3 className="font-display text-xl text-stone-900 dark:text-stone-100 tracking-tight">
                    {e.degree}
                  </h3>
                  <span className="text-xs font-mono text-emerald-700 dark:text-emerald-400">
                    {e.period}
                  </span>
                </div>
                <p className="text-sm text-stone-600 dark:text-stone-400">
                  {e.school}
                </p>
                <p className="text-xs text-stone-500 dark:text-stone-500 mt-1">
                  {e.location}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="md:col-span-5 space-y-6">
          <Reveal delay={0.1}>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-stone-500 dark:text-stone-500 mb-4">
                Langues
              </p>
              <ul className="space-y-3">
                {languages.map((l) => (
                  <li
                    key={l.name}
                    className="flex justify-between items-baseline border-b border-stone-200 dark:border-stone-800 pb-2"
                  >
                    <span className="text-stone-800 dark:text-stone-200 text-sm">
                      {l.name}
                    </span>
                    <span className="text-xs text-stone-500 dark:text-stone-500">
                      {l.level}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-stone-500 dark:text-stone-500 mb-4">
                Centres d'intérêt
              </p>
              <div className="flex flex-wrap gap-2">
                {interests.map((i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-stone-600 dark:text-stone-400"
                  >
                    {i}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}