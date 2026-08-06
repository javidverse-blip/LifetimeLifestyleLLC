import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-[var(--mist)] px-5 py-24 text-center sm:py-32">
      <div className="mx-auto max-w-xl">
        <p className="font-display text-7xl font-extrabold text-[var(--teal)]/30">
          404
        </p>
        <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight text-[var(--green)] sm:text-5xl">
          This page seems to be hiding.
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-600">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
          Let&apos;s get you back on the journey.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--teal)] px-8 py-4 font-montserrat text-base font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--green)]"
          >
            Back Home
          </Link>
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 rounded-full border-2 border-[var(--teal)] px-8 py-3.5 font-montserrat text-base font-bold text-[var(--teal)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--teal)] hover:text-white"
          >
            Explore Programs
          </Link>
        </div>
      </div>
    </section>
  );
}
