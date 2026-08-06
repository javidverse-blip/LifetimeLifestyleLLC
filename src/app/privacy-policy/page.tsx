import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Lifetime Lifestyle LLC collects, uses, and protects your information.",
};

export default function PrivacyPolicy() {
  return (
    <>
      <PageIntro eyebrow="Legal" title="Privacy Policy">
        How Lifetime Lifestyle LLC collects, uses, and protects your
        information.
      </PageIntro>
      <section className="bg-white px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl space-y-10 text-base leading-8 text-slate-600">
          <div>
            <h2 className="font-display text-2xl font-extrabold text-[var(--green)]">
              Information we collect
            </h2>
            <p className="mt-3">
              We collect information you provide directly — such as your name
              and email address when you sign up for our newsletter, contact
              us, or download free resources. We also collect limited
              information automatically, such as basic analytics about how
              visitors use our site.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-extrabold text-[var(--green)]">
              How we use your information
            </h2>
            <p className="mt-3">
              We use your information to deliver the resources and content you
              request, send you emails you&apos;ve signed up for, respond to
              your questions, and improve our website and offerings. We do not
              sell your personal information.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-extrabold text-[var(--green)]">
              Email & marketing
            </h2>
            <p className="mt-3">
              When you join our email list, we may send you content, offers,
              and updates. You can unsubscribe at any time using the link in
              any email we send. Our email marketing is managed through
              third-party providers who handle your data only to deliver our
              messages.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-extrabold text-[var(--green)]">
              Third-party services
            </h2>
            <p className="mt-3">
              Purchases and program delivery are handled by Stan Store, and our
              community lives on Skool. These services have their own privacy
              policies, and your purchases are governed by their terms. We are
              not responsible for the practices of third-party sites.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-extrabold text-[var(--green)]">
              Cookies
            </h2>
            <p className="mt-3">
              We may use cookies and similar technologies to remember
              preferences and understand how visitors use the site. You can
              disable cookies in your browser settings, though some site
              features may not work as well.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-extrabold text-[var(--green)]">
              Your rights
            </h2>
            <p className="mt-3">
              You may request access to, correction of, or deletion of your
              personal information at any time by contacting us at
              lifetimelifestylellc@gmail.com.
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
