import Image from "next/image";
import type { Program } from "@/lib/types";
import { getCategoryLabel } from "@/lib/programs";
import { LinkButton } from "@/components/ui/LinkButton";
import { Badge } from "@/components/ui/Badge";

const highlights = [
  { emoji: "✅", label: "The 40-Day 8 Laws Tracker" },
  { emoji: "📖", label: "The Book" },
  { emoji: "💧", label: "The Water Tracker" },
  { emoji: "📝", label: "My 40-Day Transformation Declaration" },
  { emoji: "🎉", label: "The My Win Card" },
  { emoji: "🍇", label: "God's Original Foods of the Bible" },
  { emoji: "🌿", label: "God's Original Food Design" },
  { emoji: "📇", label: "Affirmation & Scripture Memory Cards" },
];

export function FeaturedProgram({ program }: { program: Program }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="group relative grid overflow-hidden rounded-4xl bg-[var(--green)] shadow-card-hover lg:grid-cols-2">
        <div className="relative aspect-square">
          <Image
            src={program.bannerImage ?? program.thumbnail ?? ""}
            alt={program.title}
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute left-5 top-5 flex gap-2">
            <Badge tone="featured">Featured</Badge>
            {program.isNew && <Badge tone="new">New</Badge>}
          </div>
        </div>

        <div className="relative flex flex-col justify-center p-7 text-center text-white sm:p-8 sm:text-left lg:aspect-square lg:p-9 xl:p-10">
          <p className="font-accent text-[11px] font-bold uppercase tracking-[0.2em] text-brand-yellow">
            {getCategoryLabel(program.category)} · {program.duration}
          </p>
          <h2 className="mt-2 text-balance text-xl font-extrabold leading-tight tracking-tight text-white sm:text-2xl xl:text-3xl">
            {program.title}
          </h2>
          <p className="mt-2.5 line-clamp-3 text-sm leading-relaxed text-white/80 xl:text-[15px]">
            {program.shortDescription}
          </p>

          <div className="mt-4">
            <p className="font-accent text-[11px] font-bold uppercase tracking-[0.2em] text-brand-yellow">
              Everything Included
            </p>
            <ul className="mt-2.5 grid gap-1.5 sm:grid-cols-2 xl:gap-2">
              {highlights.map((item) => (
                <li
                  key={item.label}
                  className="flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-2 py-1.5 text-[11px] font-semibold text-white/90 sm:justify-start xl:text-xs"
                >
                  <span className="text-sm xl:text-base" aria-hidden>
                    {item.emoji}
                  </span>
                  {item.label}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5 flex justify-center border-t border-white/15 pt-4 sm:justify-start">
            <LinkButton
              href={program.stanStoreUrl}
              external
              variant="yellow"
              className="border-2 border-white/20"
            >
              {program.ctaLabel}
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
