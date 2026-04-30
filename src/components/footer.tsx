import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative z-20 border-t border-glass bg-base/40">
      <div className="container-rule grid gap-10 py-16 md:grid-cols-12 md:gap-6 md:py-20">
        <div className="md:col-span-5">
          <p className="label mb-3">Currently</p>
          <p className="font-display text-lg font-light leading-[1.5] text-chrome md:text-xl">
            Open to <span className="serif-italic text-accent">mid-level</span>{" "}
            Frontend roles — product companies building real-time or
            cross-platform systems.
          </p>
        </div>

        <div className="md:col-span-3 md:col-start-7">
          <p className="label mb-3">Reach out</p>
          <ul className="space-y-2 font-mono text-[13px] text-chrome">
            <li>
              <a
                href="mailto:mahindradanane10@gmail.com"
                className="link-hover transition-colors hover:text-accent"
              >
                mahindradanane10@gmail.com
              </a>
            </li>
            <li className="tabular text-chrome/55">
              +91&nbsp;87669&nbsp;29798
            </li>
            <li className="text-chrome/55">Pune, India</li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="label mb-3">Elsewhere</p>
          <ul className="space-y-2 font-mono text-[13px] text-chrome">
            <li>
              <a
                href="https://linkedin.com/in/mahindra-danane"
                target="_blank"
                rel="noreferrer"
                className="link-hover transition-colors hover:text-accent"
              >
                LinkedIn ↗
              </a>
            </li>
            <li>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="link-hover transition-colors hover:text-accent"
              >
                GitHub ↗
              </a>
            </li>
            <li>
              <Link
                href="/"
                className="link-hover transition-colors hover:text-accent"
              >
                Back to top ↑
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-glass">
        <div className="container-rule flex flex-col items-start justify-between gap-2 py-5 font-mono text-[11px] uppercase tracking-[0.18em] text-chrome/35 md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} — M. Danane</span>
          <span>Built with Next.js · Deployed on Vercel</span>
        </div>
      </div>
    </footer>
  );
}
