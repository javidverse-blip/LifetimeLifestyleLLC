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
  const visible = mockPrograms.filter((p) => !p.comingSoon || p.isNew);
  const order = new Map([
    ["3-day-sugar-reset", 0],
    ["5-day-water-reset", 1],
    ["gods-healthy-laws-family-reset", 2],
    ["god-invented-intermittent-fasting", 3],
    ["book-a-1-1-coaching-call", 4],
    ["hidden-in-plain-sight-discovery-guide", 5],
    ["feeble-to-fabulous-academy", 6],
    ["community-is-the-cure", 7],
  ]);
  return [...visible].sort(
    (a, b) =>
      (order.get(a.slug) ?? 99) - (order.get(b.slug) ?? 99) ||
      a.title.localeCompare(b.title),
  );
}

export async function getFeaturedProgram(): Promise<Program | null> {
  return mockPrograms.find((p) => p.featured) ?? null;
}

export const CATEGORIES: ProgramCategoryMeta[] = [
  { id: "all", label: "All Programs" },
  { id: "coaching", label: "Coaching" },
  { id: "challenges", label: "Challenges" },
  { id: "courses", label: "Courses" },
  { id: "digital-resources", label: "Digital Resources" },
  { id: "free-resources", label: "Free Resources" },
];

export function getCategoryLabel(
  category: ProgramCategory | "all",
): string {
  return CATEGORIES.find((c) => c.id === category)?.label ?? "All Programs";
}
