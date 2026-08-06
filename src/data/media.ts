export type MediaType = "video" | "audio" | "article";

export type MediaCategory =
  | "health"
  | "family"
  | "biblical"
  | "healing"
  | "publishing"
  | "marketing"
  | "christian-living";

export interface MediaItem {
  id: string;
  type: MediaType;
  category: MediaCategory;
  title: string;
  description: string;
  icon: string;
  /** The Living Truth Experience this item points people toward. */
  relatedExperience?: { label: string; href: string };
}

export const MEDIA_CATEGORIES: { id: MediaCategory | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "health", label: "Health" },
  { id: "family", label: "Family" },
  { id: "biblical", label: "Biblical Discoveries" },
  { id: "healing", label: "Healing" },
  { id: "publishing", label: "Publishing" },
  { id: "marketing", label: "Marketing" },
  { id: "christian-living", label: "Christian Living" },
];

export const mediaItems: MediaItem[] = [
  {
    id: "media_water_why",
    type: "video",
    category: "health",
    title: "Why Water Is God's Perfect Drink",
    description:
      "A short teaching on why simple, intentional hydration may be the reset your body has been waiting for.",
    icon: "💧",
    relatedExperience: {
      label: "Go deeper with the 5-Day Water Reset",
      href: "https://stan.store/Gnsing/p/the-5day-water-reset",
    },
  },
  {
    id: "media_sugar_cycle",
    type: "video",
    category: "health",
    title: "Breaking the Sugar Cycle — Without Shame",
    description:
      "How community, not perfection, is the key to getting back up and staying on track.",
    icon: "🍯",
    relatedExperience: {
      label: "Go deeper with the 3-Day Sugar Reset",
      href: "https://stan.store/Gnsing/p/the-3-day-sugar-reset",
    },
  },
  {
    id: "media_family_dinner",
    type: "article",
    category: "family",
    title: "Five Conversations to Start at the Dinner Table",
    description:
      "Simple, faith-filled questions that turn any meal into a moment your family remembers.",
    icon: "🍽️",
    relatedExperience: {
      label: "Explore Family Programs",
      href: "/programs#family",
    },
  },
  {
    id: "media_family_reset",
    type: "audio",
    category: "family",
    title: "The 8-Day Family Reset: A Parent's Guide",
    description:
      "Hear how eight simple habits can help your family grow strong — inside and out.",
    icon: "👨‍👩‍👧‍👦",
    relatedExperience: {
      label: "Go deeper with the 8-Day Family Experience",
      href: "https://stan.store/Gnsing/p/gods-healthy-laws-family-reset-challenge",
    },
  },
  {
    id: "media_exodus16",
    type: "article",
    category: "biblical",
    title: "Exodus 16: The Pattern Hidden in the Manna",
    description:
      "What the wilderness taught about daily eating, rest, and dependence on God.",
    icon: "🍇",
    relatedExperience: {
      label: "Go deeper with God Invented Intermittent Fasting",
      href: "https://stan.store/Gnsing/p/god-invented-intermittent-fasting-bundle",
    },
  },
  {
    id: "media_plain_sight",
    type: "video",
    category: "biblical",
    title: "Hidden in Plain Sight — A Guided Discovery",
    description:
      "Slow down and look again at familiar passages with fresh eyes.",
    icon: "🔍",
    relatedExperience: {
      label: "Download the free Discovery Guide",
      href: "https://stan.store/Gnsing/p/free-7day-discovery-guide-hidden-in-plain-sight",
    },
  },
  {
    id: "media_praise_path",
    type: "audio",
    category: "healing",
    title: "Praise as a Path to Healing",
    description:
      "How a lifestyle of praise transformed decades of trauma, addiction, and brokenness.",
    icon: "🎶",
    relatedExperience: {
      label: "Go deeper with Praise No Matter What Happens",
      href: "https://www.amazon.com/Praise-Matter-What-Happens-transforms/dp/B0BDW4Z2K1/ref=tmm_pap_swatch_0",
    },
  },
  {
    id: "media_whose_voice",
    type: "article",
    category: "healing",
    title: "Whose Voice Are You Listening To?",
    description:
      "Every life is shaped by the voice it follows. Here's how to tell them apart.",
    icon: "🦻",
    relatedExperience: {
      label: "Explore Healing & Spiritual Growth",
      href: "/programs#healing",
    },
  },
  {
    id: "media_cover_design",
    type: "video",
    category: "publishing",
    title: "What Makes a Book Cover Sell",
    description:
      "A practical look at the covers that stop the scroll — and the ones that get passed over.",
    icon: "🎨",
    relatedExperience: {
      label: "Explore Publishing Services",
      href: "/publishing",
    },
  },
  {
    id: "media_self_publish",
    type: "article",
    category: "publishing",
    title: "Self-Publishing on Amazon: The Simple Setup",
    description:
      "The essentials of Amazon and Kindle publishing — done right the first time.",
    icon: "📚",
    relatedExperience: {
      label: "Book a Publishing Consultation",
      href: "/publishing",
    },
  },
  {
    id: "media_ads_that_work",
    type: "video",
    category: "marketing",
    title: "Ads That Actually Work for Your Book",
    description:
      "Why strong graphics and clear messaging beat bigger budgets every time.",
    icon: "📈",
    relatedExperience: {
      label: "Explore the Marketing Subscription",
      href: "/marketing-subscription",
    },
  },
  {
    id: "media_content_consistency",
    type: "article",
    category: "marketing",
    title: "Consistency Beats Intensity: Posting That Lasts",
    description:
      "How a steady rhythm of content keeps your audience growing without burning you out.",
    icon: "📅",
    relatedExperience: {
      label: "Explore the Marketing Subscription",
      href: "/marketing-subscription",
    },
  },
  {
    id: "media_sabbath",
    type: "article",
    category: "christian-living",
    title: "Rest as a Spiritual Practice",
    description:
      "Why the rhythm of rest God built into creation is still the healthiest habit we have.",
    icon: "🕯️",
    relatedExperience: {
      label: "Explore All Programs",
      href: "/programs",
    },
  },
  {
    id: "media_trust",
    type: "audio",
    category: "christian-living",
    title: "Trust: The First Law of Health",
    description:
      "An encouragement to lean on the One who designed your body in the first place.",
    icon: "🤲",
    relatedExperience: {
      label: "Explore Health Programs",
      href: "/programs#health",
    },
  },
];
