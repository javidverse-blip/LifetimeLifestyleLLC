import type { Metadata } from "next";
import { getAllPrograms, getFeaturedProgram } from "@/lib/programs";
import { Hero } from "@/components/programs/Hero";
import { FeaturedProgram } from "@/components/programs/FeaturedProgram";
import { ProgramBrowser } from "@/components/programs/ProgramBrowser";
import { CTASection } from "@/components/programs/CTASection";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = { title: "Programs", description: "Explore coaching programs, challenges, courses, and resources designed to help women thrive." };

export default async function Programs() {
  const [programs, featured] = await Promise.all([getAllPrograms(), getFeaturedProgram()]);
  return <>
    <Hero />
    {featured && <section id="featured" className="scroll-mt-20 bg-slate-50/70"><div className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8"><SectionHeading eyebrow="Featured Program" title={featured.title} subtitle={featured.tagline} /></div><FeaturedProgram program={featured} /></section>}
    <ProgramBrowser programs={programs} />
    <CTASection ctaLabel="Browse on Stan Store" stanStoreUrl="https://stan.store/Gnsing" />
  </>;
}
