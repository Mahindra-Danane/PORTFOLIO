import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: "rgb(var(--bg-base) / <alpha-value>)",
          900: "rgb(var(--bg-card) / <alpha-value>)",
          800: "rgb(var(--bg-card) / <alpha-value>)",
          700: "rgb(var(--bg-card) / <alpha-value>)",
        },
        chrome: {
          DEFAULT: "rgb(var(--text-primary) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "rgb(var(--accent-color) / <alpha-value>)",
          hot: "rgb(var(--accent-hot) / <alpha-value>)",
        },
        aurora: {
          magenta: "rgb(var(--aurora-1) / <alpha-value>)",
          purple: "rgb(var(--aurora-2) / <alpha-value>)",
          cyan: "rgb(var(--aurora-3) / <alpha-value>)",
          gold: "#FFB347",
        },
      },
      backgroundColor: {
        glass: "rgba(255,255,255,0.045)",
        "glass-lift": "rgba(255,255,255,0.075)",
        "glass-strong": "rgba(255,255,255,0.10)",
      },
      borderColor: {
        glass: "rgba(255,255,255,0.10)",
        "glass-lift": "rgba(255,255,255,0.16)",
      },
      backdropBlur: {
        glass: "24px",
        "glass-strong": "40px",
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "ui-serif", "Georgia", "serif"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tightish: "-0.02em",
      },
      fontSize: {
        "display-xl": ["clamp(2.75rem, 6vw, 4.5rem)", { lineHeight: "1.0", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2.25rem, 4.5vw, 3.5rem)", { lineHeight: "1.05", letterSpacing: "-0.025em" }],
        "display-md": ["clamp(1.5rem, 2.8vw, 2.25rem)", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
      },
      boxShadow: {
        /* Glass shadows are defined in globals.css as theme-aware
           component classes (.shadow-glass-lift, etc.) so they switch
           cleanly between light and dark themes. */
      },
      animation: {
        ticker: "ticker 40s linear infinite",
        "aurora-1": "aurora-1 22s ease-in-out infinite",
        "aurora-2": "aurora-2 28s ease-in-out infinite",
        "aurora-3": "aurora-3 34s ease-in-out infinite",
        "fade-in": "fade-in 0.8s cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "aurora-1": {
          "0%, 100%": { transform: "translate(0%, 0%) scale(1)" },
          "50%": { transform: "translate(8%, -6%) scale(1.15)" },
        },
        "aurora-2": {
          "0%, 100%": { transform: "translate(0%, 0%) scale(1)" },
          "50%": { transform: "translate(-10%, 5%) scale(0.9)" },
        },
        "aurora-3": {
          "0%, 100%": { transform: "translate(0%, 0%) scale(1.1)" },
          "50%": { transform: "translate(6%, 8%) scale(1)" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
