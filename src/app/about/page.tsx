import type { Metadata } from "next";
import Link from "next/link";
import { books, images } from "@/data/content";

export const metadata: Metadata = {
  title: "About Gina",
  description:
    "Gina Jenkins' story — the journey, the mission, and why Lifetime Lifestyle exists. Not a résumé. A story.",
};

const divisions = [
  {
    title: "Health",
    description:
      "Biblical health education, resets, and digital resources built on God's original design.",
    href: "/programs#health",
  },
  {
    title: "Family",
    description:
      "Resources that help families grow together — spiritually and physically.",
    href: "/programs#family",
  },
  {
    title: "Publishing",
    description:
      "Helping authors bring their books to life through design, publishing, coaching, and marketing.",
    href: "/publishing",
  },
  {
    title: "Community",
    description:
      "From Feeble to Fabulous, the podcast, free resources, and ongoing encouragement.",
    href: "/from-feeble-to-fabulous",
  },
];

const roles = [
  {
    icon: "✍️",
    title: "Author",
    description:
      "Books for adults and children on praise, healing, and God's Healthy Laws.",
    href: "/about#author",
  },
  {
    icon: "📚",
    title: "Publisher & coach",
    description:
      "Helping authors bring their messages to life through design, publishing, and marketing.",
    href: "/publishing",
  },
  {
    icon: "🎙️",
    title: "Podcast host",
    description:
      "Conversations with Gina — faith, health, family, and the stories that change everything.",
    href: "/conversations-with-gina",
  },
  {
    icon: "🌿",
    title: "Health educator",
    description:
      "Practical, biblical health teaching shaped by nearly fifteen years beside an Internal Medicine physician.",
    href: "/programs#health",
  },
  {
    icon: "🤝",
    title: "Community leader",
    description:
      "Leading From Feeble to Fabulous, a faith-based community for women breaking free from health cycles.",
    href: "/from-feeble-to-fabulous",
  },
];

