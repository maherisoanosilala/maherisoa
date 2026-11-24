"use client";
import { motion } from "framer-motion";

export function Marquee({
  items,
  speed = 35,
}: {
  items: string[];
  speed?: number;
}) {
  return (
    <div className="relative overflow-hidden py-5 border-y border-stone-200 dark:border-stone-800">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-stone-50 dark:from-stone-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-stone-50 dark:from-stone-950 to-transparent z-10 pointer-events-none" />
      <motion.div
        className="flex gap-10 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      >
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="text-xs font-mono uppercase tracking-[0.2em] text-stone-500 dark:text-stone-400 flex items-center gap-10"
          >
            {item}
            <span className="w-1 h-1 rounded-full bg-emerald-500" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}