import type { Metadata } from "next";
import { PublishingBrowser } from "@/components/publishing/PublishingBrowser";

export const metadata: Metadata = {
  title: "Publishing Services",
  description:
    "Book cover design, interior formatting, children's book publishing, Amazon and Kindle publishing, audiobook production, marketing graphics, and author coaching.",
};

const services = [
  {
    icon: "🎨",
    title: "Book Cover Design",
    description:
      "A cover that stops the scroll and sells the story before a single page is read.",
  },
  {
    icon: "📑",
    title: "Interior Formatting",
    description:
      "Professional, readable interiors that make your book feel premium in print and on Kindle.",
  },
  {
    icon: "🧸",
    title: "Children's Book Publishing",
    description:
      "From picture books to activity books — we help you bring children's stories to life with care.",
  },
  {
    icon: "📚",
    title: "Amazon & Kindle Publishing",
    description:
      "Correct setup, metadata, and listing help so your book is positioned to sell on Amazon.",
  },
  {
    icon: "🎧",
    title: "Audiobook Production",
    description:
      "Turn your book into an audiobook and reach readers who listen on the go.",
  },
  {
    icon: "🖼️",
    title: "Marketing Graphics",
    description:
      "Scroll-stopping graphics for your launch, ads, and every social post in between.",
  },
  {
    icon: "🎬",
    title: "Promotional Videos",
    description:
      "Short, shareable videos that turn your book's message into movement.",
  },
  {
    icon: "🗣️",
    title: "Author Coaching",
    description:
      "Personal guidance through finding your message, writing, publishing, and building your author brand.",
  },
  {
    icon: "🤝",
    title: "Publishing Consultations",
    description:
      "One focused conversation to map out your publishing plan and answer your questions.",
  },
];

const serviceGroups = [
  {
    icon: "🎨",
    title: "Design & Publish",
    items: [
      "Book Cover Design",
      "Interior Formatting",
      "Children's Book Publishing",
    ],
  },
  {
    icon: "📚",
    title: "Produce & Launch",
    items: [
      "Amazon & Kindle Publishing",
      "Audiobook Production",
      "Publishing Consultations",
    ],
  },
  {
    icon: "🚀",
    title: "Market & Coach",
    items: ["Marketing Graphics", "Promotional Videos", "Author Coaching"],
  },
];

const pillars = [
  {
    number: "01",
    title: "Find Your Message",
    description:
      "Uncover the message only you can share — the one that will move readers and open doors.",
  },
  {
    number: "02",
    title: "Write Your Book",
    description:
      "A clear, practical writing path that takes you from blank page to finished manuscript without overwhelm.",
  },
  {
    number: "03",
    title: "Design & Publish",
    description:
      "Professional covers, interiors, and correct setup for print, Kindle, and audio.",
  },
  {
    number: "04",
    title: "Market Your Book",
    description:
      "Launch strategy, graphics, videos, and a marketing plan that actually gets your book seen.",
  },
  {
    number: "05",
    title: "Build Digital Products",
    description:
      "Turn your book into a Living Truth Experience — journals, courses, trackers, and printables.",
  },
  {
    number: "06",
    title: "Build an Author Brand",
    description:
      "Create an author brand that lasts, so one book becomes a platform for a lifetime of impact.",
  },
];

const pillarGroups = [
  {
    icon: "✍️",
    title: "Write & Publish",
    items: ["Find Your Message", "Write Your Book", "Design & Publish"],
  },
  {
    icon: "📈",
    title: "Market & Brand",
    items: ["Market Your Book", "Build Digital Products", "Build an Author Brand"],
  },
];

export default function Publishing() {
  return (
    <>
      <section className="bg-[var(--green)] px-5 py-16 text-center sm:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="font-montserrat text-sm font-bold uppercase tracking-[.22em] text-[var(--gold)]">
            Lifetime Lifestyle · Publishing
          </p>
          <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            Your message deserves to be a book.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/80">
            We help authors bring their books to life through design,
            publishing, coaching, and marketing — from first idea to a book
            that builds a brand.
          </p>
        </div>
      </section>

      <PublishingBrowser
        services={services}
        serviceGroups={serviceGroups}
        pillars={pillars}
        pillarGroups={pillarGroups}
      />
    </>
  );
}
