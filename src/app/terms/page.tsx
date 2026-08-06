import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "The terms and conditions for using the Lifetime Lifestyle LLC website.",
};

export default function Terms() {
  return (
    <>
      <PageIntro eyebrow="Legal" title="Terms of Use">
        The terms that govern your use of the Lifetime Lifestyle LLC website
        and services.
      </PageIntro>
      <section className="bg-white px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl space-y-10 text-base leading-8 text-slate-600">
          <div>
            <h2 className="font-display text-2xl font-extrabold text-[var(--green)]">
              Acceptance of terms
            </h2>
            <p className="mt-3">
              By accessing or using this website, you agree to be bound by
              these Terms of Use. If you do not agree, please do not use the
              site.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-extrabold text-[var(--green)]">
              Educational content
            </h2>
            <p className="mt-3">
              The content on this site — including books, programs,
              experiences, videos, and articles — is provided for educational
              and informational purposes only. It is not medical advice, and it
              is not a substitute for professional medical diagnosis or
              treatment. Always consult your healthcare provider before making
              significant changes to your health habits, especially if you
              manage a medical condition or take medication.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-extrabold text-[var(--green)]">
              Purchases & delivery
            </h2>
            <p className="mt-3">
              Purchases are processed and delivered through Stan Store, which
              provides the secure checkout and digital delivery for our
              products. By purchasing, you agree to Stan Store&apos;s terms as
              well. Community membership is provided through Skool and is
              governed by its terms.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-extrabold text-[var(--green)]">
              Intellectual property
            </h2>
            <p className="mt-3">
              All content on this website — including text, books, graphics,
              logos, audio, video, and resources — is the property of Lifetime
              Lifestyle LLC or its licensors and is protected by copyright and
              other intellectual property laws. You may not reproduce,
              distribute, or create derivative works without written permission.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-extrabold text-[var(--green)]">
              Limitation of liability
            </h2>
            <p className="mt-3">
              Lifetime Lifestyle LLC provides this website and its content
              &ldquo;as is&rdquo; without warranties of any kind. To the
              fullest extent permitted by law, we are not liable for any
              damages arising from your use of the site, its content, or the
              products and services offered.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-extrabold text-[var(--green)]">
              Changes to these terms
            </h2>
            <p className="mt-3">
              We may update these Terms of Use from time to time. Continued use
              of the site after changes are posted constitutes acceptance of
              the updated terms.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-extrabold text-[var(--green)]">
              Contact us
            </h2>
            <p className="mt-3">
              Lifetime Lifestyle LLC<br />
              Email: lifetimelifestylellc@gmail.com<br />
              Phone: +1 918-658-9557
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
