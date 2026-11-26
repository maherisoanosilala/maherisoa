import { Section } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { SpotlightCard } from "../ui/SpotlightCard";
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
      <div className="grid md:grid-cols-12 gap-12 items-start">
        {/* Colonne de gauche : Bio */}
        <Reveal className="md:col-span-6 space-y-5 text-stone-600 dark:text-stone-400 leading-relaxed sticky top-24">
          <p className="text-lg text-stone-800 dark:text-stone-200">
            {profile.bio}
          </p>
          <p>{profile.bio2}</p>
        </Reveal>

        {/* Colonne de droite : Grille d'expertises */}
        <Reveal delay={0.15} className="md:col-span-6">
          <p className="text-xs uppercase tracking-[0.2em] text-stone-500 dark:text-stone-500 mb-6 font-medium">
            Domaines d'expertise
          </p>
          
          <div className="grid sm:grid-cols-2 gap-4">
            {expertise.map((item, i) => (
              <Reveal key={item} delay={0.1 + i * 0.05}>
                <SpotlightCard className="group h-full">
                  <div className="flex flex-col gap-3">
                    {/* Numéro de la carte (01, 02...) */}
                    <span className="font-mono text-xs text-stone-300 dark:text-stone-700 group-hover:text-emerald-500 transition-colors">
                      0{i + 1}
                    </span>
                    <span className="text-sm font-medium text-stone-800 dark:text-stone-200 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                      {item}
                    </span>
                  </div>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}