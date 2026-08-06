import Link from "next/link";

const divisions = [
  {
    title: "Health",
    links: [
      { label: "Health Programs", href: "/programs#health" },
      { label: "All Programs", href: "/programs" },
      { label: "Books", href: "/publishing#books" },
    ],
  },
  {
    title: "Family",
    links: [
      { label: "Family Programs", href: "/programs#family" },
      { label: "Healing & Spiritual Growth", href: "/programs#healing" },
      { label: "Books for Little Readers", href: "/publishing#books" },
    ],
  },
  {
    title: "Publishing",
    links: [
      { label: "Publishing Services", href: "/publishing" },
      { label: "Publishing Academy", href: "/publishing#academy" },
      { label: "Marketing Subscription", href: "/marketing-subscription" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "From Feeble to Fabulous", href: "/from-feeble-to-fabulous" },
      { label: "Conversations with Gina", href: "/conversations-with-gina" },
      { label: "Watch & Listen", href: "/watch-and-listen" },
    ],
  },
];

const siteLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Publishing", href: "/publishing" },
  { label: "Programs", href: "/programs" },
  { label: "Community", href: "/from-feeble-to-fabulous" },
  { label: "Watch & Listen", href: "/watch-and-listen" },
];

export function Footer() {
  return (
    <footer className="bg-[var(--green)] px-5 py-16 text-white">
      <div className="container">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {divisions.map((division) => (
            <div key={division.title}>
              <p className="font-montserrat text-sm font-bold uppercase tracking-[0.18em] text-[var(--gold)]">
                {division.title}
              </p>
              <div className="mt-4 grid gap-3 text-sm text-white/80">
                {division.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="w-fit hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-10 border-t border-white/10 pt-10 lg:grid-cols-3">
          <div className="text-center lg:text-left">
            <p className="font-display text-2xl font-extrabold text-white">
              Lifetime Lifestyle
            </p>
            <p className="mt-3 max-w-md text-sm leading-7 text-white/70">
              A digital ministry campus for biblical health, family growth,
              publishing, and community — all under one roof.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-8">
            <div className="flex flex-col items-center gap-3 lg:items-start">
              {siteLinks.slice(0, 3).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="w-fit font-montserrat text-sm font-bold text-white/80 transition-colors hover:text-[var(--gold)]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col items-center gap-3 lg:items-start">
              {siteLinks.slice(3).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="w-fit font-montserrat text-sm font-bold text-white/80 transition-colors hover:text-[var(--gold)]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="col-span-2 mt-6 flex justify-center gap-3 lg:justify-start">
              <a
                href="mailto:lifetimelifestylellc@gmail.com"
                aria-label="Email us"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-[var(--gold)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:text-[var(--green)]"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden>
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-10 6L2 7" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/lifetimelifestylellc/"
                target="_blank"
                rel="noreferrer"
                aria-label="Follow us on Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-[var(--gold)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:text-[var(--green)]"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
                  <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.2 2.3.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1.1.4 2.3.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.9-.4 2.3-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1.1.4-2.3.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.2-2.3-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1.1-.4-2.3-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.2.2-1.9.4-2.3.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1.1-.4 2.3-.4 1.3-.1 1.7-.1 4.9-.1zM12 0C8.7 0 8.3 0 7 .1 5.7.2 4.9.3 4.1.6 3.3.9 2.6 1.3 2 1.9 1.4 2.6 1 3.2.7 4 .3 4.8.2 5.7.1 7 .1 8.3 0 8.7 0 12s0 3.7.1 5c.1 1.3.2 2.2.6 3 .3.8.7 1.5 1.3 2.1.6.6 1.3 1 2.1 1.3.8.3 1.7.4 3 .6 1.3.1 1.7.1 5 .1s3.7 0 5-.1c1.3-.1 2.2-.2 3-.6.8-.3 1.5-.7 2.1-1.3.6-.6 1-1.3 1.3-2.1.3-.8.4-1.7.6-3 .1-1.3.1-1.7.1-5s0-3.7-.1-5c-.1-1.3-.2-2.2-.6-3-.3-.8-.7-1.5-1.3-2.1-.6-.6-1.3-1-2.1-1.3-.8-.3-1.7-.4-3-.6C15.7 0 15.3 0 12 0z" />
                  <path d="M12 5.8a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4zm0 10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
                  <circle cx="18.4" cy="5.6" r="1.4" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/MyLifetimeLifestyle/"
                target="_blank"
                rel="noreferrer"
                aria-label="Follow us on Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-[var(--gold)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:text-[var(--green)]"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
                  <path d="M24 12a12 12 0 1 0-13.9 11.9v-8.4h-3V12h3V9.4c0-3 1.8-4.7 4.5-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 .9-2 1.9V12h3.3l-.5 3.5h-2.8v8.4A12 12 0 0 0 24 12z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="text-center lg:text-left">
            <p className="font-montserrat text-sm font-bold uppercase tracking-[0.18em] text-[var(--gold)]">
              Connect
            </p>
            <p className="mt-3 max-w-lg text-sm leading-7 text-white/80">
              Have a question or want to partner with the ministry? We&apos;d
              love to hear from you.
            </p>
            <div className="mt-4 flex items-center gap-3 text-sm text-white/80">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 shrink-0 text-[var(--gold)]"
                aria-hidden
              >
                <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
              </svg>
              <a
                href="tel:+19186589557"
                className="w-fit hover:text-[var(--gold)]"
              >
                +1 918-658-9557
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Lifetime Lifestyle LLC. All Rights Reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms
            </Link>
            <Link href="/contact" className="hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
