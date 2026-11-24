"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { ThemeToggle } from "./ui/ThemeToggle";

const links = [
  { id: "about", label: "À propos" },
  { id: "experience", label: "Expérience" },
  { id: "skills", label: "Stack" },
  { id: "education", label: "Formation" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? (window.scrollY / h) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Bloquer le scroll quand le menu mobile est ouvert
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-stone-50/80 dark:bg-stone-950/80 backdrop-blur-lg border-b border-stone-200/60 dark:border-stone-800/60"
            : "bg-transparent"
        }`}
      >
        <div
          className="absolute bottom-0 left-0 h-[2px] bg-emerald-500 transition-[width] duration-100"
          style={{ width: `${progress}%` }}
        />
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a
            href="#top"
            className="font-display text-lg tracking-tight text-stone-900 dark:text-stone-100"
          >
            L<span className="text-emerald-600 dark:text-emerald-400">.</span>A
            <span className="text-emerald-600 dark:text-emerald-400">.</span>R
          </a>

          <ul className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  className={`relative px-4 py-2 text-sm transition-colors ${
                    active === l.id
                      ? "text-stone-900 dark:text-stone-100"
                      : "text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100"
                  }`}
                >
                  {l.label}
                  {active === l.id && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-full bg-stone-200/60 dark:bg-stone-800/60"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setOpen(true)}
              className="md:hidden w-9 h-9 grid place-items-center rounded-full border border-stone-200 dark:border-stone-800"
              aria-label="Ouvrir le menu"
            >
              <FiMenu size={16} />
            </button>
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-900 hover:bg-emerald-600 dark:hover:bg-emerald-400 transition-colors"
            >
              Discutons
            </a>
          </div>
        </nav>
      </header>

      {/* Drawer mobile fullscreen */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-stone-50 dark:bg-stone-950 md:hidden"
          >
            <div className="h-16 px-6 flex items-center justify-between border-b border-stone-200 dark:border-stone-800">
              <span className="font-display text-lg text-stone-900 dark:text-stone-100">
                L<span className="text-emerald-600 dark:text-emerald-400">.</span>A
                <span className="text-emerald-600 dark:text-emerald-400">.</span>R
              </span>
              <button
                onClick={() => setOpen(false)}
                className="w-9 h-9 grid place-items-center rounded-full border border-stone-200 dark:border-stone-800 text-stone-900 dark:text-stone-100"
                aria-label="Fermer le menu"
              >
                <FiX size={16} />
              </button>
            </div>

            <nav className="px-6 pt-8 flex flex-col">
              {links.map((l, i) => (
                <motion.a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.1 + i * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group font-display text-4xl py-4 text-stone-900 dark:text-stone-100 border-b border-stone-200 dark:border-stone-800 flex items-center justify-between"
                >
                  <span className="group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {l.label}
                  </span>
                  <span className="text-emerald-600 dark:text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity text-2xl">
                    →
                  </span>
                </motion.a>
              ))}

              <motion.a
                href="#contact"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="mt-10 inline-flex items-center justify-center px-6 py-4 rounded-full bg-emerald-600 text-white text-sm font-medium"
              >
                Démarrer une discussion
              </motion.a>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="mt-8 text-xs text-stone-500 dark:text-stone-500 text-center font-mono"
              >
                Fianarantsoa, Madagascar
              </motion.p>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
