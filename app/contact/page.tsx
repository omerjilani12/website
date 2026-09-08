import type { Metadata } from "next";
import { Container, Eyebrow } from "@/components/ui";
import { Faq } from "@/components/sections";
import ContactForm from "@/components/ContactForm";
import { studio, whatsappHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Talk to ${studio.architect} about a project in Islamabad or Rawalpindi. ${studio.phone} · ${studio.email} · Gulberg Trade Center, Islamabad.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Eyebrow>Contact</Eyebrow>
              <h1 className="mt-6 max-w-[16ch] font-display text-[clamp(34px,5.6vw,66px)] leading-[1.04] font-light tracking-[-0.02em] text-ink">
                Tell us about the plot.
              </h1>
              <p className="mt-7 max-w-[56ch] text-[17.5px] leading-relaxed text-stone">
                Send a location and a rough idea of what you want. We will tell
                you honestly whether we are the right studio for it, and what it is
                likely to cost, before anyone signs anything.
              </p>

              <div className="mt-12">
                <ContactForm />
              </div>
            </div>

            <aside className="lg:col-span-4 lg:col-start-9">
              <div className="border-t border-ink/25 pt-6">
                <h2 className="eyebrow text-stone-2">Studio</h2>
                <address className="mt-4 text-[17px] leading-relaxed text-ink not-italic">
                  {studio.address.line1}
                  <br />
                  {studio.address.line2}
                  <br />
                  {studio.address.city}, {studio.address.country}
                </address>
              </div>

              <div className="mt-10 border-t border-rule pt-6">
                <h2 className="eyebrow text-stone-2">Direct</h2>
                <ul className="mt-4 flex flex-col gap-3">
                  <li>
                    <a
                      href={whatsappHref(
                        "Hello, I'd like to talk about a project in Islamabad.",
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline spec text-[14px] text-ink"
                    >
                      WhatsApp {studio.phone}
                    </a>
                  </li>
                  <li>
                    <a
                      href={`tel:${studio.phoneRaw}`}
                      className="link-underline spec text-[14px] text-ink"
                    >
                      Call {studio.phone}
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${studio.email}`}
                      className="link-underline text-[16px] text-ink"
                    >
                      {studio.email}
                    </a>
                  </li>
                </ul>
              </div>

              <div className="mt-10 border-t border-rule pt-6">
                <h2 className="eyebrow text-stone-2">Follow</h2>
                <ul className="mt-4 flex flex-col gap-2">
                  <li>
                    <a
                      href={studio.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline text-[16px] text-ink"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href={studio.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline text-[16px] text-ink"
                    >
                      Facebook
                    </a>
                  </li>
                </ul>
              </div>

              <div className="mt-10 border-t border-rule pt-6">
                <h2 className="eyebrow text-stone-2">Practice</h2>
                <p className="mt-4 text-[16px] leading-relaxed text-stone">
                  {studio.architect}, {studio.credential}
                  <br />
                  {studio.credentialFull}.
                </p>
                <p className="mt-4 text-[16px] leading-relaxed text-stone">
                  Working across Islamabad and Rawalpindi: CDA, DHA,
                  Bahria Town and Gulberg Greens.
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <section className="border-t border-rule py-16 md:py-24">
        <Container>
          <h2 className="font-display text-[clamp(24px,3.2vw,36px)] font-light text-ink">
            Before you write
          </h2>
          <Faq />
        </Container>
      </section>
    </>
  );
}
