import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { SurfaceCard } from "@/components/surface-card";
import { CountUp } from "@/components/count-up";

export const metadata: Metadata = {
  title: "Build ID — Construction Industry Platform",
  description:
    "Three React/Next.js products for the construction industry — workforce app, admin panel, magazine — plus a portfolio of responsive client builds. React.js, Redux, MUI, Firebase, Google Maps API, Next.js.",
};

const SURFACES = [
  {
    index: "02a",
    codename: "Build ID app",
    audience: "Contractors · foremen · site managers",
    surfaces: ["Browser", "iOS", "Android"],
    scale: "Web + Mobile · workforce-grade",
    title: (
      <>
        The flagship <span className="serif-italic accent-glow">workforce
        app</span> — timesheet, expenses, jobs, all on one screen.
      </>
    ),
    blurb:
      "Web + mobile app for site-level construction operations. Time tracking, expense capture, job postings, and Maps-powered carpool/site logistics — replacing Excel and WhatsApp threads with a single role-aware product.",
    features: [
      "Timesheet management with role-based approvals",
      "Expense tracking with receipt photo capture",
      "Job postings with applicant management",
      "Google Maps Directions API for real-time site tracking",
      "Carpool matching with geolocation",
      "RBAC admin (products, trades, companies, manufacturers)",
      "Push notifications via Firebase",
      "Offline-first mobile cache",
    ],
    tech: [
      "React.js",
      "Redux",
      "Material UI",
      "Firebase",
      "Google Maps API",
      "Axios",
      "REST APIs",
    ],
  },
  {
    index: "02b",
    codename: "Construction Database",
    audience: "Internal data admins",
    surfaces: ["Browser"],
    scale: "Modular · one folder per entity",
    title: (
      <>
        Admin panel —{" "}
        <span className="serif-italic accent-glow">KendoReact data
        grids</span> that stay fast at scale.
      </>
    ),
    blurb:
      "Internal admin panel for browsing and editing the master database of products, manufacturers, and trades. KendoReact-powered grids, Redux centralised state, modular per-entity architecture — onboards new developers in a day, three years on.",
    features: [
      "KendoReact data grid with filter, sort, pagination",
      "Centralised Redux state across all modules",
      "Modular per-entity architecture",
      "Tailwind for everything outside the grid",
      "Bulk edit + import workflows",
      "Real-time data updates across modules",
      "Audit trail per record",
      "Role-aware actions",
    ],
    tech: ["React.js", "KendoReact", "Redux", "Tailwind CSS", "Axios"],
  },
  {
    index: "02c",
    codename: "Construction Magazine",
    audience: "Content team · public readers",
    surfaces: ["Browser · SSR + ISR"],
    scale: "SEO-first content platform",
    title: (
      <>
        Magazine —{" "}
        <span className="serif-italic accent-glow">SSR-first</span>, fast,
        and editorially flexible.
      </>
    ),
    blurb:
      "Content-rich magazine with rich-text editing, media upload, and dynamic routing — alongside listing modules for companies, products, and services with filter, search, and pagination. Real-time Like primitive on Firebase for live reader interaction.",
    features: [
      "Rich-text article editor with media upload",
      "SSR for index pages, ISR for individual articles",
      "Dynamic routing for companies/products/services",
      "Filter, search, pagination across listings",
      "Real-time Like via Firebase",
      "SEO meta + Open Graph",
      "Image optimisation",
      "Content moderation flow",
    ],
    tech: ["Next.js", "React", "Tailwind CSS", "REST APIs", "Firebase"],
  },
];

