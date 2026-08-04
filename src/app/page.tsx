import { HomeHero } from "@/components/HomeHero";
import { images } from "@/data/content";
import { MediaCard } from "@/components/MediaCard";
import { getFeaturedProgram } from "@/lib/programs";
import { FeaturedProgram } from "@/components/programs/FeaturedProgram";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default async function Home() {
  const featured = await getFeaturedProgram();

  return <>
  <HomeHero />
   {featured && <section id="featured" className="scroll-mt-20 bg-slate-50/70"><div className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8"><SectionHeading eyebrow="Featured Program" title={featured.title} subtitle={featured.tagline} /></div><FeaturedProgram program={featured} /></section>}
   <section className="bg-white px-5 py-20 sm:py-28"><div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[.8fr_1.2fr]"><div className="mx-auto w-full max-w-md overflow-hidden rounded-[2rem] bg-[#e8f4f7] p-4 shadow-[0_18px_45px_rgba(3,105,142,.14)]"><img src={images.author} alt="Gina Jenkins, CEO and founder of Lifetime Lifestyle" className="aspect-[4/5] w-full rounded-[1.5rem] object-cover" /></div><div className="max-w-2xl"><p className="font-montserrat text-sm font-bold uppercase tracking-[.22em] text-[#05698e]">Gina Jenkins · CEO &amp; founder</p><h2 className="serif mt-4 text-4xl font-bold text-[var(--ink)] sm:text-5xl">Our family story became our mission.</h2><p className="mt-6 text-lg leading-8 text-slate-600">Lifetime Lifestyle was born out of personal experience—struggles, setbacks, and breakthroughs that led to lasting transformation. What began as one family&apos;s journey to health and healing has grown into a mission to help others discover the same freedom.</p><p className="mt-5 text-lg leading-8 text-slate-600">Through moving to the countryside, growing food, exercising, and simplifying life, Gina discovered the timeless platform of God&apos;s Healthy Laws. These principles changed her body, her mind, and her faith—and now they are the heartbeat of everything we do.</p></div></div></section>
   <section className="paper"><div className="bg-[#05698e] px-5 py-16 text-center text-white sm:py-20"><div className="mx-auto max-w-2xl"><p className="font-montserrat text-sm font-bold uppercase tracking-[.22em] text-[#feca05]">What we offer</p><h2 className="mt-4 font-display text-4xl font-extrabold leading-tight text-white md:text-5xl">Resources for every season of life.</h2><p className="mt-5 text-lg leading-8 text-white/85">Books and tools for children, teens, and adults. Step-by-step guidance through our programs. Inspirational content, encouragement, and practical tips.</p></div></div><div className="container py-16 sm:py-20"><div className="grid gap-6 md:grid-cols-3"><MediaCard image={images.homeOne} tag="Books & workbooks" title="Amazing books and tools" description="Resources for children, teens, and adults." href="/books" /><MediaCard image={images.homeTwo} tag="Programs & webinars" title="Step-by-step guidance" description="Faith-based programs for your family." href="/programs" /><MediaCard image={images.homeThree} tag="Blogs & resources" title="Inspirational content" description="Encouragement and practical tips." href="/blogs" /></div></div></section>
  </>;
}
