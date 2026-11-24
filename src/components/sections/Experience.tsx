"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Section } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { experience } from "@/lib/data";

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 30%"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <Section
      id="experience"
      index="02"
      label="Expérience"
      title={
        <>
          Parcours{" "}
          <span className="italic text-emerald-700 dark:text-emerald-400">
            professionnel
          </span>
        </>
      }
    >
      <div ref={ref} className="relative">
        {/* Ligne de fond (gris) */}
        <div className="absolute left-[7px] md:left-[9px] top-2 bottom-2 w-px bg-stone-200 dark:bg-stone-800" />

        {/* Ligne de progression (verte, animée au scroll) */}
        <motion.div
          style={{ scaleY, originY: 0 }}
          className="absolute left-[7px] md:left-[9px] top-2 bottom-2 w-px bg-emerald-600 dark:bg-emerald-400"
        />

        <div className="space-y-16">
          {experience.map((exp, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="relative pl-10 md:pl-14">
                {/* Dot */}
                <div className="absolute left-0 top-2 w-[15px] h-[15px] md:w-[19px] md:h-[19px] rounded-full border-2 border-emerald-600 dark:border-emerald-400 bg-stone-50 dark:bg-stone-950">
                  <div className="absolute inset-1 rounded-full bg-emerald-600 dark:bg-emerald-400" />
                </div>

                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-2">
                  <h3 className="font-display text-2xl md:text-3xl text-stone-900 dark:text-stone-100 tracking-tight">
                    {exp.title}
                  </h3>
                  <span className="text-xs font-mono text-emerald-700 dark:text-emerald-400 tracking-wider">
                    {exp.period}
                  </span>
                </div>

                <div className="mb-4">
                  <p className="text-stone-800 dark:text-stone-200 font-medium">
                    {exp.company}
                  </p>
                  <p className="text-xs text-stone-500 dark:text-stone-500 mt-0.5">
                    {exp.context}
                  </p>
                </div>

                <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed mb-5 italic border-l-2 border-emerald-500/30 pl-4">
                  {exp.description}
                </p>

                <ul className="space-y-3 mb-6">
                  {exp.bullets.map((b, j) => (
                    <li
                      key={j}
                      className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed flex gap-3"
                    >
                      <span className="text-emerald-600 dark:text-emerald-400 mt-1 text-xs shrink-0">
                        ▸
                      </span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-stone-600 dark:text-stone-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}