const CLIENT_SITES: Array<{
  code: string;
  name: string;
  industry: string;
  url: string;
  blurb: string;
  highlights: string[];
  tech: string[];
}> = [
  {
    code: "02d-i",
    name: "Dec-Tect",
    industry: "Decking & cladding · brand site",
    url: "https://dec-tec.com/",
    blurb:
      "Static marketing site for a decking and cladding brand — product range, finish galleries, and dealer-locator routing. Built for fast browse on slow site-office connections.",
    highlights: [
      "Product range pages",
      "Finish galleries",
      "Dealer locator",
      "Lead-capture form",
    ],
    tech: ["React", "Tailwind CSS", "Static export", "JSON-LD"],
  },
  {
    code: "02d-ii",
    name: "Roofing-Series",
    industry: "Roofing systems · brand site",
    url: "https://www.roofing-series.com/",
    blurb:
      "Series-by-series catalogue site for a roofing-systems manufacturer — spec sheets, comparison tables, and downloadable PDFs surfaced through SEO-tuned dynamic routing.",
    highlights: [
      "Series spec pages",
      "Comparison tables",
      "PDF data sheets",
      "Image optimisation",
    ],
    tech: ["React", "Tailwind CSS", "Static export", "JSON-LD"],
  },
  {
    code: "02d-iii",
    name: "Midwest-Group",
    industry: "Construction services group · corporate",
    url: "https://www.midwest-group.com/",
    blurb:
      "Corporate site for a multi-division construction services group — division landings, project case studies, and contact routing per business unit.",
    highlights: [
      "Division landings",
      "Case-study layouts",
      "Per-unit contact routing",
      "CMS-driven copy",
    ],
    tech: ["React", "Tailwind CSS", "Static export", "JSON-LD"],
  },
];

const CLIENT_SITES_SHARED: string[] = [
  "Static site generation",
  "SEO meta + structured data (JSON-LD)",
  "Lighthouse 90+ across all three",
  "Responsive across breakpoints",
  "Image lazy-loading + optimisation",
  "Form integration with email",
  "CMS-driven content where needed",
];

const METRICS = [
  { label: "Products shipped", value: "4" },
  { label: "Years owned", value: "3" },
  { label: "User roles", value: "4" },
  { label: "Client builds", value: "3" },
];

const LESSONS = [
  {
    n: "i.",
    h: "Cross-platform parity is a discipline.",
    p: "Web, mobile, and admin surfaces share types, share selectors, share validation. Never share UI components pretending platform divergence doesn't exist.",
  },
  {
    n: "ii.",
    h: "Reach for boring tools when boring works.",
    p: "KendoReact for grids. Firebase for auth. Redux for state. Save your innovation budget for the hard problems — like in-house WebRTC at WorkChats.",
  },
  {
    n: "iii.",
    h: "Modular architecture pays for itself.",
    p: "One folder per entity. New entity? One folder, no cross-cutting changes. Three years on, the codebase still onboards developers in a day.",
  },
  {
    n: "iv.",
    h: "An admin surface and a customer surface should evolve together.",
    p: "Build ID's RBAC admin and end-user app share the same Redux slices. Adding a permission was always one update on each side, never a rewrite.",
  },
];

