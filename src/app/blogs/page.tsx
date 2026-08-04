import { PageIntro } from "@/components/PageIntro";

export default function Blogs() {
  return <>
    <PageIntro eyebrow="Blogs" title="A little encouragement for your journey.">Stories, tips, and faith-based insights to help you and your family live healthier, happier, and more intentional lives.</PageIntro>

    <section className="bg-white px-5 py-20 text-[var(--ink)] sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_1fr]">
        <div className="max-w-xl">
          <p className="font-montserrat text-sm font-bold uppercase tracking-[.22em] text-[#05698e]">From the blog</p>
          <h2 className="mt-5 font-display text-4xl font-extrabold leading-tight text-[var(--ink)] sm:text-5xl">Practical encouragement for everyday life.</h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">Find stories, tips, and faith-based insights to help you and your family live healthier, happier, and more intentional lives. Every resource is created to offer hope, simple next steps, and encouragement for the journey.</p>
        </div>
        <div className="rounded-[2rem] bg-[#e8f4f7] p-4 shadow-[0_20px_50px_rgba(3,105,142,.14)] sm:p-6"><img src="/images/blogs/blogs-image.jpeg" alt="Lifetime Lifestyle blog resources" className="aspect-[4/3] w-full rounded-[1.5rem] object-cover" /></div>
      </div>
    </section>

    <section className="bg-[#e8f4f7] px-5 py-20 text-[var(--ink)] sm:py-28"><div className="mx-auto max-w-4xl rounded-[2rem] bg-white px-7 py-14 text-center shadow-[0_15px_40px_rgba(3,105,142,.12)]"><p className="font-montserrat text-sm font-bold uppercase tracking-[.22em] text-[#05698e]">Keep growing</p><h2 className="mt-4 font-display text-4xl font-extrabold leading-tight text-[var(--ink)] sm:text-5xl">Healthy families are built together.</h2><p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">Live webinars and workshops that blend biblical principles with real-life strategies.</p></div></section>
  </>;
}