export default function About() {
  const praise = books[0];
  const healthyLaws = books.slice(1, 4);
  const littleReaders = books.slice(4);

  return (
    <>
      <section className="bg-[var(--green)] px-5 py-16 text-center sm:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="font-montserrat text-sm font-bold uppercase tracking-[.22em] text-[var(--gold)]">
            About Gina
          </p>
          <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            From brokenness to a family legacy.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/80">
            You do not need a perfect past to leave a powerful future.
          </p>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[.85fr_1.15fr]">
          <div className="mx-auto w-full max-w-md">
            <div className="overflow-hidden rounded-[2rem] bg-[var(--mist)] p-3 shadow-[0_18px_45px_rgba(20,134,145,0.18)]">
              <img
                src={images.author}
                alt="Gina Jenkins, founder of Lifetime Lifestyle"
                className="aspect-[4/5] w-full rounded-[1.5rem] object-cover"
              />
            </div>
          </div>
          <div>
            <p className="font-montserrat text-sm font-bold uppercase tracking-[.22em] text-[var(--teal)]">
              Gina Jenkins · CEO & founder
            </p>
            <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight text-[var(--green)] sm:text-5xl">
              Forty years of carrying weight she was never meant to hold.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              For over 40 years, Gina carried the weight of trauma, addiction,
              and broken relationships. The past shaped how she saw herself, her
              story, and what she believed was possible.
            </p>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Then came a move to the countryside — growing food, exercising,
              and simplifying life. Slowly, she discovered the timeless platform
              of God&apos;s Healthy Laws. Those principles changed her body, her
              mind, and her faith.
            </p>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              When she began living a lifestyle of praise — anchored in trusting
              God — everything changed. Her mind found peace, her heart found
              courage, and her life found direction.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--mist)] px-5 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-stretch gap-12 lg:grid-cols-[1.15fr_.85fr]">
            <div>
              <p className="font-montserrat text-sm font-bold uppercase tracking-[.22em] text-[var(--teal)]">
                The foundation
              </p>
              <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight text-[var(--green)] sm:text-5xl">
                The phone call that changed everything.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                It began with a phone call no grandmother wants to receive: her
                great granddaughter had been diagnosed pre-diabetic.
              </p>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Instead of fear, that moment opened her eyes to God&apos;s
                original design for our health. The simple, biblical changes her
                great granddaughter made turned that diagnosis around — and
                proved that God&apos;s plan still works today.
              </p>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Nearly fifteen years working alongside an Internal Medicine
                physician shaped the practical, health-giving teaching that
                became Lifetime Lifestyle LLC. God&apos;s Healthy Laws is where
                it all begins.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center rounded-[2rem] bg-white p-8 text-center shadow-[0_18px_45px_rgba(20,134,145,0.18)] sm:p-12">
              <img
                src="/images/brand/new-logo.png"
                alt="Lifetime Lifestyle"
                className="mx-auto w-full max-w-[240px]"
              />
              <h3 className="mt-6 font-display text-3xl font-extrabold text-[var(--green)]">
                Lifetime Lifestyle LLC
              </h3>
              <p className="mt-4 text-base leading-7 text-slate-600">
                What began as one family&apos;s journey to health and healing has
                grown into a mission to help others discover the same freedom.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-montserrat text-sm font-bold uppercase tracking-[.22em] text-[var(--teal)]">
              What she does
            </p>
            <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight text-[var(--green)] sm:text-5xl">
              One mission, many ways in.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Gina&apos;s work spans health, publishing, media, and community —
              all under one roof, all pointing toward the same transformation.
            </p>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {roles.map((role) => (
              <Link
                key={role.title}
                href={role.href}
                className="group flex flex-col rounded-[1.5rem] border border-black/5 bg-gradient-to-b from-[var(--mist)] to-white p-7 shadow-[0_10px_30px_-12px_rgba(20,134,145,0.14)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_40px_-16px_rgba(20,134,145,0.28)]"
              >
                <span className="text-3xl" aria-hidden>
                  {role.icon}
                </span>
                <h3 className="mt-4 font-display text-2xl font-extrabold text-[var(--green)]">
                  {role.title}
                </h3>
                <p className="mt-3 flex-1 text-base leading-7 text-slate-600">
                  {role.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 font-montserrat text-sm font-bold text-[var(--teal)] group-hover:text-[var(--gold-deep)]">
                  Explore
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden>
                    <path d="M5 12h14" />
                    <path d="m13 6 6 6-6 6" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--mist)] px-5 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div className="rounded-[2rem] bg-white p-9">
            <p className="font-montserrat text-sm font-bold uppercase tracking-[.22em] text-[var(--teal)]">
              Mission
            </p>
            <h2 className="mt-3 font-display text-4xl font-extrabold leading-tight text-[var(--green)]">
              Helping families rise into transformation.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              To help families — no matter their starting point — discover how
              God&apos;s Healthy Laws can transform their lives and establish a
              family legacy of health and faith for generations to come.
            </p>
          </div>
          <div className="rounded-[2rem] bg-white p-9">
            <p className="font-montserrat text-sm font-bold uppercase tracking-[.22em] text-[var(--teal)]">
              Vision
            </p>
            <h2 className="mt-3 font-display text-4xl font-extrabold leading-tight text-[var(--green)]">
              Health and hope for generations.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              To see families around the world rise from imperfection into
              transformation, proving that God&apos;s plan can turn weakness into
              strength.
            </p>
          </div>
        </div>
      </section>

      <section id="author" className="bg-[var(--green)] px-5 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-montserrat text-sm font-bold uppercase tracking-[.22em] text-[var(--gold)]">
              Gina as an author
            </p>
            <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl">
              Transforming lives through praise — one book at a time.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/80">
              Her books help both adults and children discover healing,
              resilience, and faith — equipping families with simple,
              God-centered strategies to break free from the past and live with
              hope, health, and purpose.
            </p>
          </div>

          <article className="mt-14 grid overflow-hidden rounded-[2rem] bg-white shadow-[0_18px_45px_rgba(20,134,145,.18)] md:grid-cols-2">
            <div className="flex min-h-[370px] items-center justify-center bg-[var(--mist)] p-8 sm:p-14">
              <img src={praise.image} alt={praise.title} className="max-h-[390px] w-full object-contain" />
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-14">
              <p className="font-montserrat text-sm font-bold uppercase tracking-[.18em] text-[var(--teal)]">For adults</p>
              <h3 className="mt-4 font-display text-4xl font-extrabold leading-tight text-[var(--green)]">{praise.title}</h3>
              <p className="mt-6 text-lg leading-8 text-slate-700">{praise.description}</p>
              <a href={praise.href} target="_blank" rel="noreferrer" className="button mt-8 w-fit !bg-[var(--navy)] !text-white">Buy now <span className="ml-2">↗</span></a>
            </div>
          </article>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {healthyLaws.map((book) => (
              <article key={book.title} className="flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-white shadow-[0_16px_38px_rgba(0,0,0,.2)]">
                <div className="flex min-h-[290px] items-center justify-center bg-[var(--mist)] p-7">
                  <img src={book.image} alt={book.title} className="max-h-[300px] w-full object-contain" />
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <h3 className="font-display text-2xl font-extrabold leading-tight text-[var(--green)]">{book.title}</h3>
                  <p className="mt-4 flex-1 text-base leading-7 text-slate-600">{book.description}</p>
                  <a href={book.href} target="_blank" rel="noreferrer" className="button mt-6 w-fit !bg-[var(--yellow)] !text-[var(--ink)]">Buy now <span className="ml-2">↗</span></a>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {littleReaders.map((book) => (
              <article key={book.title} className="grid items-center gap-7 rounded-[1.75rem] bg-white p-6 shadow-[0_12px_30px_rgba(20,134,145,.12)] sm:grid-cols-[.8fr_1.2fr] sm:p-8">
                <div className="flex min-h-[220px] items-center justify-center">
                  <img src={book.image} alt={book.title} className="max-h-[250px] w-full object-contain" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-extrabold leading-tight text-[var(--green)]">{book.title}</h3>
                  <p className="mt-4 text-base leading-7 text-slate-600">{book.description}</p>
                  <a href={book.href} target="_blank" rel="noreferrer" className="button mt-6 w-fit !bg-[var(--navy)] !text-white">Buy now <span className="ml-2">↗</span></a>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 text-center">
            <a href="https://www.amazon.com/stores/author/B0B3KJ9V6J/allbooks" target="_blank" rel="noreferrer" className="button !bg-[var(--gold)] !text-[var(--ink)]">View all books <span className="ml-2">↗</span></a>
          </div>
        </div>
      </section>

      <section className="bg-[var(--mist)] px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-montserrat text-sm font-bold uppercase tracking-[.22em] text-[var(--teal)]">
              One roof, four divisions
            </p>
            <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight text-[var(--green)] sm:text-5xl">
              Lifetime Lifestyle grew into something bigger.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Not one business anymore — four divisions that all belong under one
              roof. Every part of the site leads naturally to another.
            </p>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {divisions.map((division) => (
              <Link
                key={division.title}
                href={division.href}
                className="group flex flex-col rounded-[1.5rem] bg-white p-7 text-[var(--ink)] shadow-[0_10px_30px_-12px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_40px_-16px_rgba(0,0,0,0.3)]"
              >
                <h3 className="font-display text-2xl font-extrabold text-[var(--green)]">
                  {division.title}
                </h3>
                <p className="mt-3 flex-1 text-base leading-7 text-slate-600">
                  {division.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 font-montserrat text-sm font-bold text-[var(--teal)] group-hover:text-[var(--gold-deep)]">
                  Explore
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden>
                    <path d="M5 12h14" />
                    <path d="m13 6 6 6-6 6" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
