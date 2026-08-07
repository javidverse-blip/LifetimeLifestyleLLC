"use client";
import { useEffect, useState } from "react";
import type { Program, ProgramCategory } from "@/lib/types";
import { getCategoryLabel } from "@/lib/programs";
import { ProgramGrid } from "@/components/programs/ProgramGrid";

const CATEGORY_CARDS: {
  id: ProgramCategory;
  icon: string;
  blurb: string;
}[] = [
  {
    id: "health",
    icon: "🍃",
    blurb:
      "Biblical health education, resets, and digital resources — starting with God's original design.",
  },
  {
    id: "healing",
    icon: "🕊️",
    blurb:
      "Experiences for healing, praise, and growing in discernment of God's voice.",
  },
  {
    id: "family",
    icon: "👨‍👩‍👧‍👦",
    blurb:
      "Books, devotionals, and activities that help families grow together — body and spirit.",
  },
];

const HEALTH_STORY =
  "God's Healthy Laws began with a phone call no grandmother wants to receive: my great granddaughter had been diagnosed as pre-diabetic. Instead of fear, that moment opened my eyes to God's original design for our health. The changes she made turned that diagnosis around — and I knew other families needed to hear what we had discovered. Nearly fifteen years working alongside an Internal Medicine physician shaped the practical, health-giving teaching that became Lifetime Lifestyle LLC.";

const SECTION_SUBTITLES: Record<ProgramCategory, string> = {
  health:
    "Biblical health education, resets, and digital resources — starting with God's original design.",
  healing:
    "Experiences for healing, praise, and growing in discernment of God's voice.",
  family:
    "Books, devotionals, and activities that help families grow together — body and spirit.",
};

const CATEGORY_ORDER: ProgramCategory[] = ["health", "healing", "family"];

export function ProgramBrowser({ programs }: { programs: Program[] }) {
  const [active, setActive] = useState<ProgramCategory>("health");

  useEffect(() => {
    const readHash = () => {
      const id = window.location.hash.replace("#", "");
      if (id === "health" || id === "healing" || id === "family") {
        setActive(id);
      }
    };
    readHash();
    window.addEventListener("hashchange", readHash);
    return () => window.removeEventListener("hashchange", readHash);
  }, []);

  const select = (category: ProgramCategory) => {
    setActive(category);
    window.location.hash = category;
  };

  const nextCategory =
    CATEGORY_ORDER[(CATEGORY_ORDER.indexOf(active) + 1) % CATEGORY_ORDER.length];

  const browseNext = () => {
    select(nextCategory);
    document.getElementById("browse")?.scrollIntoView({ behavior: "smooth" });
  };

  const activePrograms = programs.filter((p) => p.category === active);

  return (
    <>
      <section className="bg-brand-teal">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 font-accent text-xs font-bold uppercase tracking-[0.2em] text-brand-yellow">
              Find your path
            </p>
            <h2 className="text-balance text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Choose your journey
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/80 sm:text-lg">
              Every program begins with a story and grows into a whole
              collection of resources — videos, audio, devotionals, journals,
              trackers, and activities.
            </p>
          </div>
          <div className="-mx-4 mt-12 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-2 sm:-mx-6 sm:px-6 md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0 md:pb-0">
            {CATEGORY_CARDS.map((category) => {
              const isActive = active === category.id;
              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => select(category.id)}
                  aria-pressed={isActive}
                  className={`group flex min-w-[13rem] snap-start flex-col rounded-2xl border p-4 text-left shadow-[0_10px_30px_-12px_rgba(20,134,145,0.4)] transition-all duration-300 hover:-translate-y-1.5 md:min-w-0 md:rounded-[1.75rem] md:p-8 ${
                    isActive
                      ? "border-white bg-white text-[var(--green)] shadow-[0_22px_45px_-18px_rgba(20,134,145,0.55)]"
                      : "border-white/10 bg-white/10 text-white hover:bg-white/15"
                  }`}
                >
                  <span className="text-2xl md:text-4xl" aria-hidden>
                    {category.icon}
                  </span>
                  <h2 className="mt-3 font-display text-lg font-extrabold leading-tight md:mt-5 md:text-2xl">
                    {getCategoryLabel(category.id)}
                  </h2>
                  <p
                    className={`mt-2 line-clamp-3 text-xs leading-5 md:mt-3 md:line-clamp-none md:flex-1 md:text-base md:leading-7 ${
                      isActive ? "text-slate-600" : "text-white/80"
                    }`}
                  >
                    {category.blurb}
                  </p>
                  <span
                    className={`mt-4 inline-flex items-center gap-2 font-montserrat text-xs font-bold transition-colors md:mt-6 md:text-sm ${
                      isActive
                        ? "text-brand-teal group-hover:text-[var(--gold-deep)]"
                        : "text-brand-yellow group-hover:text-white"
                    }`}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-3.5 w-3.5 md:h-4 md:w-4"
                      aria-hidden
                    >
                      <path d="M12 5v14" />
                      <path d="m6 13 6 6 6-6" />
                    </svg>
                  </span>
                </button>
              );
            })}
          </div>
          <p className="mt-3 text-center text-xs font-semibold text-white/60 md:hidden">
            Swipe to explore all paths
          </p>
        </div>
      </section>

      <section id="browse" className="scroll-mt-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 font-accent text-xs font-bold uppercase tracking-[0.2em] text-brand-teal">
              {getCategoryLabel(active)}
            </p>
            <h2 className="text-balance text-3xl font-extrabold tracking-tight text-brand-ink sm:text-4xl">
              {getCategoryLabel(active)} Programs
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              {SECTION_SUBTITLES[active]}
            </p>
          </div>

          {active === "health" && (
            <p className="mx-auto mt-6 max-w-3xl rounded-2xl border border-brand-teal/15 bg-brand-teal/5 px-6 py-5 text-center font-body text-base leading-7 text-slate-700">
              {HEALTH_STORY}
            </p>
          )}

          <div className="mt-12">
            <ProgramGrid programs={activePrograms} />
          </div>

          <div className="mt-12 flex justify-center">
            <button
              type="button"
              onClick={browseNext}
              className="inline-flex items-center gap-2 rounded-full bg-brand-teal px-9 py-4 font-accent text-base font-bold text-white shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-yellow hover:text-brand-ink"
            >
              Browse {getCategoryLabel(nextCategory)}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
                aria-hidden
              >
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
