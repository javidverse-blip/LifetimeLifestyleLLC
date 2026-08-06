import { programs as mockPrograms } from "@/lib/data/programs";
import type { Program, ProgramCategory, ProgramCategoryMeta } from "@/lib/types";

/**
 * Data access layer for programs.
 *
 * These functions are async so they can be swapped for Prisma/MySQL queries
 * later with minimal changes — every consumer already awaits them.
 *
 * Example future implementation:
 *   export async function getAllPrograms() {
 *     return prisma.program.findMany({ where: { published: true } });
 *   }
 */

export async function getAllPrograms(): Promise<Program[]> {
  const order = new Map([
    ["3-day-sugar-reset", 0],
    ["5-day-water-reset", 1],
    ["hidden-in-plain-sight-discovery-guide", 2],
    ["god-invented-intermittent-fasting", 3],
    ["gods-healthy-laws", 4],
    ["but-i-dont-like-water", 5],
    ["future-health-resets", 6],
    ["book-a-1-1-coaching-call", 7],
    ["feeble-to-fabulous-academy", 8],
    ["community-is-the-cure", 9],
    ["praise-no-matter-what-happens", 10],
    ["whos-voice-are-you-listening-to", 11],
    ["the-voice-you-lead-will-feed", 12],
    ["gods-healthy-laws-family-reset", 13],
    ["family-worship-theater", 14],
    ["childrens-books", 15],
    ["family-devotionals", 16],
  ]);
  return [...mockPrograms].sort(
    (a, b) =>
      (order.get(a.slug) ?? 99) - (order.get(b.slug) ?? 99) ||
      a.title.localeCompare(b.title),
  );
}

export async function getFeaturedProgram(): Promise<Program | null> {
  return mockPrograms.find((p) => p.featured) ?? null;
}

export async function getFeaturedPrograms(count = 3): Promise<Program[]> {
  const featured = mockPrograms.filter((p) => p.featured);
  const rest = mockPrograms.filter((p) => !p.featured);
  return [...featured, ...rest].slice(0, count);
}

export const CATEGORIES: ProgramCategoryMeta[] = [
  { id: "all", label: "All Programs" },
  { id: "health", label: "Health" },
  { id: "healing", label: "Healing & Spiritual Growth" },
  { id: "family", label: "Family" },
];

export function getCategoryLabel(
  category: ProgramCategory | "all",
): string {
  return CATEGORIES.find((c) => c.id === category)?.label ?? "All Programs";
}
