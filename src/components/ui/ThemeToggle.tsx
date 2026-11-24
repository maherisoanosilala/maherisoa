"use client";
import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = stored ? stored === "dark" : prefersDark;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  if (!mounted) return <div className="w-9 h-9" />;

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="w-9 h-9 grid place-items-center rounded-full border border-stone-200 dark:border-stone-800 hover:border-emerald-500 dark:hover:border-emerald-500 transition-colors"
    >
      <motion.div
        key={dark ? "sun" : "moon"}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {dark ? <FiSun size={16} /> : <FiMoon size={16} />}
      </motion.div>
    </button>
  );
}