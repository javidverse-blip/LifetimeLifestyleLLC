"use client";
import { useEffect, useState } from "react";

type PublishingTab = "services" | "academy" | "books";

const TAB_ORDER: PublishingTab[] = ["services", "academy", "books"];

const TAB_CARDS: {
  id: PublishingTab;
  icon: string;
  label: string;
  blurb: string;
}[] = [
  {
    id: "services",
    icon: "🛠️",
    label: "Services",
    blurb:
      "Every service your book needs — from cover and interior to publishing, marketing, and coaching.",
  },
  {
    id: "academy",
    icon: "🎓",
    label: "Academy",
    blurb:
      "Six pillars. One complete author journey — find your message and build an author brand that lasts.",
  },
  {
    id: "books",
    icon: "📚",
    label: "Books",
    blurb:
      "Books published by Gina Jenkins — stories that plant seeds of health and hope in every reader.",
  },
];

const WHO_ITS_FOR: [string, string, string][] = [
  [
    "✨",
    "First-time authors",
    "You have a message burning inside you and a book waiting to be written.",
  ],
  [
    "📚",
    "Published authors",
    "You have books out but want to grow them into a real author brand.",
  ],
  [
    "💡",
    "Ministry & business leaders",
    "You want to turn your teaching and experience into books that extend your reach.",
  ],
];

const ACADEMY_STEPS = [
  "Find your message",
  "Write your book",
  "Design & publish",
  "Market like a pro",
  "Build digital products",
  "Create a lasting author brand",
];

const BOOK_PLACEHOLDERS = [
  {
    title: "Book Title One",
    description:
      "Your book's story will live here. Add the cover image, title, and description when your book is ready.",
  },
  {
    title: "Book Title Two",
    description:
      "Your book's story will live here. Add the cover image, title, and description when your book is ready.",
  },
  {
    title: "Book Title Three",
    description:
      "Your book's story will live here. Add the cover image, title, and description when your book is ready.",
  },
];

const ChevronRight = (
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
);

interface Service {
  icon: string;
  title: string;
  description: string;
}

interface ServiceGroup {
  icon: string;
  title: string;
  items: string[];
}

interface Pillar {
  number: string;
  title: string;
  description: string;
}

interface PillarGroup {
  icon: string;
  title: string;
  items: string[];
}

