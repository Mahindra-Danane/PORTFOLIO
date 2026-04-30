"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, animate } from "motion/react";

/**
 * Animates an integer (or "8+", "32K", etc.) from 0 up to its target
 * once the element scrolls into view. Non-numeric prefixes/suffixes
 * (e.g. "+", "K", "—") are preserved verbatim.
 */
export function CountUp({
  value,
  duration = 1.6,
  className,
}: {
  value: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const motionValue = useMotionValue(0);
  const [display, setDisplay] = useState<string>(numericPrefix(value) ? "0" : value);

  useEffect(() => {
    if (!inView) return;
    const target = numericPrefix(value);
    if (target === null) {
      setDisplay(value);
      return;
    }
    const controls = animate(motionValue, target, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => {
        setDisplay(formatNumber(latest, value));
      },
    });
    return controls.stop;
  }, [inView, value, duration, motionValue]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}

function numericPrefix(s: string): number | null {
  const match = s.match(/^(\d+)/);
  if (!match) return null;
  return parseInt(match[1]!, 10);
}

function formatNumber(latest: number, original: string): string {
  const match = original.match(/^(\d+)(.*)$/);
  if (!match) return original;
  const suffix = match[2] ?? "";
  return Math.round(latest).toString() + suffix;
}
