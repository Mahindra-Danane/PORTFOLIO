import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

export function Nav() {
  return (
    <header className="glass-nav sticky top-0 z-50 isolate">
      <div className="container-rule flex h-16 items-center justify-between">
        <Link
          href="/"
          aria-label="Home"
          className="group flex items-center gap-3"
        >
          <span className="grid h-8 w-8 place-items-center rounded-full border border-accent/40 bg-accent/15 font-mono text-[10px] font-medium tracking-[0.05em] text-accent transition-transform duration-500 group-hover:scale-105">
            MD
          </span>
          <span className="hidden font-mono text-[12px] tracking-[0.16em] text-chrome sm:inline">
            MAHINDRA&nbsp;DANANE
          </span>
        </Link>

        <nav className="flex items-center gap-7 font-mono text-[12px] tracking-[0.14em] text-chrome">
          <Link
            href="/work/workchat"
            className="link-hover transition-colors hover:text-chrome"
          >
            <span className="text-accent">01</span>&nbsp;WORKCHATS
          </Link>
          <Link
            href="/work/build-id"
            className="link-hover transition-colors hover:text-chrome"
          >
            <span className="text-accent">02</span>&nbsp;BUILD&nbsp;ID
          </Link>
          <a
            href="mailto:mahindradanane10@gmail.com"
            className="link-hover hidden transition-colors hover:text-chrome sm:inline-flex"
          >
            CONTACT
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
