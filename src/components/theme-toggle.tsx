"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme") as "dark" | "light" | null;
    const initial =
      stored ?? (document.documentElement.classList.contains("dark") ? "dark" : "light");
    setTheme(initial);
    setMounted(true);
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    if (next === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* localStorage unavailable — preference won't persist */
    }
  }

  return (
    <button
      type="button"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      onClick={toggle}
      className="grid h-8 w-8 place-items-center rounded-full border border-glass bg-glass transition-colors hover:bg-glass-lift"
      suppressHydrationWarning
    >
      {mounted ? (
        theme === "dark" ? (
          <Sun className="h-3.5 w-3.5" strokeWidth={1.5} />
        ) : (
          <Moon className="h-3.5 w-3.5" strokeWidth={1.5} />
        )
      ) : (
        <span className="block h-3.5 w-3.5" />
      )}
    </button>
  );
}
