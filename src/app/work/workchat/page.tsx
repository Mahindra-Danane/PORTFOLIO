import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { SurfaceCard } from "@/components/surface-card";
import { CountUp } from "@/components/count-up";

export const metadata: Metadata = {
  title: "WorkChats — Real-Time Communication Ecosystem",
  description:
    "Engineering a four-surface real-time corporate communication ecosystem: web + Electron desktop, iOS + Android mobile, tenant admin, and platform admin. Phoenix Channels, LiveKit, WebRTC, CallKit.",
};

const SURFACES = [
  {
    index: "01a",
    codename: "WorkchatsWeb",
    audience: "End users · web + Electron desktop",
    surfaces: ["Browser", "Electron · macOS", "Electron · Windows"],
    scale: "~32K LOC TS/TSX · 7+ feature stacks",
    url: "app.workchats.com",
    title: (
      <>
        The flagship <span className="serif-italic accent-glow">end-user
        client</span> — chat, calls, calendar, feeds, in one product.
      </>
    ),
    blurb:
      "The main user-facing surface. Real-time chat (1:1 and group), in-house WebRTC calls plus LiveKit-powered group video, an activity feed, calendar with meeting scheduler, contacts and presence, and a TipTap-powered rich editor — all unified under a single design system and shared TypeScript contracts. Auto-updated via Electron for desktop.",
    features: [
      "Chat (DM + group) with Phoenix Channel real-time sync",
      "1:1 WebRTC calls via simple-peer; group calls on LiveKit",
      "Activity feed with posts, mentions, reactions",
      "Calendar + meeting scheduler with @mui/x-date-pickers",
      "Contacts, departments, favorites, live presence",
      "TipTap rich text editor with markdown + mentions",
      "File uploads (Excel, PDF, images, video) with previews",
      "Push + in-app notifications (Firebase)",
      "OpenTelemetry observability across the client",
    ],
    tech: [
      "React 19",
      "Vite 6",
      "TypeScript (strict)",
      "Redux Saga",
      "Redux Toolkit",
      "phoenix",
      "simple-peer",
      "LiveKit",
      "Material UI v7",
      "TipTap",
      "Firebase",
      "OpenTelemetry",
      "Electron",
      "React Router v7",
    ],
  },
  {
    index: "01b",
    codename: "WorkchatsMobile",
    audience: "End users · iOS + Android",
    surfaces: ["iOS (CallKit)", "Android (ConnectionService)"],
    scale: "RN 0.83 · multi-stack navigation",
    title: (
      <>
        The mobile twin —{" "}
        <span className="serif-italic accent-glow">native bridges</span> where
        it matters, shared logic everywhere else.
      </>
    ),
    blurb:
      "React Native 0.83 client for iOS and Android with deep platform integration. Chat and calls share the same Phoenix transport as the web. Calls escalate to native UI via react-native-callkeep — CallKit on iOS, ConnectionService on Android — so an incoming call rings on the lock screen even when the JS bundle is asleep. VoIP push, biometric auth, and audio/video recording round out the parity story.",
    features: [
      "Phoenix Channel chat parity with web client",
      "Native call UI: CallKit (iOS) + ConnectionService (Android)",
      "VoIP push notifications via react-native-voip-push-notification",
      "react-native-webrtc + LiveKit React Native for group calls",
      "Biometric auth (Face ID / Touch ID / fingerprint)",
      "Camera + vision capture (react-native-vision-camera)",
      "Audio recording with waveform visualization",
      "Realm DB for offline-first message persistence",
      "Reanimated v4 for declarative animations",
    ],
    tech: [
      "React Native 0.83",
      "TypeScript",
      "Redux Saga",
      "phoenix",
      "react-native-webrtc",
      "@livekit/react-native",
      "react-native-callkeep",
      "react-native-voip-push-notification",
      "Realm DB",
      "@notifee/react-native",
      "react-native-keychain",
      "react-native-biometrics",
      "Reanimated 4",
      "React Navigation v7",
    ],
  },
  {
    index: "01c",
    codename: "workchats_admin",
    audience: "Tenant admins · per-company control",
    surfaces: ["Browser (per-tenant)"],
    scale: "~5K LOC · OpenAPI-typed · test-covered",
    url: "admin.workchats.com",
    title: (
      <>
        Tenant admin —{" "}
        <span className="serif-italic accent-glow">company-level
        control</span> carved out of the main client.
      </>
    ),
    blurb:
      "Per-company admin surface for the people running a single WorkChats tenant. Departments, employees, RBAC permissions, SSO configuration, branding, and document management. Carved out of the main web codebase so it can ship at its own cadence with stricter test coverage. OpenAPI-generated types keep it locked to the same backend contract as the end-user client.",
    features: [
      "Department + employee management with role assignment",
      "RBAC permission matrix with edit-in-place",
      "SSO setup (SAML / OAuth) per company",
      "Company branding + logo upload",
      "Filing cabinet for shared documents",
      "Device linking + security controls",
      "Employee analytics (pie / bar / area charts)",
      "Vitest test suite with 20+ test files",
    ],
    tech: [
      "React 19",
      "Vite",
      "TypeScript (strict)",
      "Redux Toolkit",
      "Material UI v7",
      "@mui/x-charts",
      "Formik + Yup",
      "Axios",
      "OpenAPI codegen",
      "Vitest + RTL",
    ],
  },
  {
    index: "01d",
    codename: "WorkchatsPlatformAdmin",
    audience: "Octogle staff · platform operators",
    surfaces: ["Browser · ops.workchats.com"],
    scale: "4–5 admin screens · multi-tenant",
    url: "ops.workchats.com",
    title: (
      <>
        Platform admin —{" "}
        <span className="serif-italic accent-glow">the operator
        console</span> behind every tenant.
      </>
    ),
    blurb:
      "The control plane Octogle staff use to run the platform itself. Onboard new companies through a multi-step wizard, manage subscriptions and invoices, work the support-ticket queue, audit users, and toggle feature flags. No real-time machinery here — REST is the right call for low-traffic admin work.",
    features: [
      "Multi-step company onboarding wizard (SSO, plan, branding)",
      "Subscription + billing management with invoice generation",
      "Support ticket / complaint system with status tracking",
      "Feature flag toggles (A/B + targeted rollouts)",
      "User account audit + permission management",
      "Analytics dashboards via @mui/x-charts",
    ],
    tech: [
      "React 18",
      "Vite",
      "Redux (UI-local)",
      "Material UI v7",
      "@mui/x-charts",
      "@mui/x-date-pickers",
      "Axios",
      "Yup",
      "React Router v7",
    ],
  },
];

