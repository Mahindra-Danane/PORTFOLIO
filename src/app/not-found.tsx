import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-rule py-32">
      <div className="glass mx-auto max-w-3xl rounded-3xl p-10 md:p-16">
        <p className="label-accent">404 — Off the grid</p>
        <h1 className="mt-4 font-display text-3xl font-light tracking-tightish text-chrome md:text-5xl">
          That page{" "}
          <span className="serif-italic gradient-text">doesn&apos;t exist.</span>
        </h1>
        <p className="mt-8 max-w-[40ch] text-lg text-chrome">
          Probably my fault. Try one of these instead.
        </p>
        <ul className="mt-10 space-y-2 font-mono text-[14px]">
          <li>
            <Link
              href="/"
              className="link-hover text-chrome transition-colors hover:text-accent"
            >
              ↳ Home
            </Link>
          </li>
          <li>
            <Link
              href="/work/workchat"
              className="link-hover text-chrome transition-colors hover:text-accent"
            >
              ↳ WorkChats case study
            </Link>
          </li>
          <li>
            <Link
              href="/work/build-id"
              className="link-hover text-chrome transition-colors hover:text-accent"
            >
              ↳ Build ID case study
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
