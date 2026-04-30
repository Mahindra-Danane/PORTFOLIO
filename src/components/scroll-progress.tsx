"use client";

import { motion, useScroll, useSpring } from "motion/react";

/**
 * Thin gradient bar fixed at the top of the viewport that fills as
 * the user scrolls through the page. Progress is spring-smoothed so
 * it doesn't jitter on rapid wheel input.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 26,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed left-0 right-0 top-0 z-[60] h-px origin-left"
      style={{
        scaleX,
        background:
          "linear-gradient(90deg, rgb(var(--aurora-1)), rgb(var(--aurora-2)) 50%, rgb(var(--aurora-3)))",
      }}
    />
  );
}
