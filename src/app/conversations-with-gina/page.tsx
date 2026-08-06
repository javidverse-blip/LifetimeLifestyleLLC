import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conversations with Gina",
  description:
    "The Conversations with Gina podcast — presented by Lifetime Lifestyle. Faith-filled conversations with companion resources for every episode.",
};

const episodes = [
  {
    title: "From Feeble to Fabulous: How This All Began",
    description:
      "Gina shares the story behind the name — and the diagnosis that started a mission.",
    companion: "Download the free Hidden in Plain Sight Discovery Guide",
    companionHref:
      "https://stan.store/Gnsing/p/free-7day-discovery-guide-hidden-in-plain-sight",
  },
  {
    title: "God's Healthy Laws: Mamma, Why Do People Get Sick?",
    description:
      "The eight natural laws that helped turn a pre-diabetes diagnosis around.",
    companion: "Explore God's Healthy Laws",
    companionHref:
      "https://www.amazon.com/Gods-Healthy-Laws-Mamma-People/dp/B0C9SLYKC4/ref=tmm_hrd_swatch_0",
  },
  {
    title: "The Water Reset That Changes Everything",
    description:
      "Why the simplest reset of all is the one we overlook the most.",
    companion: "Try the 5-Day Water Reset",
    companionHref: "https://stan.store/Gnsing/p/the-5day-water-reset",
  },
  {
    title: "Community Is the Cure",
    description:
      "Why you were never designed to fight your health battles alone.",
    companion: "Join the From Feeble to Fabulous Academy",
    companionHref:
      "https://www.skool.com/from-feeble-to-fabulous5187-4216/about",
  },
  {
    title: "Authors, Your Message Is a Book",
    description:
      "How publishing can turn your story into a platform that lasts.",
    companion: "Explore Publishing Services",
    companionHref: "/publishing",
  },
  {
    title: "Praise No Matter What Happens",
    description:
      "How a lifestyle of praise begins the process of healing.",
    companion: "Read Praise No Matter What Happens!",
    companionHref:
      "https://www.amazon.com/Praise-Matter-What-Happens-transforms/dp/B0BDW4Z2K1/ref=tmm_pap_swatch_0",
  },
];

export default function ConversationsWithGina() {
  return (
    <>
      <section className="bg-[var(--green)] px-5 py-16 text-center sm:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="font-montserrat text-sm font-bold uppercase tracking-[.22em] text-[var(--gold)]">
            Presented by Lifetime Lifestyle
          </p>
          <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            Conversations with Gina
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/80">
            The podcast that starts the conversation — faith, health, family,
            and the stories that change everything. Every episode comes with
            companion resources to go deeper.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://www.youtube.com/@Gina-lifestyle2024"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--gold)] px-8 py-4 font-montserrat text-base font-bold text-[var(--green)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-white"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
                <path d="M23 12s0-3.8-.5-5.6a3 3 0 0 0-2.1-2.1C18.6 3.8 12 3.8 12 3.8s-6.6 0-8.4.5A3 3 0 0 0 1.5 6.4C1 8.2 1 12 1 12s0 3.8.5 5.6a3 3 0 0 0 2.1 2.1c1.8.5 8.4.5 8.4.5s6.6 0 8.4-.5a3 3 0 0 0 2.1-2.1c.5-1.8.5-5.6.5-5.6ZM9.8 15.5v-7l6 3.5-6 3.5Z" />
              </svg>
              Watch on YouTube
            </a>
            <a
              href="https://www.instagram.com/lifetimelifestylellc/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-8 py-3.5 font-montserrat text-base font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:text-[var(--green)]"
            >
              Follow on Instagram
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-montserrat text-sm font-bold uppercase tracking-[.22em] text-[var(--teal)]">
              Episodes
            </p>
            <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight text-[var(--green)] sm:text-5xl">
              Start the conversation here.
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {episodes.map((episode) => (
              <article
                key={episode.title}
                className="flex flex-col rounded-[1.75rem] border border-black/5 bg-gradient-to-b from-[var(--mist)] to-white p-7 shadow-[0_10px_30px_-12px_rgba(20,134,145,0.14)] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--green)]">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="ml-0.5 h-5 w-5 text-white" aria-hidden>
                      <path d="M8 5.5v13l11-6.5-11-6.5Z" />
                    </svg>
                  </span>
                  <span className="rounded-full bg-[var(--teal)]/10 px-3 py-1 font-montserrat text-[11px] font-bold uppercase tracking-wider text-[var(--teal)]">
                    Podcast Episode
                  </span>
                </div>
                <h3 className="mt-5 font-display text-xl font-extrabold leading-snug text-[var(--green)]">
                  {episode.title}
                </h3>
                <p className="mt-3 flex-1 text-base leading-7 text-slate-600">
                  {episode.description}
                </p>
                <a
                  href={episode.companionHref}
                  target={
                    episode.companionHref.startsWith("http")
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    episode.companionHref.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="mt-6 inline-flex items-center gap-2 border-t border-black/5 pt-5 font-montserrat text-sm font-bold text-[var(--teal)] transition-colors hover:text-[var(--gold-deep)]"
                >
                  <span aria-hidden>🎁</span> {episode.companion}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 shrink-0" aria-hidden>
                    <path d="M5 12h14" />
                    <path d="m13 6 6 6-6 6" />
                  </svg>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--mist)] px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2rem] bg-[var(--green)] px-6 py-14 text-center shadow-[0_24px_60px_-20px_rgba(20,134,145,0.45)] sm:py-16">
            <h2 className="font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              Want to keep the conversation going?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-white/80">
              Join the From Feeble to Fabulous community where the podcast
              becomes a real conversation with real sisters.
            </p>
            <a
              href="https://www.skool.com/from-feeble-to-fabulous5187-4216/about"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--gold)] px-9 py-4 font-montserrat text-base font-bold text-[var(--green)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-white"
            >
              Join Our Community
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden>
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