const METRICS = [
  { label: "Frontend surfaces", value: "4" },
  { label: "Native platforms", value: "5" },
  { label: "Real-time channels", value: "8+" },
  { label: "Shared backend", value: "1" },
];

const SHARED_SPINE = [
  {
    n: "i.",
    h: "OpenAPI as the source of truth.",
    p: "Backend publishes an OpenAPI spec; every client generates TypeScript types into api.generated.ts. A contract change breaks the build everywhere at once — exactly what you want.",
  },
  {
    n: "ii.",
    h: "Phoenix Channels as the real-time fabric.",
    p: "Chat, presence, calls, and notifications all ride Phoenix topics. One reconnection strategy. One auth handshake. One mental model — across web and mobile.",
  },
  {
    n: "iii.",
    h: "Connection state as a first-class slice.",
    p: "Never derived, never implicit. Sagas orchestrate channel join/leave, presence sync, and exponential reconnection. Boring on purpose. Boring is debuggable.",
  },
  {
    n: "iv.",
    h: "Shared design tokens, parity-tested UI.",
    p: "Color, typography, and spacing tokens are duplicated by hand across MUI v7 (web/admin) and react-native-paper (mobile). Divergence is a bug, not a tradeoff.",
  },
  {
    n: "v.",
    h: "RBAC as a cross-cutting concern.",
    p: "useCan(action, resource) on web + admin; equivalent hook on mobile. Backed by the same RBAC slice that powers route guards and component visibility.",
  },
  {
    n: "vi.",
    h: "Call-state as an explicit state machine.",
    p: "Ringing, accepted, missed, ended-by-self, ended-by-peer, network-dropped, hardware-permission-denied. Modelled as a finite-state machine — kills classes of ghost-call bugs early.",
  },
];

