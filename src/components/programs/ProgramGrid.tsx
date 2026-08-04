import type { Program } from "@/lib/types";
import { ProgramCard } from "@/components/programs/ProgramCard";
import { Reveal } from "@/components/ui/Reveal";

export function ProgramGrid({ programs }: { programs: Program[] }) {
  if (programs.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-slate-300 bg-white/60 px-6 py-20 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-teal/5">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="h-8 w-8 text-brand-teal"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
          </svg>
        </div>
        <h3 className="text-xl font-extrabold text-brand-ink">
          No programs found
        </h3>
        <p className="mx-auto mt-2 max-w-sm text-sm text-slate-600">
          Try a different search term or clear your category filter to see all
          programs.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {programs.map((program, index) => (
        <Reveal key={program.id} delay={(index % 2) * 80}>
          <ProgramCard program={program} />
        </Reveal>
      ))}
    </div>
  );
}
