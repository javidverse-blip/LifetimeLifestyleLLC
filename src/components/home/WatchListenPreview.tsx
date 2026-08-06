import Link from "next/link";

export function WatchListenPreview() {
  return (
    <section className="bg-[var(--mist)] px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-montserrat text-sm font-bold uppercase tracking-[.22em] text-[var(--teal)]">
            Watch & Listen
          </p>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight text-[var(--green)] sm:text-5xl">
            Start the conversation with a short video or podcast.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Short teachings that share one practical truth — and point you
            deeper into the Living Truth Experience it belongs to.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Link
            href="/watch-and-listen"
            className="group flex flex-col overflow-hidden rounded-[1.75rem] bg-white shadow-[0_12px_32px_-12px_rgba(20,134,145,0.2)] transition-all duration-300 hover:-translate-y-1.5"
          >
            <div className="relative aspect-[16/9] bg-gradient-to-br from-[var(--teal)] to-[var(--green)]">
              <div className="flex h-full items-center justify-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur transition-transform duration-300 group-hover:scale-110">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="ml-1 h-7 w-7 text-white" aria-hidden>
                    <path d="M8 5.5v13l11-6.5-11-6.5Z" />
                  </svg>
                </span>
              </div>
              <span className="absolute left-5 top-5 rounded-full bg-[var(--gold)] px-3 py-1 font-montserrat text-[11px] font-bold uppercase tracking-wider text-[var(--green)]">
                Newest Video
              </span>
            </div>
            <div className="flex flex-1 flex-col p-7">
              <h3 className="font-display text-xl font-extrabold leading-snug text-[var(--green)]">
                Watch the latest teaching
              </h3>
              <p className="mt-3 flex-1 text-base leading-7 text-slate-600">
                Short videos that teach one practical thing and open the door to
                deeper learning.
              </p>
              <span className="mt-5 inline-flex items-center gap-2 font-montserrat text-sm font-bold text-[var(--teal)] group-hover:text-[var(--gold-deep)]">
                Go to Watch & Listen
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden>
                  <path d="M5 12h14" />
                  <path d="m13 6 6 6-6 6" />
                </svg>
              </span>
            </div>
          </Link>

          <Link
            href="/conversations-with-gina"
            className="group flex flex-col overflow-hidden rounded-[1.75rem] bg-white shadow-[0_12px_32px_-12px_rgba(20,134,145,0.2)] transition-all duration-300 hover:-translate-y-1.5"
          >
            <div className="relative aspect-[16/9] bg-gradient-to-br from-[var(--gold-deep)] to-[var(--gold)]">
              <div className="flex h-full items-center justify-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/25 backdrop-blur transition-transform duration-300 group-hover:scale-110">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7 text-white" aria-hidden>
                    <path d="M12 3a6 6 0 0 0-4 10.5V17a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-3.5A6 6 0 0 0 12 3Zm-4.5 17.5h9v-1h-9v1Z" />
                  </svg>
                </span>
              </div>
              <span className="absolute left-5 top-5 rounded-full bg-[var(--green)] px-3 py-1 font-montserrat text-[11px] font-bold uppercase tracking-wider text-white">
                Newest Podcast Episode
              </span>
            </div>
            <div className="flex flex-1 flex-col p-7">
              <h3 className="font-display text-xl font-extrabold leading-snug text-[var(--green)]">
                Conversations with Gina
              </h3>
              <p className="mt-3 flex-1 text-base leading-7 text-slate-600">
                The podcast that starts the conversation — with companion
                resources for every episode. Presented by Lifetime Lifestyle.
              </p>
              <span className="mt-5 inline-flex items-center gap-2 font-montserrat text-sm font-bold text-[var(--teal)] group-hover:text-[var(--gold-deep)]">
                Listen to the Podcast
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden>
                  <path d="M5 12h14" />
                  <path d="m13 6 6 6-6 6" />
                </svg>
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
