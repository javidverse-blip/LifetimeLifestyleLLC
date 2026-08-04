import Image from "next/image";
import type { Program } from "@/lib/types";
import { getCategoryLabel } from "@/lib/programs";
import { Badge, CategoryBadge } from "@/components/ui/Badge";

export function ProgramCard({ program }: { program: Program }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover">
      <a
        href={program.stanStoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal"
        aria-label={`${program.title} — view on Stan Store`}
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={program.thumbnail}
            alt={program.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/40 via-transparent to-transparent opacity-70" />
          <div className="absolute left-4 top-4 flex flex-wrap gap-2">
            {program.featured && <Badge tone="featured">Featured</Badge>}
            {program.isNew && <Badge tone="new">New</Badge>}
            {program.comingSoon && <Badge>Coming Soon</Badge>}
          </div>
          <div className="absolute bottom-4 left-4">
            <CategoryBadge>{getCategoryLabel(program.category)}</CategoryBadge>
          </div>
        </div>
      </a>

      <div className="flex flex-1 flex-col p-6 text-center sm:text-left">
        <h3 className="text-lg font-extrabold leading-snug text-brand-ink transition-colors group-hover:text-brand-teal">
          <a
            href={program.stanStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {program.title}
          </a>
        </h3>
        <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-slate-600">
          {program.shortDescription}
        </p>

        <div className="mt-5">
          <a
            href={program.stanStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 font-accent text-sm font-bold transition-all duration-200 hover:-translate-y-0.5 ${
              program.comingSoon
                ? "bg-brand-yellow text-brand-ink hover:bg-brand-teal hover:text-white"
                : "bg-brand-teal text-white hover:bg-brand-yellow hover:text-brand-ink"
            }`}
          >
            {program.comingSoon ? "Coming Soon" : program.ctaLabel}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
              aria-hidden
            >
              <path d="M5 12h14" />
              <path d="m13 6 6 6-6 6" />
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
}
