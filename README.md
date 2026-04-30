# Mahindra Danane — Portfolio

Personal portfolio site. Next.js 15 (App Router) · React 19 · TypeScript strict · Tailwind v3 · Motion (Framer).

## Quick start

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Verify

```bash
npm run typecheck    # strict TS check, must pass
npm run build        # production build, must pass
npm run lint         # next lint
```

## Deploy to Vercel (3 minutes)

### Option A — Vercel CLI (fastest)

```bash
npm i -g vercel
vercel login
vercel              # follow prompts; pick scope, accept defaults
vercel --prod       # publish the production deploy
```

### Option B — GitHub → Vercel UI

1. Push to a new GitHub repo (`gh repo create mahindra-portfolio --public --source=. --push`).
2. Go to https://vercel.com/new → Import the repo → Deploy. Defaults are correct.

### Custom domain (optional, recommended)

In the Vercel project → **Settings → Domains** → add `mahindradanane.dev` (or whatever you buy). Vercel provides DNS records; takes ~5 minutes to propagate.

## Editing the resume content

| What to change             | File                                          |
| -------------------------- | --------------------------------------------- |
| Name, hero copy, projects  | `src/app/page.tsx`                            |
| WorkChat case study        | `src/app/work/workchat/page.tsx`              |
| Build ID case study        | `src/app/work/build-id/page.tsx`              |
| Nav links / brand          | `src/components/nav.tsx`                      |
| Footer (email, social)     | `src/components/footer.tsx`                   |
| Tech-stack ticker          | `src/components/marquee.tsx`                  |
| Color palette + typography | `tailwind.config.ts` and `src/app/layout.tsx` |
| SEO metadata               | `src/app/layout.tsx`                          |

## Before going public — checklist

- [ ] Replace placeholder GitHub link in `src/components/footer.tsx`
- [ ] Update LinkedIn URL slug if different from `mahindra-danane`
- [ ] Replace metric placeholders in case studies with real numbers (Sentry, Lighthouse, analytics)
- [ ] Add `metadataBase` real domain in `src/app/layout.tsx`
- [ ] Add a `public/og.png` (1200×630) for link previews and reference it in `metadata.openGraph.images`
- [ ] Run `npm run build` and confirm Lighthouse 95+ on production deploy

## Stack reference

- **Next.js 15** — App Router, Server Components, RSC by default
- **Tailwind v3** — utility CSS with custom design tokens (cream / ink / accent)
- **Motion** — `motion/react` for the reveal-on-scroll primitive
- **next/font/google** — Instrument Serif (display) + Geist (body) + JetBrains Mono (code), all self-hosted at build time

## Aesthetic direction

Editorial-technical hybrid. Cream background, deep ink text, single vermilion accent. Display serif for impact, clean sans for body, mono for technical metadata. Asymmetric 12-col grid. Subtle film-grain noise overlay. Reveal animations only — no scattered micro-interactions.

The point is to read like a magazine designed by a frontend engineer, not a Webflow template.
# PORTFOLIO
