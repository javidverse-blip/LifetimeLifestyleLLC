import type { Program } from "@/lib/types";
import { ProgramGrid } from "@/components/programs/ProgramGrid";

const SECTIONS: { title: string; slugs: string[] }[] = [
  {
    title: "Challenges",
    slugs: [
      "3-day-sugar-reset",
      "5-day-water-reset",
      "gods-healthy-laws-family-reset",
      "god-invented-intermittent-fasting",
    ],
  },
  {
    title: "Coaching",
    slugs: ["book-a-1-1-coaching-call", "feeble-to-fabulous-academy"],
  },
  {
    title: "Courses & Resources",
    slugs: ["community-is-the-cure", "hidden-in-plain-sight-discovery-guide"],
  },
];

export function ProgramBrowser({ programs }: { programs: Program[] }) {
  const bySlug = new Map(programs.map((p) => [p.slug, p]));
  const sections = SECTIONS.map((section) => ({
    title: section.title,
    programs: section.slugs
      .map((slug) => bySlug.get(slug))
      .filter((p): p is Program => Boolean(p)),
  }));

  return (
    <section id="programs" className="scroll-mt-20 bg-brand-teal">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {sections.map((section, index) => (
          <div key={section.title}>
            {index > 0 && (
              <div
                className="mx-auto mb-12 h-px w-24 bg-white/60"
                aria-hidden
              />
            )}
            <h2 className="mb-8 text-center font-accent text-2xl font-extrabold uppercase tracking-[0.2em] text-white">
              {section.title}
            </h2>
            <ProgramGrid programs={section.programs} />
          </div>
        ))}
      </div>
    </section>
  );
}
