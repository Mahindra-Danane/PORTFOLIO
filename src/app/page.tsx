import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { CountUp } from "@/components/count-up";

const PROJECTS = [
  {
    index: "01",
    href: "/work/workchat",
    period: "2025 — Present",
    role: "Frontend Engineer",
    client: "Octogle Technology",
    title: "WorkChats",
    subtitle: "Enterprise corporate communication ecosystem",
    description:
      "Four frontend surfaces against one Phoenix backend: web + Electron desktop client, React Native iOS/Android app, per-tenant company admin, and a platform-level operator console. Real-time chat, in-house WebRTC + LiveKit calls, native CallKit/ConnectionService, RBAC, calendar.",
    surfaces: [
      { code: "01a", name: "Web + Desktop", platform: "React 19 · Electron" },
      { code: "01b", name: "Mobile", platform: "React Native 0.83" },
      { code: "01c", name: "Tenant Admin", platform: "React 19 · Vite" },
      { code: "01d", name: "Platform Admin", platform: "React 18 · Vite" },
    ],
    tags: ["Phoenix Channels", "WebRTC", "LiveKit", "CallKit", "Redux Saga"],
  },
  {
    index: "02",
    href: "/work/build-id",
    period: "2022 — 2025",
    role: "Software Developer",
    client: "Stepron Technologies",
    title: "Build ID",
    subtitle: "Construction industry web + mobile platform",
    description:
      "Three React/Next.js products for the construction industry — workforce app, admin panel, magazine — plus a portfolio of responsive client builds. Timesheet, expenses, job postings, and Maps-powered site logistics.",
    surfaces: [
      { code: "02a", name: "Workforce App", platform: "React · Mobile" },
      { code: "02b", name: "Admin Panel", platform: "KendoReact · Redux" },
      { code: "02c", name: "Magazine", platform: "Next.js · SSR" },
      { code: "02d", name: "Client Sites", platform: "Responsive · SEO" },
    ],
    tags: ["React.js", "Redux", "Material UI", "Firebase", "Maps API"],
  },
];

const CONTRIBUTIONS: Array<{
  n: string;
  titleLead: string;
  titleAccent: string;
  titleTrail?: string;
  body: string;
  tags: string[];
}> = [
  {
    n: "I.",
    titleLead: "",
    titleAccent: "Real-time",
    titleTrail: " systems.",
    body: "Phoenix Channels for chat, presence, typing, and signaling. WebRTC 1:1 via simple-peer and LiveKit group calls — wired across web, desktop, and mobile with reconnection and call-state as first-class concerns.",
    tags: ["Phoenix Channels", "WebRTC", "LiveKit", "simple-peer"],
  },
  {
    n: "II.",
    titleLead: "",
    titleAccent: "Cross-platform",
    titleTrail: " delivery.",
    body: "Four frontend surfaces from one mental model: React 19 on web, Electron desktop, React Native iOS + Android, and tenant + platform admin consoles — sharing design tokens, RBAC hooks, and Phoenix contracts.",
    tags: ["React 19", "React Native 0.83", "Electron", "Vite"],
  },
  {
    n: "III.",
    titleLead: "",
    titleAccent: "State",
    titleTrail: " architecture.",
    body: "Redux Saga for socket-driven flows, Redux Toolkit for admin CRUD, finite-state machines for the call lifecycle, and Realm-backed offline-first sync on mobile. Predictable, testable, observable.",
    tags: ["Redux Saga", "RTK", "FSM", "Realm DB"],
  },
  {
    n: "IV.",
    titleLead: "",
    titleAccent: "Type safety",
    titleTrail: " & DX.",
    body: "OpenAPI → typed client codegen, strict TypeScript with exactOptionalPropertyTypes, Vitest + RTL + MSW test scaffolding, and pre-commit gates running Prettier → tsc → tests → build on every change.",
    tags: ["TypeScript strict", "OpenAPI codegen", "Vitest", "MSW"],
  },
  {
    n: "V.",
    titleLead: "",
    titleAccent: "Performance",
    titleTrail: " & polish.",
    body: "Lighthouse 90+ on shipped client sites, lazy-loaded routes, Framer Motion choreography, OpenTelemetry instrumentation, and disciplined image and bundle hygiene. A slow frontend is a broken frontend.",
    tags: ["Lighthouse", "Code-splitting", "OpenTelemetry", "Framer Motion"],
  },
  {
    n: "VI.",
    titleLead: "",
    titleAccent: "Component",
    titleTrail: " systems.",
    body: "Material UI v5 → v7 theming, KendoReact data grids, TipTap rich-text, and Tailwind utility systems — held together by design-token parity across web and React Native so the brand survives every surface.",
    tags: ["MUI v7", "KendoReact", "TipTap", "Tailwind"],
  },
];

