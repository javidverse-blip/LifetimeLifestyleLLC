import Link from "next/link";
import type { AnchorHTMLAttributes } from "react";

type Variant = "primary" | "teal" | "yellow" | "outline" | "white";

const styles: Record<Variant, string> = {
  primary:
    "bg-brand-teal text-white hover:bg-brand-yellow hover:text-brand-ink focus-visible:outline-brand-yellow",
  teal: "bg-brand-teal text-white hover:bg-brand-yellow hover:text-brand-ink focus-visible:outline-brand-teal",
  yellow:
    "bg-brand-yellow text-brand-ink hover:bg-white hover:text-brand-ink focus-visible:outline-brand-yellow",
  outline:
    "border-2 border-brand-ink text-brand-ink hover:bg-brand-ink hover:text-white focus-visible:outline-brand-teal",
  white:
    "bg-white text-brand-ink hover:bg-brand-yellow hover:text-brand-ink focus-visible:outline-brand-teal",
};

interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: Variant;
  size?: "md" | "lg";
  external?: boolean;
}

export function LinkButton({
  href,
  children,
  className = "",
  variant = "primary",
  size = "md",
  external,
  ...props
}: LinkButtonProps) {
  const classes = [
    "inline-flex items-center justify-center gap-2 rounded-full font-accent font-bold transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
    size === "lg" ? "px-8 py-4 text-base" : "px-6 py-3 text-sm",
    styles[variant],
    className,
  ].join(" ");

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
}