export function PublishingBrowser({
  services,
  serviceGroups,
  pillars,
  pillarGroups,
}: {
  services: Service[];
  serviceGroups: ServiceGroup[];
  pillars: Pillar[];
  pillarGroups: PillarGroup[];
}) {
  const [active, setActive] = useState<PublishingTab>("services");

  useEffect(() => {
    const readHash = () => {
      const id = window.location.hash.replace("#", "");
      if (id === "services" || id === "academy" || id === "books") {
        setActive(id);
      }
    };
    readHash();
    window.addEventListener("hashchange", readHash);
    return () => window.removeEventListener("hashchange", readHash);
  }, []);

  const select = (tab: PublishingTab) => {
    setActive(tab);
    window.location.hash = tab;
  };

  const nextTab =
    TAB_ORDER[(TAB_ORDER.indexOf(active) + 1) % TAB_ORDER.length];

  const browseNext = () => {
    select(nextTab);
    document.getElementById("browse")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section id="browse" className="scroll-mt-20 bg-[var(--mist)]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 font-montserrat text-xs font-bold uppercase tracking-[0.2em] text-[var(--teal)]">
              What we do
            </p>
            <h2 className="text-balance text-3xl font-extrabold tracking-tight text-[var(--green)] sm:text-4xl">
              Every service your book needs.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              Whether you need one service or the whole journey, we&apos;ll walk
              with you from manuscript to marketplace.
            </p>
          </div>
          <div className="-mx-4 mt-12 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-2 sm:-mx-6 sm:px-6 md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0 md:pb-0">
            {TAB_CARDS.map((tab) => {
              const isActive = active === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => select(tab.id)}
                  aria-pressed={isActive}
                  className={`group flex min-w-[13rem] snap-start flex-col rounded-2xl border p-4 text-left shadow-[0_10px_30px_-12px_rgba(20,134,145,0.25)] transition-all duration-300 hover:-translate-y-1.5 md:min-w-0 md:rounded-[1.75rem] md:p-8 ${
                    isActive
                      ? "border-[var(--teal)] bg-[var(--green)] text-white shadow-[0_22px_45px_-18px_rgba(20,134,145,0.55)]"
                      : "border-black/5 bg-white text-[var(--green)] hover:bg-white hover:shadow-[0_18px_40px_-16px_rgba(20,134,145,0.35)]"
                  }`}
                >
                  <span className="text-2xl md:text-4xl" aria-hidden>
                    {tab.icon}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-extrabold leading-tight md:mt-5 md:text-2xl">
                    {tab.label}
                  </h3>
                  <p
                    className={`mt-2 line-clamp-3 text-xs leading-5 md:mt-3 md:line-clamp-none md:flex-1 md:text-base md:leading-7 ${
                      isActive ? "text-white/80" : "text-slate-600"
                    }`}
                  >
                    {tab.blurb}
                  </p>
                  <span
                    className={`mt-4 inline-flex items-center gap-2 font-montserrat text-xs font-bold transition-colors md:mt-6 md:text-sm ${
                      isActive
                        ? "text-[var(--gold)] group-hover:text-white"
                        : "text-[var(--teal)] group-hover:text-[var(--gold-deep)]"
                    }`}
                  >
                    {ChevronRight}
                  </span>
                </button>
              );
            })}
          </div>
          <p className="mt-3 text-center text-xs font-semibold text-[var(--teal)] md:hidden">
            Swipe to explore all paths
          </p>
        </div>
      </section>

      {active === "services" && (
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div>
              <div className="mx-auto max-w-3xl text-center">
                <p className="font-montserrat text-xs font-bold uppercase tracking-[0.2em] text-[var(--teal)]">
                  Publishing services
                </p>
                <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight text-[var(--green)] sm:text-5xl">
                  Everything your book needs.
                </h2>
              </div>
              <div className="mt-14 grid gap-6">
                {serviceGroups.map((group) => (
                  <div
                    key={group.title}
                    className="rounded-[1.5rem] border border-black/5 bg-gradient-to-b from-[var(--mist)] to-white p-8 shadow-[0_10px_30px_-12px_rgba(20,134,145,0.14)] sm:p-9"
                  >
                    <div className="flex items-center gap-4">
                      <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--teal)]/10 text-3xl">
                        {group.icon}
                      </span>
                      <h3 className="font-display text-2xl font-extrabold leading-tight text-[var(--green)]">
                        {group.title}
                      </h3>
                    </div>
                    <div className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
                      {group.items.map((title) => {
                        const service = services.find(
                          (s) => s.title === title
                        );
                        if (!service) return null;
                        return (
                          <div key={service.title}>
                            <p className="font-montserrat text-sm font-bold text-[var(--teal)]">
                              {service.icon} {service.title}
                            </p>
                            <p className="mt-2 text-sm leading-6 text-slate-600">
                              {service.description}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-20 grid gap-6 md:grid-cols-3">
                {WHO_ITS_FOR.map(([icon, title, description]) => (
                  <div
                    key={title}
                    className="rounded-[1.5rem] bg-[var(--mist)] p-8 text-center shadow-[0_12px_32px_-12px_rgba(20,134,145,0.18)]"
                  >
                    <span className="text-4xl" aria-hidden>
                      {icon}
                    </span>
                    <h3 className="mt-5 font-display text-xl font-extrabold leading-tight text-[var(--green)]">
                      {title}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-slate-600">
                      {description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-20 grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
                <div>
                  <p className="font-montserrat text-sm font-bold uppercase tracking-[.22em] text-[var(--teal)]">
                    What authors say
                  </p>
                  <blockquote className="mt-6">
                    <p className="text-xl leading-9 text-slate-600">
                      &ldquo;Gina saw a message in my story that I didn&apos;t
                      even see myself. She walked me through every step until my
                      book was in the world — and people were reading
                      it.&rdquo;
                    </p>
                    <footer className="mt-6 font-montserrat text-sm font-bold text-[var(--gold-deep)]">
                      — A Lifetime Lifestyle author
                    </footer>
                  </blockquote>
                </div>
                <div className="rounded-[2rem] bg-[var(--green)] p-8 text-white shadow-[0_24px_60px_-20px_rgba(20,134,145,0.45)] sm:p-12">
                  <p className="font-montserrat text-sm font-bold uppercase tracking-[.22em] text-[var(--gold)]">
                    Your story could be next
                  </p>
                  <h3 className="mt-4 font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl">
                    Let&apos;s talk about your book.
                  </h3>
                  <p className="mt-5 text-lg leading-8 text-white/80">
                    Bring us your manuscript — or just your idea — and let&apos;s
                    talk about what it can become.
                  </p>
                  <a
                    href="mailto:lifetimelifestylellc@gmail.com"
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--gold)] px-7 py-3.5 font-montserrat text-sm font-bold text-[var(--green)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:text-[var(--green)]"
                  >
                    Book a Publishing Consultation
                    {ChevronRight}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {active === "academy" && (
        <>
          <section className="bg-white">
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
              <div>
                <div className="mx-auto max-w-3xl text-center">
                  <p className="font-montserrat text-xs font-bold uppercase tracking-[0.2em] text-[var(--teal)]">
                    The Publishing Academy
                  </p>
                  <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight text-[var(--green)] sm:text-5xl">
                    Six pillars. One complete author journey.
                  </h2>
                  <p className="mt-5 text-lg leading-8 text-slate-600">
                    The Academy teaches you how to find your message, write
                    your book, publish it well, market it, build digital
                    products around it, and create an author brand that lasts.
                  </p>
                </div>
                <div className="mt-14 grid gap-6">
                  {pillarGroups.map((group) => (
                    <div
                      key={group.title}
                      className="rounded-[1.5rem] border border-black/5 bg-gradient-to-b from-[var(--mist)] to-white p-8 shadow-[0_10px_30px_-12px_rgba(20,134,145,0.14)] sm:p-9"
                    >
                      <div className="flex items-center gap-4">
                        <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--teal)]/10 text-3xl">
                          {group.icon}
                        </span>
                        <h3 className="font-display text-2xl font-extrabold leading-tight text-[var(--green)]">
                          {group.title}
                        </h3>
                      </div>
                      <div className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
                        {group.items.map((title) => {
                          const pillar = pillars.find(
                            (p) => p.title === title
                          );
                          if (!pillar) return null;
                          return (
                            <div key={pillar.title}>
                              <p className="font-montserrat text-sm font-bold text-[var(--teal)]">
                                {pillar.number} · {pillar.title}
                              </p>
                              <p className="mt-2 text-sm leading-6 text-slate-600">
                                {pillar.description}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="bg-[var(--mist)]">
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
              <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
                <div>
                  <p className="font-montserrat text-sm font-bold uppercase tracking-[.22em] text-[var(--teal)]">
                    The Publishing Academy
                  </p>
                  <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight text-[var(--green)] sm:text-5xl">
                    Learn to publish — and keep publishing.
                  </h2>
                  <p className="mt-5 text-lg leading-8 text-slate-600">
                    Whether you&apos;re a first-time author or ready to build
                    on your existing books, the Academy walks you through every
                    step.
                  </p>
                  <a
                    href="mailto:lifetimelifestylellc@gmail.com"
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--gold)] px-8 py-4 font-montserrat text-base font-bold text-[var(--green)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--green)] hover:text-white"
                  >
                    Ask About the Academy
                    {ChevronRight}
                  </a>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {ACADEMY_STEPS.map((step) => (
                    <div
                      key={step}
                      className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-[0_6px_20px_-10px_rgba(20,134,145,0.25)]"
                    >
                      <span className="text-[var(--teal)]">✓</span>
                      <span className="font-montserrat text-sm font-bold text-[var(--green)]">
                        {step}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {active === "books" && (
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div>
              <div className="mx-auto max-w-3xl text-center">
                <p className="font-montserrat text-xs font-bold uppercase tracking-[0.2em] text-[var(--teal)]">
                  Books by Gina Jenkins
                </p>
                <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight text-[var(--green)] sm:text-5xl">
                  Published books.
                </h2>
                <p className="mt-5 text-lg leading-8 text-slate-600">
                  Stories that plant seeds of health and hope — coming soon.
                </p>
              </div>
              <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {BOOK_PLACEHOLDERS.map((book) => (
                  <div
                    key={book.title}
                    className="overflow-hidden rounded-[1.5rem] border border-black/5 bg-white shadow-[0_10px_30px_-12px_rgba(20,134,145,0.14)]"
                  >
                    <div className="flex aspect-[4/5] items-center justify-center bg-gradient-to-b from-[var(--mist)] to-[var(--teal)]/10">
                      <div className="text-center">
                        <span className="text-6xl" aria-hidden>
                          📖
                        </span>
                        <p className="mt-4 font-montserrat text-xs font-bold uppercase tracking-[0.2em] text-[var(--teal)]">
                          Cover coming soon
                        </p>
                      </div>
                    </div>
                    <div className="p-7">
                      <h3 className="font-display text-xl font-extrabold leading-tight text-[var(--green)]">
                        {book.title}
                      </h3>
                      <p className="mt-3 text-base leading-7 text-slate-600">
                        {book.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <div className="bg-white py-16">
        <div className="flex justify-center">
          <button
            type="button"
            onClick={browseNext}
            className="inline-flex items-center gap-2 rounded-full bg-[var(--gold)] px-9 py-4 font-accent text-base font-bold text-[var(--green)] shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--green)] hover:text-white"
          >
            Browse {TAB_CARDS.find((t) => t.id === nextTab)?.label}
            {ChevronRight}
          </button>
        </div>
      </div>
    </>
  );
}
