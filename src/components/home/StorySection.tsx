import Link from "next/link";

export function StorySection() {
  return (
    <section className="bg-[var(--mist)] px-5 py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[.9fr_1.1fr]">
        <div className="mx-auto w-full max-w-md">
          <div className="overflow-hidden rounded-[2rem] bg-white p-3 shadow-[0_18px_45px_rgba(20,134,145,0.18)]">
            <img
              src="https://us-ms.gr-cdn.com/getresponse-IXfrT/photos/558153d4-d531-4739-9d30-6ee0686c12fa.jpeg"
              alt="Gina Jenkins, CEO and founder of Lifetime Lifestyle"
              className="aspect-[4/5] w-full rounded-[1.5rem] object-cover"
            />
          </div>
        </div>
        <div className="max-w-2xl">
          <p className="font-montserrat text-sm font-bold uppercase tracking-[.22em] text-[var(--teal)]">
            Gina Jenkins · CEO & founder
          </p>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight text-[var(--green)] sm:text-5xl">
            Our family story became our mission.
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            A great-grandmother, a pre-diabetes diagnosis, and a discovery that
            changed everything — God&apos;s Healthy Laws turned a diagnosis
            around and became the heartbeat of a mission.
          </p>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Nearly fifteen years working alongside an Internal Medicine
            physician shaped the practical, health-giving teaching that became
            Lifetime Lifestyle. No complicated protocols — just God&apos;s
            original design for the body, practiced one faithful day at a time.
          </p>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Today that mission reaches families through health education,
            publishing, books, and a community that believes transformation is
            possible for everyone.
          </p>
          <Link
            href="/about"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--gold)] px-7 py-3.5 font-montserrat text-sm font-bold text-[var(--green)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--green)] hover:text-white"
          >
            Read My Full Story
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden>
              <path d="M5 12h14" />
              <path d="m13 6 6 6-6 6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
