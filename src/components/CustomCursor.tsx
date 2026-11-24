"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { damping: 25, stiffness: 300 });
  const springY = useSpring(cursorY, { damping: 25, stiffness: 300 });
  const [hovering, setHovering] = useState(false);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setHidden(false);
      const target = e.target as HTMLElement;
      setHovering(!!target.closest("a, button, [data-cursor='hover']"));
    };
    const leave = () => setHidden(true);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
    };
  }, [cursorX, cursorY]);

  return (
    <div className="hidden md:block">
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400 pointer-events-none z-[9999]"
        style={{ x: cursorX, y: cursorY, translateX: "-50%", translateY: "-50%" }}
        animate={{ opacity: hidden ? 0 : 1, scale: hovering ? 0 : 1 }}
        transition={{ duration: 0.15 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-emerald-600/60 dark:border-emerald-400/60 pointer-events-none z-[9998]"
        style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          opacity: hidden ? 0 : 1,
          scale: hovering ? 1.6 : 1,
          backgroundColor: hovering ? "rgba(16,185,129,0.12)" : "rgba(16,185,129,0)",
        }}
        transition={{ duration: 0.2 }}
      />
    </div>
  );
}