export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-[var(--mist)] to-[var(--teal-light)]">
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full bg-[var(--gold)]/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-40 -left-32 h-[420px] w-[420px] rounded-full bg-[var(--teal)]/10 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:py-24 lg:px-8">
        <div className="grid items-stretch gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div className="flex max-w-2xl flex-col justify-center">
            <p className="inline-flex items-center gap-2.5 rounded-full border border-[var(--teal)]/30 bg-white/70 px-4 py-1.5 font-montserrat text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--teal)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)]" aria-hidden />
              A Digital Ministry Campus
            </p>
            <h1 className="mt-6 font-display font-extrabold tracking-tight text-[var(--green)]">
              <span className="block text-balance text-4xl leading-[1.08] sm:text-5xl lg:text-[3.1rem]">
                Helping Families, Authors, and Individuals
              </span>
              <span className="relative mt-2 block w-fit text-4xl leading-[1.08] text-[var(--gold)] sm:text-5xl lg:text-[3.1rem]">
                Transform Their Lives
                <span
                  className="absolute -bottom-2 left-0 h-1.5 w-4/5 rounded-full bg-[var(--gold)]"
                  aria-hidden
                />
              </span>
              <span className="mt-2 block text-balance text-2xl font-bold leading-snug text-[var(--teal)] sm:text-3xl lg:text-[1.9rem]">
                Through Biblical Health, Publishing, and Education.
              </span>
            </h1>
            <div className="mt-8 h-px w-24 bg-[var(--gold)]" aria-hidden />
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              A digital ministry campus where every story, every resource, and
              every experience is designed to help you grow — body, mind, and
              spirit.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                { label: "Health", href: "/programs#health" },
                { label: "Publishing", href: "/publishing" },
                { label: "Community", href: "/from-feeble-to-fabulous" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="inline-flex items-center gap-2.5 rounded-full border border-[var(--teal)]/30 bg-white/70 px-4 py-2 font-montserrat text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--teal)] transition-colors hover:bg-white hover:text-[var(--green)]"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)]" aria-hidden />
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="mx-auto flex w-full max-w-lg items-center lg:ml-auto">
            <div className="rounded-[2rem] bg-white/60 p-6 shadow-[0_24px_60px_-20px_rgba(20,134,145,0.3)] backdrop-blur sm:p-8">
              <img
                src="/images/brand/new-logo.png"
                alt="Lifetime Lifestyle"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
