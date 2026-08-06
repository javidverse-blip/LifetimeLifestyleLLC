"use client";
import { FormEvent, useState } from "react";

export function EmailSignup() {
  const [sent, setSent] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    await fetch("/api/subscribe", { method: "POST", body: new FormData(form) });
    setSent(true);
  }

  return (
    <section className="bg-[var(--mist)] px-5 py-20 sm:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-montserrat text-sm font-bold uppercase tracking-[.22em] text-[var(--teal)]">
          One offer. One signup.
        </p>
        <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight text-[var(--green)] sm:text-5xl">
          Start with the free Hidden in Plain Sight Discovery Guide.
        </h2>
        <p className="mt-5 text-lg leading-8 text-slate-600">
          Join the community and receive biblical discoveries, encouragement,
          and practical health truth — straight to your inbox.
        </p>

        {sent ? (
          <div className="mt-10 rounded-[1.5rem] bg-white p-10 shadow-[0_12px_32px_-12px_rgba(20,134,145,0.2)]">
            <p className="text-4xl" aria-hidden>✨</p>
            <h3 className="mt-4 font-display text-2xl font-extrabold text-[var(--green)]">
              Welcome! Check your inbox.
            </h3>
            <p className="mt-3 text-base leading-7 text-slate-600">
              Your discovery guide is on its way. We&apos;re so glad you&apos;re here.
            </p>
          </div>
        ) : (
          <form
            onSubmit={submit}
            className="mx-auto mt-10 flex max-w-lg flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              name="email"
              required
              placeholder="Your email address"
              aria-label="Email address"
              className="flex-1 rounded-full border border-black/10 bg-white px-6 py-4 text-base outline-none transition focus:border-[var(--teal)] focus:ring-2 focus:ring-[var(--teal)]/30"
            />
            <button
              type="submit"
              className="rounded-full bg-[var(--teal)] px-8 py-4 font-montserrat text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--gold)] hover:text-[var(--green)]"
            >
              Send My Free Guide
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
