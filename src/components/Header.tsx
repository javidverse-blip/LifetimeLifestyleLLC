"use client";
import Link from "next/link";
import { useState } from "react";

const links = [{ label: "Home", href: "/" }, { label: "Books", href: "/books" }, { label: "Programs", href: "/programs" }, { label: "Blogs", href: "/blogs" }, { label: "About us", href: "/about" }];

export function Header() {
  const [open, setOpen] = useState(false);
  return <header className="sticky top-0 z-50 border-b border-black/15 bg-white">
    <div className="container flex min-h-[88px] items-center justify-between">
      <Link href="/" onClick={() => setOpen(false)}><img src="https://us-wbe-img2.gr-cdn.com/user/d651373d-9b11-4bc5-9645-3895ddb4fa48/0fd0bb05-b0e0-4161-802d-76bfe26655a5.png" alt="Lifetime Lifestyle" className="h-[58px] w-auto" /></Link>
      <nav className="hidden items-center gap-3 md:flex">{links.map((link) => <Link key={link.href} href={link.href} className="px-3 py-3 font-montserrat text-[16px] font-bold text-[#05698e] transition-colors hover:text-[var(--yellow)]">{link.label}</Link>)}<Link href="/contact" className="button ml-3 !rounded-full !bg-[#05698e] !px-7 !py-3 !text-sm !text-white hover:!bg-[var(--yellow)] hover:!text-[#05698e]">Connect</Link></nav>
      <button className="md:hidden" aria-label="Toggle navigation" onClick={() => setOpen(!open)}><span className="text-2xl">{open ? "×" : "☰"}</span></button>
    </div>
    {open && <nav className="container flex flex-col gap-5 border-t border-black/15 py-7 md:hidden">{links.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="font-montserrat text-lg font-bold text-[#05698e]">{link.label}</Link>)}<Link href="/contact" onClick={() => setOpen(false)} className="button w-fit">Connect</Link></nav>}
  </header>;
}
