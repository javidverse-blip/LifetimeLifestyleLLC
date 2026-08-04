"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Lightweight scroll-reveal wrapper using IntersectionObserver.
 * Respects reduced-motion preferences.
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      node.getBoundingClientRect().top < window.innerHeight
    ) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(node);
    const fallback = window.setTimeout(() => setVisible(true), 800);
    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  const TagName = Tag as React.ElementType;

  return (
    <TagName
      ref={ref}
      className={`${className} transition-all duration-700 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </TagName>
  );
}
