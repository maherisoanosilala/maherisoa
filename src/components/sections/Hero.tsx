"use client";
import { motion } from "framer-motion";
import { FiArrowDownRight, FiMapPin, FiDownload } from "react-icons/fi";
import { profile } from "@/lib/data";
import { Magnetic } from "../Magnetic";
import { Spotlight } from "../Spotlight";
import { Marquee } from "../Marquee";
import { SplitText } from "../SplitText";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 overflow-hidden grain"
    >
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] bg-emerald-400/10 dark:bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-600/30 dark:border-emerald-400/30 bg-emerald-50/50 dark:bg-emerald-950/30 text-xs text-emerald-700 dark:text-emerald-300 mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
              </span>
              Disponible pour de nouveaux projets
            </motion.div>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight text-stone-900 dark:text-stone-50"
            >
              <SplitText text={profile.firstName} delay={0.2} />{" "}
              <span className="italic text-emerald-700 dark:text-emerald-400">
                <SplitText text={profile.lastName} delay={0.4} />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-6 text-lg md:text-xl text-stone-600 dark:text-stone-400 max-w-2xl"
            >
              <span className="text-stone-900 dark:text-stone-200 font-medium">
                {profile.role}
              </span>{" "}
              — {profile.focus}. Je conçois et déploie des solutions critiques,
              du code à l'infrastructure.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Magnetic>
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 text-white text-sm font-medium hover:bg-emerald-700 transition-colors"
                >
                  Démarrer une discussion
                  <FiArrowDownRight className="group-hover:rotate-45 transition-transform" />
                </a>
              </Magnetic>

              <Magnetic>
                <a
                  href={profile.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-stone-300 dark:border-stone-700 text-sm font-medium hover:border-emerald-600 dark:hover:border-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors"
                >
                  <FiDownload />
                  Voir mon CV
                </a>
              </Magnetic>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="md:col-span-4 space-y-4"
          >
            <div className="flex items-center gap-2 text-sm text-stone-500 dark:text-stone-400">
              <FiMapPin className="text-emerald-600 dark:text-emerald-400" />
              {profile.location}
            </div>
            <div className="border-l-2 border-emerald-600 dark:border-emerald-400 pl-4 space-y-1">
              <p className="text-xs uppercase tracking-widest text-stone-500 dark:text-stone-500">
                Focus actuel
              </p>
              <p className="text-sm text-stone-700 dark:text-stone-300">
                Systèmes temps réel · Full-Stack Next.js / NestJS · On-premise
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator — SORTI du max-w-6xl, enfant direct de la section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs text-stone-400 dark:text-stone-600 z-10"
      >
        <span>Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="w-px h-8 bg-stone-300 dark:bg-stone-700"
        />
      </motion.div>

      <div className="absolute -bottom-px left-0 right-0 z-20">
        <Marquee
          items={[
            "Next.js", "NestJS", "React 19", "TypeScript", "MongoDB",
            "PostgreSQL", "Firebase", "Docker", "Linux", "Flutter",
          ]}
        />
      </div>
    </section>
  );
}