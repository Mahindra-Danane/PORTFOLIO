"use client";

import { motion, useScroll, useTransform } from "motion/react";

/**
 * Animated aurora mesh background.
 *  - Pure CSS keyframes for orb drift (continuous)
 *  - Framer Motion useScroll for subtle parallax on scroll (depth)
 *  - Two color stories — switches via .dark class
 */
export function AuroraBackground() {
  const { scrollY } = useScroll();
  const yOrb1 = useTransform(scrollY, [0, 2000], [0, -120]);
  const yOrb2 = useTransform(scrollY, [0, 2000], [0, -200]);
  const yOrb3 = useTransform(scrollY, [0, 2000], [0, -80]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* === LIGHT THEME === */}
      <div className="absolute inset-0 dark:hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(1200px 800px at 70% -10%, rgba(96,165,250,0.22), transparent 60%), radial-gradient(900px 700px at 0% 100%, rgba(139,92,246,0.14), transparent 55%), radial-gradient(900px 700px at 100% 100%, rgba(6,182,212,0.10), transparent 60%), #FAFAFA",
          }}
        />
        <motion.div
          style={{ y: yOrb1 }}
          className="absolute -left-32 top-[10%] h-[640px] w-[640px] animate-aurora-1 rounded-full opacity-50 blur-3xl"
        >
          <div
            className="h-full w-full"
            style={{
              background:
                "radial-gradient(circle at 30% 30%, #60A5FA 0%, rgba(96,165,250,0.35) 40%, transparent 70%)",
            }}
          />
        </motion.div>
        <motion.div
          style={{ y: yOrb2 }}
          className="absolute right-[-10%] top-[35%] h-[720px] w-[720px] animate-aurora-2 rounded-full opacity-40 blur-3xl"
        >
          <div
            className="h-full w-full"
            style={{
              background:
                "radial-gradient(circle at 70% 50%, #8B5CF6 0%, rgba(139,92,246,0.22) 45%, transparent 75%)",
            }}
          />
        </motion.div>
        <motion.div
          style={{ y: yOrb3 }}
          className="absolute bottom-[-15%] left-[35%] h-[800px] w-[800px] animate-aurora-3 rounded-full opacity-30 blur-3xl"
        >
          <div
            className="h-full w-full"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, #06B6D4 0%, rgba(6,182,212,0.25) 45%, transparent 75%)",
            }}
          />
        </motion.div>
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#181B24 1px, transparent 1px), linear-gradient(90deg, #181B24 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      {/* === DARK THEME === */}
      <div className="absolute inset-0 hidden dark:block">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(1200px 800px at 70% -10%, rgba(123,91,255,0.18), transparent 60%), radial-gradient(900px 700px at 0% 100%, rgba(79,143,255,0.16), transparent 55%), radial-gradient(900px 700px at 100% 100%, rgba(61,208,255,0.10), transparent 60%), #08070C",
          }}
        />
        <motion.div
          style={{ y: yOrb1 }}
          className="absolute -left-32 top-[10%] h-[640px] w-[640px] animate-aurora-1 rounded-full opacity-60 blur-3xl"
        >
          <div
            className="h-full w-full"
            style={{
              background:
                "radial-gradient(circle at 30% 30%, #4F8FFF 0%, rgba(79,143,255,0.4) 40%, transparent 70%)",
            }}
          />
        </motion.div>
        <motion.div
          style={{ y: yOrb2 }}
          className="absolute right-[-10%] top-[35%] h-[720px] w-[720px] animate-aurora-2 rounded-full opacity-55 blur-3xl"
        >
          <div
            className="h-full w-full"
            style={{
              background:
                "radial-gradient(circle at 70% 50%, #7B5BFF 0%, rgba(123,91,255,0.35) 45%, transparent 75%)",
            }}
          />
        </motion.div>
        <motion.div
          style={{ y: yOrb3 }}
          className="absolute bottom-[-15%] left-[35%] h-[800px] w-[800px] animate-aurora-3 rounded-full opacity-35 blur-3xl"
        >
          <div
            className="h-full w-full"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, #3DD0FF 0%, rgba(61,208,255,0.3) 45%, transparent 75%)",
            }}
          />
        </motion.div>
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 40%, rgba(8,7,12,0.6) 100%)",
          }}
        />
      </div>
    </div>
  );
}