export default function BuildIdPage() {
  return (
    <article className="pb-32">
      {/* HERO */}
      <section>
        <div className="container-rule pb-20 pt-14 md:pb-28 md:pt-20">
          <div className="flex flex-wrap items-center gap-4 font-mono text-[11px] uppercase tracking-[0.18em] text-chrome/55">
            <span className="text-accent">02</span>
            <span className="h-px w-8 bg-glass" />
            <span>Case Study</span>
            <span className="h-px w-8 bg-glass" />
            <span>Multi-product</span>
            <span className="h-px w-8 bg-glass" />
            <span className="text-accent">Shipped</span>
          </div>

          <div className="mt-10 grid gap-10 md:mt-14 md:grid-cols-12 md:gap-8">
            <Reveal className="md:col-span-7">
              <h1 className="font-display text-3xl font-light tracking-tightish text-chrome md:text-5xl">
                Build ID — bringing{" "}
                <span className="serif-italic gradient-text">
                  construction crews
                </span>{" "}
                off spreadsheets and onto a real product.
              </h1>
              <p className="mt-6 max-w-[60ch] text-balance text-base text-chrome md:mt-8 md:text-lg">
                A web + mobile platform that took site-level construction
                operations — timesheets, expenses, job postings, carpool
                logistics — out of WhatsApp threads and Excel files and into
                a single, role-aware product. Three React/Next.js products
                under one roof, plus a portfolio of responsive client builds.
              </p>
            </Reveal>

            <Reveal delay={1} className="md:col-span-5 md:col-start-8">
              <dl className="glass grid gap-y-5 rounded-2xl p-6 font-mono text-[12px]">
                <div>
                  <dt className="label">Client</dt>
                  <dd className="mt-1 text-chrome">Stepron Technologies</dd>
                </div>
                <div>
                  <dt className="label">Role</dt>
                  <dd className="mt-1 text-chrome">Software Developer</dd>
                </div>
                <div>
                  <dt className="label">Period</dt>
                  <dd className="mt-1 text-chrome tabular">
                    Sept 2022 — July 2025
                  </dd>
                </div>
                <div>
                  <dt className="label">Stage</dt>
                  <dd className="mt-1 text-chrome">Shipped · production</dd>
                </div>
              </dl>
            </Reveal>
          </div>
        </div>
      </section>

      {/* METRICS */}
      <section>
        <div className="container-rule">
          <div className="glass grid grid-cols-2 gap-x-6 gap-y-10 rounded-3xl p-10 md:grid-cols-4 md:p-14">
            {METRICS.map((m, i) => (
              <Reveal key={m.label} delay={i} variant="scale-in">
                <div>
                  <p className="label mb-3">{m.label}</p>
                  <p className="font-display text-3xl font-light leading-none tracking-tightish text-chrome md:text-5xl">
                    <CountUp value={m.value} />
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section>
        <div className="container-rule grid gap-8 py-20 md:grid-cols-12 md:gap-6 md:py-28">
          <Reveal className="md:col-span-3">
            <p className="font-mono text-[11px] tracking-[0.18em] text-accent">
              I.
            </p>
            <p className="label mt-2">The problem</p>
          </Reveal>
          <Reveal delay={1} className="md:col-span-8 md:col-start-5">
            <h2 className="font-display text-2xl font-light tracking-tightish text-chrome md:text-3xl">
              Construction runs on{" "}
              <span className="serif-italic gradient-text">
                paper, WhatsApp, and Excel
              </span>{" "}
              — and it shouldn&apos;t.
            </h2>
            <div className="mt-8 max-w-[68ch] space-y-5 text-[15px] leading-[1.65] text-chrome md:text-base">
              <p>
                The construction industry is famously under-digitised. Foremen
                track hours on paper. Site managers reconcile expenses by
                photographing receipts. Equipment moves between sites without
                a single source of truth.
              </p>
              <p>
                Build ID was Stepron&apos;s bet that a small, well-designed
                product could win on workflow density alone — make the daily
                ritual of clocking in, logging an expense, or finding a
                carpool one tap each, and a contractor will pay for that.
                Across nearly three years I led the frontend on{" "}
                <strong className="font-medium">four</strong> related products
                serving this thesis.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SURFACES */}
      <section>
        <div className="container-rule pt-4 md:pt-12">
          <Reveal>
            <p className="font-mono text-[11px] tracking-[0.18em] text-accent">
              II.
            </p>
            <p className="label mt-2">The four products</p>
            <h2 className="mt-6 font-display text-2xl font-light tracking-tightish text-chrome md:text-3xl">
              Four products, different audiences —
              <br />
              <span className="serif-italic gradient-text">
                one frontend lead
              </span>
              , one playbook.
            </h2>
          </Reveal>
        </div>

        <div className="container-rule">
          {SURFACES.map((s, i) => (
            <Reveal key={s.index} delay={i}>
              <SurfaceCard {...s} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* CLIENT SITES — three static brand sites, highlighted */}
      <section>
        <div className="container-rule pt-16 md:pt-24">
          <Reveal>
            <p className="font-mono text-[11px] tracking-[0.18em] text-accent">
              ↳ 02d
            </p>
            <p className="label mt-2">Client builds — three static sites</p>
            <h2 className="mt-6 font-display text-2xl font-light tracking-tightish text-chrome md:text-3xl">
              Three client sites —{" "}
              <span className="serif-italic gradient-text">
                Lighthouse 90+
              </span>
              , all of them.
            </h2>
            <p className="mt-5 max-w-[64ch] text-[15px] leading-[1.6] text-chrome">
              Not headline projects, but the work that pays the bills and
              teaches you to ship five times in a quarter without breaking
              anything. SEO-friendly, performance-tuned, statically deployed.
            </p>
          </Reveal>
        </div>

        <div className="container-rule mt-10 md:mt-14">
          <div className="grid gap-4 md:grid-cols-3">
            {CLIENT_SITES.map((site, i) => (
              <Reveal key={site.code} delay={i} variant="fade-up">
                <a
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group glass relative flex h-full flex-col overflow-hidden rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:bg-glass-lift hover:shadow-glass-lift md:p-7"
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent"
                  />

                  <div className="flex items-start justify-between gap-3">
                    <p className="font-mono text-[11px] tracking-[0.18em] text-accent">
                      ↳ {site.code}
                    </p>
                    <span className="chip !px-2.5 !text-[10px] !uppercase !tracking-[0.14em]">
                      Static
                    </span>
                  </div>

                  <div className="mt-5 flex items-start justify-between gap-3">
                    <h3 className="font-display text-xl font-medium tracking-tightish text-chrome md:text-2xl">
                      {site.name}
                    </h3>
                    <span
                      aria-hidden
                      className="font-display text-2xl leading-none text-chrome/35 transition-all duration-500 group-hover:translate-x-1 group-hover:text-accent"
                    >
                      ↗
                    </span>
                  </div>
                  <p className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-chrome/55">
                    {site.industry}
                  </p>

                  <p className="mt-4 text-sm leading-[1.6] text-chrome">
                    {site.blurb}
                  </p>

                  <ul className="mt-5 space-y-2">
                    {site.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2 text-[13px] leading-[1.5] text-chrome"
                      >
                        <span className="mt-[7px] inline-block h-1 w-1 rounded-full bg-accent" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {site.tech.map((t) => (
                      <li
                        key={t}
                        className="chip"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex items-center justify-between gap-3 border-t border-glass pt-5">
                    <span className="truncate font-mono text-[11px] text-chrome/70 group-hover:text-accent">
                      {site.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                    </span>
                    <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                      Lighthouse 90+
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal delay={3} variant="fade-up">
            <div className="glass mt-6 rounded-2xl p-6 md:p-8">
              <div className="mb-5 flex flex-wrap items-baseline justify-between gap-3">
                <p className="label-accent">What they all share</p>
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-chrome/55">
                  Same playbook · three brands
                </p>
              </div>
              <ul className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
                {CLIENT_SITES_SHARED.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-sm leading-[1.55] text-chrome"
                  >
                    <span className="mt-[7px] inline-block h-1 w-1 rounded-full bg-accent" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* LESSONS */}
      <section>
        <div className="container-rule grid gap-8 py-20 md:grid-cols-12 md:gap-6 md:py-28">
          <Reveal className="md:col-span-3">
            <p className="font-mono text-[11px] tracking-[0.18em] text-accent">
              III.
            </p>
            <p className="label mt-2">Lessons</p>
          </Reveal>
          <Reveal delay={1} className="md:col-span-8 md:col-start-5">
            <h2 className="font-display text-2xl font-light tracking-tightish text-chrome md:text-3xl">
              The lessons that{" "}
              <span className="serif-italic gradient-text">
                followed me to WorkChats
              </span>
              .
            </h2>
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {LESSONS.map((b) => (
                <div
                  key={b.n}
                  className="glass rounded-2xl p-6 transition-all duration-500 hover:bg-glass-lift"
                >
                  <p className="font-mono text-[11px] tracking-[0.18em] text-accent">
                    {b.n}
                  </p>
                  <h3 className="mt-2 font-display text-lg font-medium tracking-tightish text-chrome md:text-xl">
                    {b.h}
                  </h3>
                  <p className="mt-2 text-sm leading-[1.6] text-chrome">
                    {b.p}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* NEXT */}
      <section className="container-rule mt-20">
        <Link
          href="/work/workchat"
          className="group glass relative block rounded-3xl p-10 transition-all duration-500 hover:bg-glass-lift hover:shadow-glass-lift md:p-16"
        >
          <div className="flex items-center justify-between gap-6">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                Previous case study →
              </p>
              <h3 className="mt-3 font-display text-2xl font-medium tracking-tightish text-chrome md:text-3xl">
                WorkChats
              </h3>
              <p className="mt-2 font-mono text-[12px] tracking-[0.14em] text-chrome/55">
                01 · Real-time corporate communication · 2025 — Present
              </p>
            </div>
            <div className="hidden font-display text-5xl font-light leading-none text-chrome/35 transition-all duration-500 group-hover:translate-x-2 group-hover:text-accent md:block">
              ↗
            </div>
          </div>
        </Link>
      </section>
    </article>
  );
}
