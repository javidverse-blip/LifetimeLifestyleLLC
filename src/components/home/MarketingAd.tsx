import Link from "next/link";

export function MarketingAd() {
  return (
    <section className="bg-[var(--teal)] px-5 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="font-montserrat text-sm font-bold uppercase tracking-[.22em] text-[var(--gold)]">
              Done-for-you marketing
            </p>
            <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl">
              Your message deserves a team behind it.
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/80">
              We handle the technical side so you can keep creating — ad
              graphics, video uploads, audio and video creation, and website
              building. One simple monthly plan that keeps your brand moving
              forward.
            </p>
            <Link
              href="/marketing-subscription"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--gold)] px-8 py-4 font-montserrat text-base font-bold text-[var(--green)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-white"
            >
              Learn More
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden>
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </Link>
          </div>
          <div className="grid gap-4">
            {[
              ["🎨", "Marketing graphics"],
              ["🎬", "Promotional videos"],
              ["📤", "Video uploads & posting"],
              ["🎧", "Audio & video creation"],
              ["🌐", "Website building"],
            ].map(([icon, label]) => (
              <div
                key={label}
                className="flex items-center gap-4 rounded-2xl bg-white/10 px-5 py-4 backdrop-blur"
              >
                <span className="text-2xl" aria-hidden>
                  {icon}
                </span>
                <span className="font-montserrat text-sm font-bold text-white">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
