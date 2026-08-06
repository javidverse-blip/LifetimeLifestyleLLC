import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "From Feeble to Fabulous",
  description:
    "A faith-based community for women ready to break free from health cycles. Biblical answers, real support, and sisters who get it — together.",
};

const benefits = [
  {
    icon: "🛡️",
    title: "A safe place to be honest",
    description:
      "No pretending to be perfect. No hiding. Just real people supporting one another.",
  },
  {
    icon: "📖",
    title: "Biblical answers",
    description:
      "God's 8 Laws of Health, practically applied — not just trends that come and go.",
  },
  {
    icon: "🎥",
    title: "Videos & webinars",
    description:
      "Ongoing teaching and live sessions that keep you inspired and equipped.",
  },
  {
    icon: "🤝",
    title: "Accountability that lasts",
    description:
      "You were never designed to fight this alone — and you don't have to here.",
  },
  {
    icon: "💗",
    title: "Encouragement on repeat",
    description:
      "A community that reminds you you can get back up — every single time.",
  },
  {
    icon: "🚀",
    title: "Momentum that builds",
    description:
      "Program graduates stay connected and keep growing, instead of starting over alone.",
  },
];

export default function FromFeebleToFabulous() {
  return (
    <>
      <section className="bg-[var(--green)] px-5 py-16 text-center sm:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="font-montserrat text-sm font-bold uppercase tracking-[.22em] text-[var(--gold)]">
            Lifetime Lifestyle · Community
          </p>
          <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            From Feeble to Fabulous
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/80">
            A faith-based community for women who are done starting over again
            and again in the same health cycles. We find biblical answers —
            and we do it together.
          </p>
          <a
            href="https://www.skool.com/from-feeble-to-fabulous5187-4216/about"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-[var(--gold)] px-9 py-4 font-montserrat text-base font-bold text-[var(--green)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-white"
          >
            Join the Community
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden>
              <path d="M5 12h14" />
              <path d="m13 6 6 6-6 6" />
            </svg>
          </a>
          <p className="mt-4 text-sm text-white/60">Free to get started · Accessible on any phone</p>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="font-montserrat text-sm font-bold uppercase tracking-[.22em] text-[var(--teal)]">
                Who it&apos;s for
              </p>
              <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight text-[var(--green)] sm:text-5xl">
                For women stuck in the same cycles.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                You know the story — start, quit, start again. The exhaustion,
                the guilt, the feeling of starting over alone. This community
                exists so you never have to do that again.
              </p>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Why does it exist? Because community is the cure. Two are
                better than one — for if they fall, the one will lift up his
                fellow. (Ecclesiastes 4:9–10 KJV)
              </p>
            </div>
            <div className="rounded-[2rem] bg-[var(--mist)] p-6 sm:p-10">
              <img
                src="/images/programs/feeble-to-fabulous.jpg"
                alt="From Feeble to Fabulous community"
                className="w-full rounded-[1.5rem] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--mist)] px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-montserrat text-sm font-bold uppercase tracking-[.22em] text-[var(--teal)]">
              What you gain
            </p>
            <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight text-[var(--green)] sm:text-5xl">
              Everything you need to keep going.
            </h2>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-[1.5rem] bg-white p-7 shadow-[0_10px_30px_-12px_rgba(20,134,145,0.14)]"
              >
                <span className="text-4xl" aria-hidden>
                  {benefit.icon}
                </span>
                <h3 className="mt-5 font-display text-xl font-extrabold leading-tight text-[var(--green)]">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-slate-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <p className="font-montserrat text-sm font-bold uppercase tracking-[.22em] text-[var(--teal)]">
                Challenges & coaching
              </p>
              <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight text-[var(--green)] sm:text-5xl">
                More than a group. A way forward.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Inside the community you&apos;ll find ongoing inspiration,
                video teachings, and webinars — plus the challenges that help
                you actually apply what you learn.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  [
                    "Challenges",
                    "Structured resets like the 5-Day Water Reset and 3-Day Sugar Reset, walked through together.",
                  ],
                  [
                    "Coaching & webinars",
                    "Live teaching and practical coaching rooted in God's 8 Laws of Health.",
                  ],
                  [
                    "Included free with programs",
                    "Purchases like the resets include your free invitation into the community.",
                  ],
                ].map(([title, body]) => (
                  <div
                    key={title}
                    className="flex gap-4 rounded-2xl bg-[var(--mist)] p-5"
                  >
                    <span className="mt-1 text-[var(--gold-deep)]">✓</span>
                    <div>
                      <h3 className="font-montserrat text-base font-bold text-[var(--green)]">
                        {title}
                      </h3>
                      <p className="mt-1 text-base leading-7 text-slate-600">
                        {body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[2rem] bg-[var(--green)] p-8 text-white shadow-[0_24px_60px_-20px_rgba(20,134,145,0.45)] sm:p-12">
              <p className="font-montserrat text-sm font-bold uppercase tracking-[.22em] text-[var(--gold)]">
                From our members
              </p>
              <blockquote className="mt-6">
                <p className="text-xl leading-9 text-white/90">
                  &ldquo;For the first time I&apos;m not doing this alone. The
                  community reminds me I can get back up — every single
                  time.&rdquo;
                </p>
                <footer className="mt-6 font-montserrat text-sm font-bold text-[var(--gold)]">
                  — An Academy member
                </footer>
              </blockquote>
              <blockquote className="mt-8 border-t border-white/10 pt-8">
                <p className="text-xl leading-9 text-white/90">
                  &ldquo;Biblical answers, real sisters, and grace when I fall.
                  This community changed how I see my health journey.&rdquo;
                </p>
                <footer className="mt-6 font-montserrat text-sm font-bold text-[var(--gold)]">
                  — An Academy member
                </footer>
              </blockquote>
              <a
                href="https://www.skool.com/from-feeble-to-fabulous5187-4216/about"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-9 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--gold)] px-8 py-4 font-montserrat text-base font-bold text-[var(--green)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-white"
              >
                Get Started Free
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden>
                  <path d="M5 12h14" />
                  <path d="m13 6 6 6-6 6" />
                </svg>
              </a>
              <p className="mt-3 text-center text-sm text-white/60">
                Free to join · Powered by Skool
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
