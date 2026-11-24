import { Section } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { profile, expertise } from "@/lib/data";

export function About() {
  return (
    <Section
      id="about"
      index="01"
      label="À propos"
      title={
        <>
          Ingénieur, artisan,{" "}
          <span className="italic text-emerald-700 dark:text-emerald-400">
            pragmaticien
          </span>
          .
        </>
      }
    >
      <div className="grid md:grid-cols-12 gap-12">
        <Reveal className="md:col-span-7 space-y-5 text-stone-600 dark:text-stone-400 leading-relaxed">
          <p className="text-lg text-stone-800 dark:text-stone-200">
            {profile.bio}
          </p>
          <p>{profile.bio2}</p>
        </Reveal>

        <Reveal delay={0.15} className="md:col-span-5">
          <p className="text-xs uppercase tracking-[0.2em] text-stone-500 dark:text-stone-500 mb-5">
            Domaines d'expertise
          </p>
          <ul className="space-y-3">
            {expertise.map((item, i) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm text-stone-700 dark:text-stone-300 group"
              >
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400 shrink-0 group-hover:scale-150 transition-transform" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}