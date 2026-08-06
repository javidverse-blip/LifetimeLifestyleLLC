import Link from "next/link";

const pathways = [
  {
    href: "/programs#health",
    title: "I Want Better Health",
    description:
      "Discover health programs, resets, and biblical health education for every season of life.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7" aria-hidden>
        <path d="M12 21s-7-4.6-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.4-7 10-7 10Z" />
      </svg>
    ),
    accent: "bg-[var(--teal)] hover:bg-[var(--green)]",
  },
  {
    href: "/publishing",
    title: "I Want to Publish My Books",
    description:
      "Bring your book to life with design, publishing, coaching, and marketing that helps your message reach the world.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7" aria-hidden>
        <path d="M12 3v18" />
        <path d="M12 7a4 4 0 0 1 4-4h4v14h-4a4 4 0 0 0-4 4V7Z" />
        <path d="M12 7a4 4 0 0 0-4-4H4v14h4a4 4 0 0 1 4 4V7Z" />
      </svg>
    ),
    accent: "bg-[var(--gold-deep)] hover:bg-[var(--green)]",
  },
  {
    href: "/from-feeble-to-fabulous",
    title: "Join Our Community",
    description:
      "From Feeble to Fabulous — a faith-based community where you'll find support, encouragement, and sisters who get it.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7" aria-hidden>
        <circle cx="9" cy="8" r="3.5" />
        <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
        <circle cx="17" cy="9" r="2.5" />
        <path d="M16 14.5a4.5 4.5 0 0 1 4.5 4.5" />
      </svg>
    ),
    accent: "bg-[var(--green)] hover:bg-[var(--teal)]",
  },
];

export function Pathways() {
  return (
    <section className="bg-white px-5 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-5 md:grid-cols-3">
          {pathways.map((pathway) => (
            <Link
              key={pathway.href}
              href={pathway.href}
              className="group flex flex-col rounded-[1.75rem] border border-black/5 bg-gradient-to-b from-[var(--mist)] to-white p-7 shadow-[0_10px_30px_-12px_rgba(20,134,145,0.18)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_45px_-18px_rgba(20,134,145,0.3)]"
            >
              <span
                className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl text-white transition-colors duration-300 ${pathway.accent}`}
              >
                {pathway.icon}
              </span>
              <h3 className="mt-6 font-display text-2xl font-extrabold leading-tight text-[var(--green)]">
                {pathway.title}
              </h3>
              <p className="mt-3 flex-1 text-base leading-7 text-slate-600">
                {pathway.description}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 font-montserrat text-sm font-bold text-[var(--teal)] transition-colors group-hover:text-[var(--gold-deep)]">
                Get started
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
  );
}
