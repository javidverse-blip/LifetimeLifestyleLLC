import { PageIntro } from "@/components/PageIntro";
import { books, images } from "@/data/content";

export default function Books() {
  const praise = books[0];
  const healthyLaws = books.slice(1, 4);
  const littleReaders = books.slice(4);

  return (
    <div className="bg-[var(--navy)] text-white">
      <PageIntro eyebrow="Books" title="Books that bring families closer.">Our books spark understanding, inspire change, and make healthy living feel simple, joyful, and full of faith.</PageIntro>

      <section className="bg-white px-5 py-20 text-black sm:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="font-montserrat text-sm font-bold uppercase tracking-[.22em] text-[var(--blue)]">Featured title</p>
          <article className="mt-8 grid overflow-hidden rounded-[2rem] bg-[#e8f4f7] shadow-[0_18px_45px_rgba(3,105,142,.18)] md:grid-cols-2">
            <div className="flex min-h-[370px] items-center justify-center p-8 sm:p-14"><img src={praise.image} alt={praise.title} className="max-h-[390px] w-full object-contain" /></div>
            <div className="flex flex-col justify-center p-8 sm:p-14"><p className="font-montserrat text-sm font-bold uppercase tracking-[.18em] text-[var(--blue)]">For adults</p><h2 className="serif mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">{praise.title}</h2><p className="mt-6 text-lg leading-8 text-slate-700">This powerful resource offers faith-filled encouragement for adults, showing how praising God can begin the process of transforming childhood trauma into resilience, health, and healing—in less than one hour.</p><div className="mt-6 flex flex-wrap gap-2">{praise.details.map((detail) => <span key={detail} className="rounded-full bg-white px-4 py-2 font-montserrat text-sm font-bold text-slate-700">{detail}</span>)}</div><a href={praise.href} target="_blank" rel="noreferrer" className="button mt-8 w-fit !bg-[var(--navy)] !text-white">Buy now <span className="ml-2">↗</span></a></div>
          </article>
        </div>
      </section>

      <section className="bg-[var(--navy)] px-5 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center"><p className="font-montserrat text-sm font-bold uppercase tracking-[.22em] text-[var(--yellow)]">Featured collection</p><h2 className="serif mt-4 text-5xl font-extrabold leading-tight text-white sm:text-6xl">God’s Healthy Laws Collection</h2><p className="mt-5 text-lg leading-8 text-white/75">Simple secrets to help children and families grow strong, healthy, and full of faith.</p></div>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {healthyLaws.map((book) => <article key={book.title} className="flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-white text-[var(--ink)] shadow-[0_16px_38px_rgba(0,0,0,.2)]"><div className="flex min-h-[290px] items-center justify-center bg-[#e8f4f7] p-7"><img src={book.image} alt={book.title} className="max-h-[300px] w-full object-contain" /></div><div className="flex flex-1 flex-col p-8"><h3 className="serif text-3xl font-extrabold leading-tight">{book.title}</h3><p className="mt-5 text-lg font-bold leading-8 text-[var(--blue)]">{book.title.includes("Tracker") ? "Give your child the tools to grow strong—inside and out!" : book.title.includes("Leyes") ? "Leyes sanas de Dios (Spanish Edition)" : "Help your child discover the simple secrets to staying healthy!"}</p><p className="mt-4 flex-1 text-base leading-7 text-slate-600">{book.description}</p><p className="mt-6 font-montserrat text-sm font-bold text-slate-700">Available in {book.details.join(", ").toLowerCase()}.</p><a href={book.href} target="_blank" rel="noreferrer" className="button mt-7 w-fit !bg-[var(--yellow)] !text-[var(--ink)]">Buy now <span className="ml-2">↗</span></a></div></article>)}
          </div>
        </div>
      </section>

      <section className="bg-[#e8f4f7] px-5 py-20 text-[var(--ink)] sm:py-28"><div className="mx-auto max-w-7xl"><div className="mx-auto max-w-3xl text-center"><p className="font-montserrat text-sm font-bold uppercase tracking-[.22em] text-[var(--blue)]">More for little readers</p><h2 className="serif mt-4 text-5xl font-extrabold leading-tight">Healthy habits made joyful.</h2></div><div className="mt-12 grid gap-6 lg:grid-cols-2">{littleReaders.map((book) => <article key={book.title} className="grid items-center gap-7 rounded-[1.75rem] bg-white p-6 shadow-[0_12px_30px_rgba(3,105,142,.12)] sm:grid-cols-[.8fr_1.2fr] sm:p-8"><div className="flex min-h-[220px] items-center justify-center"><img src={book.image} alt={book.title} className="max-h-[250px] w-full object-contain" /></div><div><h3 className="serif text-3xl font-extrabold leading-tight">{book.title}</h3><p className="mt-4 text-base leading-7 text-slate-600">{book.description}</p><a href={book.href} target="_blank" rel="noreferrer" className="button mt-6 w-fit !bg-[var(--navy)] !text-white">Buy now <span className="ml-2">↗</span></a></div></article>)}</div></div></section>

      <section className="bg-white px-5 py-20 text-[var(--ink)] sm:py-28"><div className="mx-auto grid max-w-7xl items-center gap-12 rounded-[2rem] bg-[var(--navy)] p-8 text-white sm:p-12 lg:grid-cols-[.65fr_1.35fr] lg:p-16"><img src={images.author} alt="Gina Jenkins" className="mx-auto aspect-square w-full max-w-[280px] rounded-full border-8 border-white/20 object-cover" /><div><p className="font-montserrat text-sm font-bold uppercase tracking-[.22em] text-[var(--yellow)]">About the author</p><h2 className="serif mt-4 text-4xl font-extrabold leading-tight text-white sm:text-5xl">Gina Jenkins: Transforming Lives Through Praise</h2><p className="mt-6 text-lg leading-8 text-white/80">For over 40 years, Gina carried the weight of trauma, addiction, and broken relationships. But when she discovered the power of living a lifestyle of praise—anchored in trusting God—everything changed. Her mind found peace, her heart found courage, and her life found direction. Now, through her books, Gina helps both adults and children discover healing, resilience, and faith. Her mission is to equip families with simple, God-centered strategies to break free from the past and live with hope, health, and purpose.</p><a href="https://www.amazon.com/stores/author/B0B3KJ9V6J/allbooks" target="_blank" rel="noreferrer" className="button mt-8 !bg-[var(--yellow)] !text-[var(--ink)]">View all books <span className="ml-2">↗</span></a></div></div></section>
    </div>
  );
}
