export function PageBanner({ eyebrow, title, children }: { eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section className="flex min-h-[280px] items-center bg-[var(--green)] px-5 py-14 text-center">
      <div className="mx-auto max-w-3xl">
        <p className="font-montserrat text-sm font-bold uppercase tracking-[.22em] text-[var(--gold)]">{eyebrow}</p>
        <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">{title}</h1>
        <p className="mx-auto mt-5 max-w-2xl font-body text-lg leading-8 text-white/80">{children}</p>
      </div>
    </section>
  );
}
