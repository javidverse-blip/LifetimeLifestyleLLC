import { Reveal } from "@/components/ui/Reveal";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className = "",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
}) {
  const alignClass =
    align === "center" ? "mx-auto text-center" : "text-left";
  return (
    <Reveal className={`max-w-2xl ${alignClass} ${className}`}>
      {eyebrow && (
        <p className="mb-3 font-accent text-xs font-bold uppercase tracking-[0.2em] text-brand-teal">
          {eyebrow}
        </p>
      )}
      <h2 className="text-balance text-3xl font-extrabold tracking-tight text-brand-ink sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
