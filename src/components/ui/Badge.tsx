type BadgeTone = "featured" | "new" | "neutral";

const tones: Record<BadgeTone, string> = {
  featured:
    "bg-brand-yellow text-brand-ink",
  new: "bg-brand-teal text-white",
  neutral: "bg-brand-ink text-white",
};

export function Badge({
  children,
  tone = "neutral",
  className = "",
}: {
  children: React.ReactNode;
  tone?: BadgeTone;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 font-accent text-xs font-bold uppercase tracking-wide shadow-soft ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}

export function CategoryBadge({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-brand-teal/20 bg-white/90 px-3 py-1 font-accent text-xs font-semibold uppercase tracking-wide text-brand-teal backdrop-blur ${className}`}
    >
      {children}
    </span>
  );
}
