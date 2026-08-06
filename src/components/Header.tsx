"use client";
import Link from "next/link";
import { useState } from "react";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Publishing", href: "/publishing" },
  { label: "Programs", href: "/programs" },
  { label: "Community", href: "/from-feeble-to-fabulous" },
  { label: "Watch & Listen", href: "/watch-and-listen" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white">
      <div className="container flex min-h-[80px] items-center justify-between gap-6">
        <Link href="/" onClick={() => setOpen(false)}>
          <img
            src="/images/brand/new-logo.png"
            alt="Lifetime Lifestyle"
            className="h-[54px] w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-3 font-montserrat text-[14px] font-bold text-[var(--teal)] transition-colors hover:text-[var(--gold)]"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="button ml-3 !rounded-full !bg-[var(--teal)] !px-6 !py-3 !text-sm !text-white hover:!bg-[var(--gold)] hover:!text-[var(--green)]"
          >
            Connect
          </Link>
        </nav>

        <button
          className="lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span className="text-2xl">{open ? "×" : "☰"}</span>
        </button>
      </div>

      {open && (
        <nav className="container flex flex-col gap-4 border-t border-black/15 py-6 lg:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-montserrat text-base font-bold text-[var(--teal)]"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="button w-fit !bg-[var(--teal)] !text-white"
          >
            Connect
          </Link>
        </nav>
      )}
    </header>
  );
}
