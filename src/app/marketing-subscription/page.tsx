import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Marketing Subscription",
  description:
    "A simple monthly plan where we handle your marketing and technical needs — ad graphics, video uploads, audio and video creation, and website building — so you can keep creating.",
};

const included = [
  {
    icon: "🎨",
    title: "Ad & Marketing Graphics",
    description:
      "Scroll-stopping graphics for ads and social media, created and delivered on your schedule.",
  },
  {
    icon: "📤",
    title: "Video Uploads & Posting",
    description:
      "We upload your videos, format them correctly, and keep your channels posting consistently.",
  },
  {
    icon: "🎧",
    title: "Audio & Video Creation",
    description:
      "We turn your content into polished audio and video pieces your audience will love.",
  },
  {
    icon: "🌐",
    title: "Website Building & Maintenance",
    description:
      "We build, update, and maintain your website and related technical needs — no puzzles, no code.",
  },
  {
    icon: "📱",
    title: "Social Media Support",
    description:
      "Ongoing help keeping your social presence active, consistent, and growing.",
  },
  {
    icon: "📈",
    title: "Ongoing Marketing Support",
    description:
      "A partner who handles the technical side so you can focus on the content only you can create.",
  },
];

export default function MarketingSubscription() {
  return (
    <>
      <section className="bg-[var(--green)] px-5 py-16 text-center sm:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="font-montserrat text-sm font-bold uppercase tracking-[.22em] text-[var(--gold)]">
            Lifetime Lifestyle · Marketing
          </p>
          <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            A team behind your message — for less than you think.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/80">
            One simple monthly subscription where we handle the technical side
            of your marketing and web presence, so you can keep doing what you
            do best: creating.
          </p>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-montserrat text-sm font-bold uppercase tracking-[.22em] text-[var(--teal)]">
              What&apos;s included
            </p>
            <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight text-[var(--green)] sm:text-5xl">
              Everything handled, every month.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              No hourly billing surprises. No learning curve. No building
              puzzles. Just consistent, professional support.
            </p>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {included.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.5rem] border border-black/5 bg-gradient-to-b from-[var(--mist)] to-white p-7 shadow-[0_10px_30px_-12px_rgba(20,134,145,0.14)]"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--teal)]/10 text-2xl">
                  {item.icon}
                </span>
                <h3 className="mt-5 font-display text-xl font-extrabold leading-tight text-[var(--green)]">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--mist)] px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <p className="font-montserrat text-sm font-bold uppercase tracking-[.22em] text-[var(--teal)]">
                Who it&apos;s for
              </p>
              <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight text-[var(--green)] sm:text-5xl">
                For creators, authors, and ministries ready to grow.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                You create the books, audio, videos, graphics, and digital
                products. We handle the uploading, maintaining, supporting, and
                technical work behind your social media, website, and marketing.
              </p>
              <ul className="mt-8 grid gap-3">
                {[
                  "Authors building an audience around their books",
                  "Ministries that need consistent online presence",
                  "Coaches and educators with content to share",
                  "Anyone who would rather create than manage pixels",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-xl bg-white px-4 py-3"
                  >
                    <span className="mt-0.5 text-[var(--gold-deep)]">✓</span>
                    <span className="text-base leading-7 text-slate-700">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="overflow-hidden rounded-[2rem] bg-[var(--green)] text-white shadow-[0_24px_60px_-20px_rgba(20,134,145,0.45)]">
              <div className="p-8 sm:p-10">
                <p className="font-montserrat text-sm font-bold uppercase tracking-[.22em] text-[var(--gold)]">
                  How it works
                </p>
                <h3 className="mt-5 font-display text-3xl font-extrabold leading-tight">
                  One monthly plan. Real support.
                </h3>
                <div className="mt-8 space-y-6">
                  {[
                    {
                      step: "1",
                      title: "Tell us what you need",
                      body: "A quick conversation about your goals, channels, and content.",
                    },
                    {
                      step: "2",
                      title: "We build your plan",
                      body: "Your custom monthly scope — graphics, uploads, posting, and web work.",
                    },
                    {
                      step: "3",
                      title: "You create, we handle the rest",
                      body: "Send content our way. We keep everything running and growing.",
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--gold)] font-montserrat text-sm font-bold text-[var(--green)]">
                        {item.step}
                      </span>
                      <div>
                        <h4 className="font-montserrat text-base font-bold">
                          {item.title}
                        </h4>
                        <p className="mt-1 text-sm leading-6 text-white/75">
                          {item.body}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-9 border-t border-white/10 pt-7">
                  <p className="text-sm text-white/70">
                    Plans start at{" "}
                    <span className="font-display text-3xl font-extrabold text-[var(--gold)]">
                      $200/mo
                    </span>{" "}
                    and grow with your needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2rem] bg-[var(--green)] px-6 py-14 text-center shadow-[0_24px_60px_-20px_rgba(20,134,145,0.45)] sm:py-16">
            <h2 className="font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              Let&apos;s build your plan together.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-white/80">
              Tell us where you are and where you want to go. We&apos;ll put
              together a subscription that fits.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--gold)] px-9 py-4 font-montserrat text-base font-bold text-[var(--green)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-white"
            >
              Get Started
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden>
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
