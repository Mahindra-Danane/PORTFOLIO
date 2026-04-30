"use client";

import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

export type RevealVariant =
  | "fade-up"
  | "fade-in"
  | "scale-in"
  | "slide-right"
  | "slide-left"
  | "blur-in";

const EASE_OUT_EXPO: [number, number, number, number] = [0.22, 1, 0.36, 1];

const VARIANTS: Record<RevealVariant, Variants> = {
  "fade-up": {
    hidden: { opacity: 0, y: 32 },
    visible: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: EASE_OUT_EXPO, delay: i * 0.06 },
    }),
  },
  "fade-in": {
    hidden: { opacity: 0 },
    visible: (i: number = 0) => ({
      opacity: 1,
      transition: { duration: 0.9, ease: EASE_OUT_EXPO, delay: i * 0.06 },
    }),
  },
  "scale-in": {
    hidden: { opacity: 0, scale: 0.96 },
    visible: (i: number = 0) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: EASE_OUT_EXPO, delay: i * 0.06 },
    }),
  },
  "slide-right": {
    hidden: { opacity: 0, x: -32 },
    visible: (i: number = 0) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: EASE_OUT_EXPO, delay: i * 0.06 },
    }),
  },
  "slide-left": {
    hidden: { opacity: 0, x: 32 },
    visible: (i: number = 0) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: EASE_OUT_EXPO, delay: i * 0.06 },
    }),
  },
  "blur-in": {
    hidden: { opacity: 0, filter: "blur(8px)", y: 12 },
    visible: (i: number = 0) => ({
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: { duration: 0.9, ease: EASE_OUT_EXPO, delay: i * 0.06 },
    }),
  },
};

export function Reveal({
  children,
  delay = 0,
  className,
  variant = "fade-up",
  amount = 0.1,
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  variant?: RevealVariant;
  amount?: number;
  once?: boolean;
}) {
  return (
    <motion.div
      className={className}
      variants={VARIANTS[variant]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      custom={delay}
    >
      {children}
    </motion.div>
  );
}
