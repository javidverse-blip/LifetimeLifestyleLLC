"use client";
import { useState } from "react";
import {
  MEDIA_CATEGORIES,
  mediaItems,
  type MediaCategory,
  type MediaType,
} from "@/data/media";

const typeLabels: Record<MediaType, string> = {
  video: "Video",
  audio: "Audio",
  article: "Article",
};

export function MediaBrowser() {
  const [category, setCategory] = useState<MediaCategory | "all">("all");

  const visible =
    category === "all"
      ? mediaItems
      : mediaItems.filter((item) => item.category === category);

  return (
    <section className="bg-white px-5 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap justify-center gap-2">
          {MEDIA_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setCategory(cat.id)}
              className={`rounded-full px-5 py-2.5 font-montserrat text-sm font-bold transition-all duration-200 ${
                category === cat.id
                  ? "bg-[var(--green)] text-white shadow-soft"
                  : "bg-[var(--mist)] text-[var(--green)] hover:bg-[var(--teal)] hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((item) => (
            <article
              key={item.id}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-black/5 bg-gradient-to-b from-[var(--mist)] to-white shadow-[0_10px_30px_-12px_rgba(20,134,145,0.16)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_42px_-16px_rgba(20,134,145,0.28)]"
            >
              <div className="flex items-center justify-between bg-[var(--green)] px-6 py-4">
                <span className="inline-flex items-center gap-2 font-montserrat text-xs font-bold uppercase tracking-wider text-white">
                  <span className="text-lg" aria-hidden>
                    {item.icon}
                  </span>
                  {typeLabels[item.type]}
                </span>
                <span className="rounded-full bg-white/15 px-3 py-1 font-montserrat text-[10px] font-bold uppercase tracking-wider text-white">
                  {MEDIA_CATEGORIES.find((c) => c.id === item.category)?.label}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-extrabold leading-snug text-[var(--green)]">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-base leading-7 text-slate-600">
                  {item.description}
                </p>
                {item.relatedExperience && (
                  <a
                    href={item.relatedExperience.href}
                    target={
                      item.relatedExperience.href.startsWith("http")
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      item.relatedExperience.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="mt-6 inline-flex items-center gap-2 border-t border-black/5 pt-5 font-montserrat text-sm font-bold text-[var(--teal)] transition-colors hover:text-[var(--gold-deep)]"
                  >
                    {item.relatedExperience.label}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 shrink-0" aria-hidden>
                      <path d="M5 12h14" />
                      <path d="m13 6 6 6-6 6" />
                    </svg>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
