import Image from "next/image";
import { LinkButton } from "@/components/ui/LinkButton";

export function HomeHero() {
  return (
    <section className="bg-brand-teal text-white">
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.25fr] lg:gap-12">
          <div className="mx-auto max-w-xl text-center lg:mx-0 lg:text-left">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 font-accent text-xs font-bold uppercase tracking-[0.2em] text-brand-yellow backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-brand-yellow" aria-hidden />
              Lifetime Lifestyle
            </p>
            <div className="mb-6 flex justify-center lg:hidden">
              <Image src="/images/brand/logo-white-hero.png" alt="Lifetime Lifestyle" width={438} height={313} className="h-auto w-full max-w-[260px]" />
            </div>
            <h1 className="text-balance text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Transform Your Health &amp; <span className="text-brand-yellow">Lifestyle</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/85">
              Explore coaching programs, challenges, courses, and resources designed to help people thrive — rooted in faith, built on God&apos;s Healthy Laws, and strengthened through community.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <a href="/programs#programs" className="inline-flex items-center gap-2 rounded-full bg-brand-yellow px-8 py-4 font-accent text-base font-bold text-brand-ink shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:text-brand-ink">Browse Programs</a>
              <LinkButton href="https://stan.store/Gnsing" external variant="white" size="lg">Visit Stan Store</LinkButton>
            </div>
            <dl className="mx-auto mt-12 grid max-w-lg grid-cols-3 gap-6 lg:mx-0">
              {[["8+", "Programs"], ["5", "Categories"], ["100%", "Delivered via Stan Store"]].map(([value, label]) => <div key={label}><dt className="font-display text-2xl font-extrabold text-brand-yellow sm:text-3xl">{value}</dt><dd className="mt-1 text-xs font-semibold uppercase tracking-wider text-white/60">{label}</dd></div>)}
            </dl>
          </div>
          <div className="hidden items-center justify-center lg:flex"><Image src="/images/brand/logo-white-hero.png" alt="Lifetime Lifestyle" width={438} height={313} priority className="h-auto w-full" /></div>
        </div>
      </div>
    </section>
  );
}
