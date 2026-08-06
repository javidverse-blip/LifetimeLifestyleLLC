import Link from "next/link";
import type { Program } from "@/lib/types";
import { ProgramCard } from "@/components/programs/ProgramCard";

export function ExperiencesStrip({ programs }: { programs: Program[] }) {
  return (
    <section className="bg-white px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-montserrat text-sm font-bold uppercase tracking-[.22em] text-[var(--teal)]">
            Featured Programs
          </p>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight text-[var(--green)] sm:text-5xl">
            You aren&apos;t just picking up a book. You&apos;re starting a journey.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Every program is the foundation of a whole collection of resources —
            videos, audio, devotionals, journals, discussion guides, trackers,
            and activities built around one Living Truth.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {programs.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--teal)] px-8 py-4 font-montserrat text-base font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--green)]"
          >
            Explore All Programs
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden>
              <path d="M5 12h14" />
              <path d="m13 6 6 6-6 6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
