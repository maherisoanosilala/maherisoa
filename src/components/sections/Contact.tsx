import { Section } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { FiMail, FiPhone, FiMapPin, FiArrowUpRight } from "react-icons/fi";
import { profile } from "@/lib/data";

export function Contact() {
  return (
    <Section
      id="contact"
      index="05"
      label="Contact"
      title={
        <>
          Travaillons{" "}
          <span className="italic text-emerald-700 dark:text-emerald-400">
            ensemble
          </span>
          .
        </>
      }
    >
      <Reveal>
        <div className="relative rounded-2xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900/50 p-8 md:p-12 overflow-hidden">
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-emerald-400/10 dark:bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <p className="text-stone-600 dark:text-stone-400 max-w-2xl mb-10 text-lg">
            Une idée, un projet, une mission ? Je réponds sous 24h. Que ce soit
            pour une architecture full-stack, un déploiement on-premise ou un
            système temps réel — discutons-en.
          </p>

          <div className="grid sm:grid-cols-2 gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="group flex items-center gap-4 p-4 rounded-xl border border-stone-200 dark:border-stone-800 hover:border-emerald-600 dark:hover:border-emerald-400 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 grid place-items-center shrink-0">
                <FiMail size={18} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs text-stone-500 dark:text-stone-500 uppercase tracking-wider">
                  Email
                </p>
                <p className="text-sm text-stone-800 dark:text-stone-200 truncate">
                  {profile.email}
                </p>
              </div>
              <FiArrowUpRight className="text-stone-400 group-hover:text-emerald-600 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
            </a>

            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="group flex items-center gap-4 p-4 rounded-xl border border-stone-200 dark:border-stone-800 hover:border-emerald-600 dark:hover:border-emerald-400 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 grid place-items-center shrink-0">
                <FiPhone size={18} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs text-stone-500 dark:text-stone-500 uppercase tracking-wider">
                  Téléphone
                </p>
                <p className="text-sm text-stone-800 dark:text-stone-200 truncate">
                  {profile.phone}
                </p>
              </div>
              <FiArrowUpRight className="text-stone-400 group-hover:text-emerald-600 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
            </a>

            <div className="flex items-center gap-4 p-4 rounded-xl border border-stone-200 dark:border-stone-800 sm:col-span-2">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 grid place-items-center shrink-0">
                <FiMapPin size={18} />
              </div>
              <div>
                <p className="text-xs text-stone-500 dark:text-stone-500 uppercase tracking-wider">
                  Localisation
                </p>
                <p className="text-sm text-stone-800 dark:text-stone-200">
                  {profile.location}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}