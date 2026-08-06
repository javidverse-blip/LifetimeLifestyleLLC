import { Reveal } from "@/components/ui/Reveal";

export function CTASection({
  stanStoreUrl,
  ctaLabel,
}: {
  stanStoreUrl: string;
  ctaLabel: string;
}) {
  return (
    <section className="bg-[var(--teal)]">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal>
          <div className="px-6 py-16 text-center text-white sm:px-12 sm:py-20">
            <div className="mx-auto max-w-2xl">
              <p className="font-accent text-xs font-bold uppercase tracking-[0.25em] text-brand-yellow">
                Ready to begin?
              </p>
              <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
                Your next season starts with one step
              </h2>
              <p className="mt-5 text-base leading-relaxed text-white/85 sm:text-lg">
                One step changes everything. Start your transformation today —
                every purchase is securely processed and delivered by Stan
                Store.
              </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <a
                href={stanStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-brand-yellow px-9 py-4 font-accent text-base font-bold text-brand-ink shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:text-brand-ink"
              >
                {ctaLabel}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                  aria-hidden
                >
                  <path d="M5 12h14" />
                  <path d="m13 6 6 6-6 6" />
                </svg>
              </a>
              <a
                href="mailto:lifetimelifestylellc@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-8 py-3.5 font-accent text-base font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:text-brand-ink"
              >
                Contact Us
              </a>
            </div>
            <p className="mt-6 text-xs text-white/60">
              Secure checkout · Instant digital delivery · Powered by Stan Store
            </p>
          </div>
        </div>
        </Reveal>
      </div>
    </section>
  );
}
