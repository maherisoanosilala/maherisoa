"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";

export function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href="#top"
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.3 }}
          aria-label="Retour en haut"
          className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-900 grid place-items-center shadow-lg hover:bg-emerald-600 dark:hover:bg-emerald-400 transition-colors"
        >
          <FiArrowUp />
        </motion.a>
      )}
    </AnimatePresence>
  );
}