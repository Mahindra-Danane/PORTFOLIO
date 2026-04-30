import type { ReactNode } from "react";

type SurfaceCardProps = {
  index: string;
  codename: string;
  audience: string;
  surfaces: string[];
  title: ReactNode;
  blurb: string;
  features: string[];
  tech: string[];
  scale?: string;
  url?: string;
};

export function SurfaceCard({
  index,
  codename,
  audience,
  surfaces,
  title,
  blurb,
  features,
  tech,
  scale,
  url,
}: SurfaceCardProps) {
  return (
    <div className="glass mt-8 rounded-3xl p-8 transition-all duration-500 hover:bg-glass-lift md:p-12">
      <div className="grid gap-8 md:grid-cols-12 md:gap-6">
        {/* Left rail */}
        <div className="md:col-span-3">
          <p className="font-mono text-[11px] tracking-[0.18em] text-accent">
            ↳ {index}
          </p>
          <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-chrome/55">
            {codename}
          </p>

          <div className="mt-6 space-y-5 border-l border-chrome/10 pl-4">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-chrome/40">
                For
              </p>
              <p className="mt-1 font-mono text-[12px] text-chrome">
                {audience}
              </p>
            </div>

            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-chrome/40">
                Surfaces
              </p>
              <ul className="mt-1 space-y-0.5 font-mono text-[12px] text-chrome">
                {surfaces.map((s) => (
                  <li key={s}>· {s}</li>
                ))}
              </ul>
            </div>

            {scale ? (
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-chrome/40">
                  Scale
                </p>
                <p className="mt-1 font-mono text-[12px] text-chrome">
                  {scale}
                </p>
              </div>
            ) : null}
          </div>
        </div>

        {/* Main */}
        <div className="md:col-span-8 md:col-start-5">
          {url ? (
            <a
              href={`https://${url}`}
              target="_blank"
              rel="noreferrer"
              className="link-hover mb-3 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-accent transition-colors hover:text-accent-hot"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              LIVE&nbsp;·&nbsp;{url}
              <span aria-hidden="true">↗</span>
            </a>
          ) : null}
          <h3 className="font-display text-xl font-medium leading-tight tracking-tightish text-chrome md:text-2xl">
            {title}
          </h3>
          <p
            className="mt-4 max-w-[60ch] text-sm leading-[1.65] md:text-base"
            style={{ color: "rgb(var(--text-primary))" }}
          >
            {blurb}
          </p>

          <div className="mt-10 grid gap-x-6 gap-y-3 md:grid-cols-2">
            {features.map((f) => (
              <div
                key={f}
                className="flex gap-3 border-t border-chrome/10 pt-3 text-[14px] leading-[1.55]"
                style={{ color: "rgb(var(--text-primary))" }}
              >
                <span className="font-mono text-[11px] tracking-[0.1em] text-accent">
                  ✦
                </span>
                <span>{f}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            {tech.map((t) => (
              <span
                key={t}
                className="chip"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
