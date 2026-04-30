import Link from "next/link";
import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";
import { CountUp } from "@/components/count-up";

type Section = {
  number: string;
  label: string;
  heading: ReactNode;
  body: ReactNode;
};

type CaseStudyData = {
  index: string;
  client: string;
  role: string;
  period: string;
  status: "Live" | "In Production" | "Shipped";
  title: ReactNode;
  blurb: string;
  metrics: { label: string; value: string }[];
  stack: string[];
  sections: Section[];
  next: { href: string; label: string; title: string };
};

export function CaseStudyShell({ data }: { data: CaseStudyData }) {
  return (
    <article className="pb-32">
      {/* HERO — left: title + blurb / right: metadata + stack */}
      <section>
        <div className="container-rule pb-20 pt-14 md:pb-28 md:pt-20">
          {/* meta bar full width */}
          <div className="flex flex-wrap items-center gap-4 font-mono text-[11px] uppercase tracking-[0.18em] text-chrome/55">
            <span className="text-accent">{data.index}</span>
            <span className="h-px w-8 bg-glass" />
            <span>Case Study</span>
            <span className="h-px w-8 bg-glass" />
            <span className="text-accent">{data.status}</span>
          </div>

          {/* two-column body */}
          <div className="mt-10 grid gap-10 md:mt-14 md:grid-cols-12 md:gap-8">
            {/* LEFT — title + blurb */}
            <Reveal className="md:col-span-7">
              <h1 className="font-display text-3xl font-light tracking-tightish text-chrome md:text-5xl">
                {data.title}
              </h1>
              <p className="mt-6 max-w-[58ch] text-balance text-base text-chrome md:mt-8 md:text-lg">
                {data.blurb}
              </p>
            </Reveal>

            {/* RIGHT — project metadata */}
            <Reveal delay={1} className="md:col-span-5 md:col-start-8">
              <dl className="glass grid gap-y-5 rounded-2xl p-6 font-mono text-[12px]">
                <div>
                  <dt className="label">Client</dt>
                  <dd className="mt-1 text-chrome">{data.client}</dd>
                </div>
                <div>
                  <dt className="label">Role</dt>
                  <dd className="mt-1 text-chrome">{data.role}</dd>
                </div>
                <div>
                  <dt className="label">Period</dt>
                  <dd className="mt-1 text-chrome tabular">{data.period}</dd>
                </div>
              </dl>
            </Reveal>
          </div>
        </div>
      </section>

      {/* METRICS STRIP */}
      <section>
        <div className="container-rule">
          <div className="glass grid grid-cols-2 gap-x-6 gap-y-10 rounded-3xl p-10 md:grid-cols-4 md:p-14">
            {data.metrics.map((m, i) => (
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

      {/* SECTIONS */}
      <div className="container-rule">
        {data.sections.map((s) => (
          <section
            key={s.number}
            className="grid gap-8 py-20 md:grid-cols-12 md:gap-6 md:py-28"
          >
            <Reveal className="md:col-span-3">
              <div className="sticky top-24">
                <p className="font-mono text-[11px] tracking-[0.18em] text-accent">
                  {s.number}
                </p>
                <p className="label mt-2">{s.label}</p>
              </div>
            </Reveal>

            <Reveal delay={1} className="md:col-span-8 md:col-start-5">
              <h2 className="font-display text-2xl font-light tracking-tightish text-chrome md:text-3xl">
                {s.heading}
              </h2>
              <div className="mt-6 max-w-[68ch] space-y-4 text-[15px] leading-[1.65] text-chrome md:text-base">
                {s.body}
              </div>
            </Reveal>
          </section>
        ))}
      </div>

      {/* NEXT */}
      <section className="container-rule mt-20">
        <Link
          href={data.next.href}
          className="group glass relative block rounded-3xl p-10 transition-all duration-500 hover:bg-glass-lift hover:shadow-glass-lift md:p-16"
        >
          <div className="flex items-center justify-between gap-6">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                Next case study →
              </p>
              <h3 className="mt-3 font-display text-2xl font-medium tracking-tightish text-chrome md:text-3xl">
                {data.next.title}
              </h3>
              <p className="mt-2 font-mono text-[12px] tracking-[0.14em] text-chrome/55">
                {data.next.label}
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