const CONTRIBUTION_METRICS: Array<{ value: string; label: string }> = [
  { value: "3", label: "years shipped" },
  { value: "6", label: "frontend surfaces" },
  { value: "8+", label: "real-time channels" },
];

const SIGNATURE_SHIPS: Array<{
  code: string;
  name: string;
  context: string;
}> = [
  {
    code: "01",
    name: "In-house WebRTC + LiveKit substrate",
    context: "WorkChats · 1:1 calls + group video on web and mobile",
  },
  {
    code: "02",
    name: "Native CallKit / ConnectionService bridges",
    context: "WorkChats · iOS + Android lock-screen call UI",
  },
  {
    code: "03",
    name: "Phoenix Channels orchestration",
    context: "WorkChats · 8+ real-time channels with reconnection",
  },
  {
    code: "04",
    name: "OpenAPI → typed client pipeline",
    context: "WorkChats · zero hand-written API types in the frontend",
  },
  {
    code: "05",
    name: "Realm offline-first sync",
    context: "WorkChats Mobile · message persistence across cold starts",
  },
  {
    code: "06",
    name: "Three Lighthouse 90+ brand sites",
    context: "Build ID · Dec-Tect · Roofing-Series · Midwest-Group",
  },
];

const TOOLCHAIN: Array<{ category: string; items: string[] }> = [
  {
    category: "Design",
    items: ["Figma", "Figma DSM", "Storybook", "Design Tokens"],
  },
  {
    category: "Planning",
    items: ["Jira", "Confluence", "Notion", "Linear"],
  },
  {
    category: "Delivery",
    items: [
      "Git",
      "GitHub",
      "GitHub Actions",
      "Bitbucket Pipelines",
      "Husky",
    ],
  },
  {
    category: "Ceremonies",
    items: [
      "Scrum",
      "Sprint Planning",
      "Daily Stand-up",
      "Retrospective",
      "PR Review",
    ],
  },
  {
    category: "Comms",
    items: ["Slack", "Microsoft Teams", "Loom", "Zoom"],
  },
  {
    category: "Quality",
    items: ["Sentry", "OpenTelemetry", "Lighthouse CI", "Vitest", "Jest"],
  },
  {
    category: "AI Workflow",
    items: [
      "Claude Code",
      "Cursor",
      "GitHub Copilot",
      "ChatGPT",
      "v0",
      "Claude API",
    ],
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="container-rule pb-16 pt-12 md:pb-24 md:pt-20">
          {/* Top meta bar */}
          <div className="grid grid-cols-2 gap-4 font-mono text-[11px] uppercase tracking-[0.18em] text-chrome/55 md:grid-cols-4">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span>Available — Q2 2026</span>
            </div>
            <div className="hidden md:block">Pune, India · IST&nbsp;UTC+5:30</div>
            <div className="hidden md:block">3+ yrs · Frontend</div>
            <div className="text-right">PORTFOLIO / 2026</div>
          </div>

          <div className="mt-12 grid gap-10 md:mt-16 md:grid-cols-12 md:gap-8">
            {/* LEFT — name + subtitle */}
            <div className="md:col-span-7">
              <h1 className="font-display text-5xl font-light tracking-tightish text-chrome md:text-7xl">
                Mahindra{" "}
                <span className="serif-italic text-accent">Danane</span>
              </h1>
              <Reveal delay={1} variant="blur-in">
                <p className="mt-8 text-balance font-display text-xl font-light leading-[1.4] text-chrome md:mt-10 md:text-2xl">
                  Frontend Engineer building{" "}
                  <span className="serif-italic text-accent">real-time</span>,
                  multi-role{" "}
                  <span className="serif-italic text-accent">React.js</span>{" "}
                  and{" "}
                  <span className="serif-italic text-accent">React Native</span>{" "}
                  applications — from messaging fabrics and WebRTC voice/video
                  to RBAC platforms used by entire organisations.
                </p>
              </Reveal>
            </div>

            {/* RIGHT — Now/Specialty card aligned with h1 top */}
            <Reveal delay={2} variant="slide-left" className="md:col-span-5 md:col-start-8">
              <div className="glass rounded-2xl p-6">
                <p className="label mb-3">Now</p>
                <p className="text-[15px] leading-[1.55] text-chrome">
                  Building{" "}
                  <strong className="font-medium text-chrome">WorkChats</strong>
                  &nbsp;at Octogle — a four-surface communication ecosystem
                  spanning web, desktop, mobile, and two admin consoles.
                </p>
                <div className="my-5 h-px bg-glass" />
                <p className="label mb-3">Specialty</p>
                <ul className="space-y-1.5 font-mono text-[12px] text-chrome">
                  <li>
                    <span className="text-accent">↳</span> Real-time messaging
                  </li>
                  <li>
                    <span className="text-accent">↳</span> WebRTC voice + video
                  </li>
                  <li>
                    <span className="text-accent">↳</span> Cross-platform parity
                  </li>
                  <li>
                    <span className="text-accent">↳</span> State management at
                    scale
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Decorative big timestamp */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-6 top-3 hidden font-mono text-[10px] uppercase tracking-[0.4em] text-chrome/35 md:block"
          style={{ writingMode: "vertical-rl" }}
        >
          MD ▸ 2026 ▸ FRONTEND ENGINEER ▸ PORTFOLIO
        </div>
      </section>

      {/* SELECTED WORK */}
      <section>
        <div className="container-rule py-20 md:py-28">
          <div className="mb-12 md:mb-16">
            <p className="label-accent">§ 01 — Selected Work</p>
            <h2 className="mt-3 font-display text-3xl font-light tracking-tightish text-chrome md:text-4xl">
              Two case studies.
            </h2>
            <p
              className="mt-4 text-sm md:whitespace-nowrap md:text-base"
              style={{ color: "rgb(var(--text-primary))" }}
            >
              Both projects below were taken from spec to production with full
              ownership of the frontend.
            </p>
          </div>

          <div className="space-y-6">
            {PROJECTS.map((p, i) => (
              <Reveal key={p.index} delay={i} variant="scale-in">
                <Link
                  href={p.href}
                  className="group glass relative block rounded-3xl p-8 transition-all duration-500 hover:-translate-y-1 hover:bg-glass-lift hover:shadow-glass-lift md:p-12"
                >
                  <div className="grid gap-8 md:grid-cols-12 md:gap-6">
                    <div className="md:col-span-2">
                      <p className="font-mono text-[11px] tracking-[0.18em] text-accent">
                        ↳ {p.index}
                      </p>
                      <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-chrome/55">
                        {p.period}
                      </p>
                    </div>

                    <div className="md:col-span-7">
                      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-chrome/55">
                        {p.client} · {p.role}
                      </p>
                      <h3 className="mt-2 font-display text-2xl font-medium leading-tight tracking-tightish text-chrome md:text-3xl">
                        {p.title}
                      </h3>
                      <p className="mt-2 font-display text-base font-light text-chrome md:text-lg">
                        <span className="serif-italic">{p.subtitle}</span>
                      </p>
                      <p className="mt-6 max-w-[58ch] text-[15px] leading-[1.6] text-chrome">
                        {p.description}
                      </p>

                      {p.surfaces.length > 0 ? (
                        <div className="mt-7 grid grid-cols-2 gap-2 md:grid-cols-4">
                          {p.surfaces.map((s) => (
                            <div
                              key={s.code}
                              className="glass-faint rounded-xl p-3 transition-colors group-hover:bg-glass-lift"
                            >
                              <p className="font-mono text-[10px] tracking-[0.16em] text-accent">
                                ↳ {s.code}
                              </p>
                              <p className="mt-1.5 font-display text-base font-light leading-tight text-chrome">
                                {s.name}
                              </p>
                              <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.1em] text-chrome/55">
                                {s.platform}
                              </p>
                            </div>
                          ))}
                        </div>
                      ) : null}

                      <ul className="mt-6 flex flex-wrap gap-2">
                        {p.tags.map((t) => (
                          <li
                            key={t}
                            className="chip"
                          >
                            {t}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-end justify-end md:col-span-3">
                      <span className="font-display text-5xl font-light leading-none tracking-tightish text-chrome/35 transition-all duration-500 group-hover:translate-x-2 group-hover:text-accent">
                        ↗
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTRIBUTIONS */}
      <section>
        <div className="container-rule py-20 md:py-28">
          <div className="mb-12 md:mb-16">
            <p className="label-accent">§ 02 — Contributions</p>
            <h2 className="mt-3 font-display text-3xl font-light tracking-tightish text-chrome md:text-4xl">
              Three years.{" "}
              <span className="serif-italic gradient-text">
                What I shipped.
              </span>
            </h2>
            <p className="mt-4 max-w-[64ch] text-sm md:text-base !text-black dark:!text-white">
              Six competencies a hiring manager looks for in a 3-year frontend
              engineer — each grounded in production work at Octogle and
              Stepron, not a syllabus.
            </p>
          </div>

          <Reveal variant="fade-up">
            <div className="glass mb-10 grid grid-cols-3 divide-x divide-glass rounded-2xl px-4 py-6 md:mb-14 md:px-8">
              {CONTRIBUTION_METRICS.map((m) => (
                <div key={m.label} className="px-3 text-center md:px-6">
                  <CountUp
                    value={m.value}
                    className="font-display text-3xl font-light tracking-tightish text-chrome md:text-5xl"
                  />
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-chrome/55 md:text-[11px]">
                    {m.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {CONTRIBUTIONS.map((c, i) => (
              <Reveal key={c.n} delay={i} variant="fade-up">
                <div className="glass h-full rounded-2xl p-6 transition-all duration-500 hover:bg-glass-lift hover:shadow-glass-lift">
                  <p className="font-mono text-[11px] tracking-[0.18em] text-accent">
                    {c.n}
                  </p>
                  <h3 className="mt-3 font-display text-lg font-medium tracking-tightish text-chrome md:text-xl">
                    {c.titleLead}
                    <span className="serif-italic text-accent">
                      {c.titleAccent}
                    </span>
                    {c.titleTrail}
                  </h3>
                  <p className="mt-2 text-sm leading-[1.6] text-chrome">
                    {c.body}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {c.tags.map((t) => (
                      <li
                        key={t}
                        className="chip"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Signature ships — concrete, named artifacts in production */}
          <Reveal variant="fade-up">
            <div className="glass mt-10 rounded-2xl p-6 md:mt-14 md:p-10">
              <div className="mb-6 flex flex-wrap items-baseline justify-between gap-3 md:mb-8">
                <p className="label-accent">Signature ships</p>
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-chrome/55">
                  Named · in production
                </p>
              </div>

              <ul className="grid gap-x-8 gap-y-5 md:grid-cols-2 lg:grid-cols-3">
                {SIGNATURE_SHIPS.map((s) => (
                  <li
                    key={s.code}
                    className="group flex items-start gap-3 border-t border-glass pt-4 transition-colors hover:border-accent/40"
                  >
                    <span className="mt-1 font-mono text-[11px] tracking-[0.18em] text-accent">
                      {s.code}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="font-display text-[15px] font-medium leading-tight !text-black dark:!text-white md:text-base">
                        {s.name}
                      </p>
                      <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-chrome/55">
                        {s.context}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Toolchain & process */}
          <Reveal variant="fade-up">
            <div className="glass mt-6 rounded-2xl p-6 md:mt-8 md:p-10">
              <div className="mb-6 flex flex-wrap items-baseline justify-between gap-3 md:mb-8">
                <p className="label-accent">Tools & process</p>
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-chrome/55">
                  How the work actually ships
                </p>
              </div>

              <div className="grid gap-x-8 gap-y-6 md:grid-cols-2 lg:grid-cols-3">
                {TOOLCHAIN.map((group) => (
                  <div
                    key={group.category}
                    className="border-t border-glass pt-4"
                  >
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-chrome/55">
                      {group.category}
                    </p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="chip"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* APPROACH */}
      <section>
        <div className="container-rule py-20 md:py-28">
          <div className="grid gap-10 md:grid-cols-12 md:gap-6">
            <div className="md:col-span-3">
              <p className="label-accent">§ 03 — Approach</p>
              <p className="label mt-3">How I work</p>
            </div>

            <div className="md:col-span-8 md:col-start-5">
              <h2 className="font-display text-2xl font-light tracking-tightish text-chrome md:text-3xl">
                I treat a frontend like a{" "}
                <span className="serif-italic gradient-text">product</span> —
                not a wrapper around an API.
              </h2>

              <div className="mt-10 grid gap-4 md:grid-cols-2">
                {[
                  {
                    n: "I.",
                    h: "Real-time first.",
                    p: "WebRTC, LiveKit, and Phoenix Channels are not features — they are the substrate. I architect connection state, presence, and reconnection as first-class concerns.",
                  },
                  {
                    n: "II.",
                    h: "One codebase, many platforms.",
                    p: "Web, mobile, desktop, and admin consoles ship from a shared design system, shared types, and parity-tested components. Divergence is a bug, not a tradeoff.",
                  },
                  {
                    n: "III.",
                    h: "State you can reason about.",
                    p: "Redux Saga for orchestrated side effects. Channel events flow through sagas to dispatch deterministic actions. No magic, no surprises.",
                  },
                  {
                    n: "IV.",
                    h: "Performance is a discipline.",
                    p: "Bundle budgets, render profiling, and Lighthouse runs on every PR. A slow frontend is a broken frontend.",
                  },
                ].map((b) => (
                  <div
                    key={b.n}
                    className="glass rounded-2xl p-6 transition-all duration-500 hover:bg-glass-lift hover:shadow-glass-lift"
                  >
                    <p className="font-mono text-[11px] tracking-[0.18em] text-accent">
                      {b.n}
                    </p>
                    <h3 className="mt-3 font-display text-lg font-medium tracking-tightish text-chrome md:text-xl">
                      {b.h}
                    </h3>
                    <p className="mt-2 text-sm leading-[1.6] text-chrome">
                      {b.p}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="relative overflow-hidden">
        <div className="container-rule py-24 md:py-32">
          <div className="glass-strong rounded-3xl p-10 md:p-20">
            <div className="grid gap-8 md:grid-cols-12 md:gap-6">
              <div className="md:col-span-12">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                  § 04 — Get in touch
                </p>
              </div>

              <div className="md:col-span-9">
                <h2 className="mt-4 font-display text-3xl font-light tracking-tightish text-chrome md:text-4xl">
                  Let&apos;s{" "}
                  <span className="serif-italic gradient-text">work</span>{" "}
                  together.
                </h2>
              </div>

              <div className="md:col-span-7">
                <p className="mt-2 max-w-[52ch] text-balance text-base text-chrome md:text-lg">
                  Currently open to mid-level Frontend Engineering roles —
                  product companies building real-time or cross-platform
                  systems.
                </p>
              </div>

              <div className="md:col-span-12">
                <a
                  href="mailto:mahindradanane10@gmail.com?subject=Frontend%20opportunity"
                  className="group mt-8 inline-flex items-end gap-3 border-b border-glass pb-1 font-display text-lg font-light tracking-tightish text-chrome transition-colors hover:border-accent md:text-2xl"
                >
                  mahindradanane10@gmail.com
                  <span className="text-accent transition-transform duration-500 group-hover:translate-x-2">
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
