import type { Metadata } from "next";
import { MediaBrowser } from "@/components/media/MediaBrowser";

export const metadata: Metadata = {
  title: "Watch & Listen",
  description:
    "Short videos, audio messages, podcast episodes, and articles — sorted by category and designed to point you into the Living Truth Experience they belong to.",
};

export default function WatchAndListen() {
  return (
    <>
      <section className="bg-[var(--green)] px-5 py-16 text-center sm:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="font-montserrat text-sm font-bold uppercase tracking-[.22em] text-[var(--gold)]">
            Media Center
          </p>
          <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            Watch & Listen
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/80">
            Short videos, audio messages, and articles that teach one practical
            thing — then point you to the Living Truth Experience it belongs
            to.
          </p>
        </div>
      </section>

      <MediaBrowser />

      <section className="bg-[var(--mist)] px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-4xl" aria-hidden>🎙️</p>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-[var(--green)] sm:text-4xl">
            Love listening? Meet the podcast.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-slate-600">
            Conversations with Gina — presented by Lifetime Lifestyle — with
            companion resources for every episode.
          </p>
          <a
            href="/conversations-with-gina"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--teal)] px-8 py-4 font-montserrat text-base font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--gold)] hover:text-[var(--green)]"
          >
            Go to the Podcast
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden>
              <path d="M5 12h14" />
              <path d="m13 6 6 6-6 6" />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}