export default function WorkChatsPage() {
  return (
    <article className="pb-32">
      {/* HERO — left: title + blurb / right: metadata + stack */}
      <section>
        <div className="container-rule pb-20 pt-14 md:pb-28 md:pt-20">
          <div className="flex flex-wrap items-center gap-4 font-mono text-[11px] uppercase tracking-[0.18em] text-chrome/55">
            <span className="text-accent">01</span>
            <span className="h-px w-8 bg-glass" />
            <span>Case Study</span>
            <span className="h-px w-8 bg-glass" />
            <span>Ecosystem</span>
            <span className="h-px w-8 bg-glass" />
            <span className="text-accent">In Production</span>
          </div>

          <div className="mt-10 grid gap-10 md:mt-14 md:grid-cols-12 md:gap-8">
            {/* LEFT — title + blurb */}
            <Reveal className="md:col-span-7">
              <h1 className="font-display text-3xl font-light tracking-tightish text-chrome md:text-5xl">
                WorkChats — one company,{" "}
                <span className="serif-italic gradient-text">
                  four frontend surfaces
                </span>
                , one shared spine.
              </h1>
              <p className="mt-6 max-w-[60ch] text-balance text-base text-chrome md:mt-8 md:text-lg">
                An enterprise corporate communication ecosystem at Octogle —
                spanning a React.js + Electron desktop client, a React Native
                mobile app, a per-company tenant admin, and a platform-level
                operator console. All against the same Phoenix backend, the
                same OpenAPI types, and the same design tokens.
              </p>
            </Reveal>

            {/* RIGHT — project metadata */}
            <Reveal delay={1} className="md:col-span-5 md:col-start-8">
              <dl className="glass grid gap-y-5 rounded-2xl p-6 font-mono text-[12px]">
                <div>
                  <dt className="label">Client</dt>
                  <dd className="mt-1 text-chrome">Octogle Technology</dd>
                </div>
                <div>
                  <dt className="label">Role</dt>
                  <dd className="mt-1 text-chrome">Frontend Engineer</dd>
                </div>
                <div>
                  <dt className="label">Period</dt>
                  <dd className="mt-1 text-chrome tabular">
                    Oct 2025 — Present
                  </dd>
                </div>
                <div>
                  <dt className="label">Stage</dt>
                  <dd className="mt-1 text-chrome">Live · multi-tenant</dd>
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
            <p className="label mt-2">The brief</p>
          </Reveal>
          <Reveal delay={1} className="md:col-span-8 md:col-start-5">
            <h2 className="font-display text-2xl font-light tracking-tightish text-chrome md:text-3xl">
              Replace a stack of SaaS subscriptions with a{" "}
              <span className="serif-italic gradient-text">
                single owned product
              </span>{" "}
              — everywhere employees work.
            </h2>
            <div className="mt-8 max-w-[68ch] space-y-5 text-[17px] leading-[1.65] text-chrome">
              <p>
                Companies adopting WorkChats were, until then, gluing together
                Slack, Zoom, Google Calendar, a shared drive, and a brittle
                RBAC layer. The brief was to collapse all of that into a
                product the customer <em>owned end-to-end</em> — code, data
                plane, and UX.
              </p>
              <p>
                That mandate is not a single app. It&apos;s an ecosystem.{" "}
                <strong className="font-medium text-chrome">Four</strong>{" "}
                distinct frontend surfaces, each with a different user, a
                different feature set, and a different cadence — all sitting
                against the same Phoenix / Elixir backend and a single OpenAPI
                contract. Below: each surface, what it does, what it&apos;s
                built with, and what makes it interesting.
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
            <p className="label mt-2">The four surfaces</p>
            <h2 className="mt-6 font-display text-2xl font-light tracking-tightish text-chrome md:text-3xl">
              Four products, different users —
              <br />
              <span className="serif-italic gradient-text">
                one design system
              </span>
              , one contract.
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

      {/* SHARED SPINE */}
      <section>
        <div className="container-rule grid gap-8 py-20 md:grid-cols-12 md:gap-6 md:py-28">
          <Reveal className="md:col-span-3">
            <p className="font-mono text-[11px] tracking-[0.18em] text-accent">
              III.
            </p>
            <p className="label mt-2">Shared spine</p>
          </Reveal>
          <Reveal delay={1} className="md:col-span-8 md:col-start-5">
            <h2 className="font-display text-2xl font-light tracking-tightish text-chrome md:text-3xl">
              The architecture decisions{" "}
              <span className="serif-italic gradient-text">
                all four surfaces
              </span>{" "}
              share.
            </h2>
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {SHARED_SPINE.map((b) => (
                <div
                  key={b.n}
                  className="glass rounded-2xl p-6 transition-all duration-500 hover:bg-glass-lift"
                >
                  <p className="font-mono text-[11px] tracking-[0.18em] text-accent">
                    {b.n}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-light tracking-tightish text-chrome">
                    {b.h}
                  </h3>
                  <p className="mt-3 text-[15px] leading-[1.6] text-chrome">
                    {b.p}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* TRADEOFFS */}
      <section>
        <div className="container-rule grid gap-8 py-20 md:grid-cols-12 md:gap-6 md:py-28">
          <Reveal className="md:col-span-3">
            <p className="font-mono text-[11px] tracking-[0.18em] text-accent">
              IV.
            </p>
            <p className="label mt-2">Tradeoffs</p>
          </Reveal>
          <Reveal delay={1} className="md:col-span-8 md:col-start-5">
            <h2 className="font-display text-2xl font-light tracking-tightish text-chrome md:text-3xl">
              What I&apos;d do{" "}
              <span className="serif-italic gradient-text">differently</span>{" "}
              next time.
            </h2>
            <div className="mt-8 max-w-[68ch] space-y-5 text-[17px] leading-[1.65] text-chrome">
              <p>
                Four surfaces share a backend but ship from four repos. That
                buys cadence flexibility — the tenant admin can ship faster
                than the end-user client without coordinating releases — and
                it costs duplication. Design-token drift is a real problem; a
                shared <code>@workchats/tokens</code> package is the obvious
                next step.
              </p>
              <p>
                Per ADR-0003 the chat layer is mid-migration from XMPP to
                Phoenix Channels; I&apos;m driving the frontend half of that
                on web and mobile in lockstep. The lesson — pick the protocol
                your backend team can debug at 2am, not the one with the
                prettiest spec.
              </p>
              <p>
                Group calling started on simple-peer mesh and now uses LiveKit
                for groups larger than three. The right answer was LiveKit
                from day one for groups; mesh is fine for 1:1 and cheaper to
                host. We learned that the expensive way.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* NEXT */}
      <section className="container-rule mt-20">
        <Link
          href="/work/build-id"
          className="group glass relative block rounded-3xl p-10 transition-all duration-500 hover:bg-glass-lift hover:shadow-glass-lift md:p-16"
        >
          <div className="flex items-center justify-between gap-6">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                Next case study →
              </p>
              <h3 className="mt-4 font-display text-2xl font-medium tracking-tightish text-chrome md:text-3xl">
                Build ID
              </h3>
              <p className="mt-2 font-mono text-[12px] tracking-[0.14em] text-chrome/55">
                02 · Construction industry platform · 2022 — 2025
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
