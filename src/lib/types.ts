export type ProgramCategory =
  | "coaching"
  | "challenges"
  | "courses"
  | "digital-resources"
  | "free-resources";

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  detail?: string;
}

/**
 * Program — the canonical record for a coaching program, course, challenge,
 * or digital resource. This shape mirrors the future MySQL schema so the mock
 * data file can be swapped for a Prisma-backed repository with minimal changes.
 */
export interface Program {
  /** Stable database identifier. */
  id: string;
  title: string;
  /** URL slug for /programs/[slug]. */
  slug: string;
  category: ProgramCategory;
  /** Short marketing hook shown under the title. */
  tagline: string;
  /** Card thumbnail (local path under /public). */
  thumbnail: string;
  /** Large hero / banner image (local path under /public). */
  bannerImage: string;
  /** One-to-two sentence summary for cards and search results. */
  shortDescription: string;
  /** Full description, paragraphs separated by blank lines. */
  description: string;
  /** e.g. "5 Days", "6 Weeks", "60 min". */
  duration?: string;
  /** Price in `currency`. null when not yet available (e.g. coming soon). */
  price: number | null;
  /** Optional "compare at" / regular price to highlight savings. */
  compareAtPrice?: number | null;
  currency: string;
  featured: boolean;
  isNew: boolean;
  comingSoon?: boolean;
  /** External purchase / booking destination (Stan Store, Skool, waitlist). */
  stanStoreUrl: string;
  /** Button label, e.g. "Enroll Now", "Join the Waitlist". */
  ctaLabel: string;
  /** Keyword list used for search. */
  keywords: string[];
  /** Program Overview — About the program paragraphs. */
  about: string[];
  /** Who it is for. */
  whoItIsFor: string[];
  /** What participants will learn. */
  learnings: string[];
  /** Benefits. */
  benefits: string[];
  /** Expected outcomes. */
  outcomes: string[];
  /** What's Included checklist. */
  whatsIncluded: string[];
  /** Social proof (placeholder content is used when none exist). */
  testimonials: Testimonial[];
  /** Frequently asked questions. */
  faqs: FaqItem[];
}

export interface ProgramCategoryMeta {
  id: ProgramCategory | "all";
  label: string;
}
