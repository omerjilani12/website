import type { Metadata } from "next";
import { Container, Eyebrow, SectionHead } from "@/components/ui";
import {
  CostTable,
  CtaBand,
  Faq,
  ProcessList,
  ServiceGrid,
  TrustStrip,
} from "@/components/sections";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Architectural design, interior design, CDA planning and approvals, construction, and renovation in Islamabad. What you receive under each, what it costs, and how long it takes.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="py-16 md:py-24">
        <Container>
          <Eyebrow>Services</Eyebrow>
          <h1 className="mt-6 max-w-[20ch] font-display text-[clamp(34px,5.6vw,66px)] leading-[1.05] font-light tracking-[-0.02em] text-ink">
            Everything from the first site visit to the last snag.
          </h1>
          <p className="mt-7 max-w-[60ch] text-[17.5px] leading-relaxed text-stone">
            You can hire the studio for design alone, or for design and
            construction together. Most clients choose the second, because it
            removes the argument about who is responsible when something on site
            does not match the drawing.
          </p>
        </Container>
      </section>

      <TrustStrip />

      <section className="py-16 md:py-24">
        <Container>
          <ServiceGrid detailed />
        </Container>
      </section>

      <section className="border-t border-rule py-20 md:py-28">
        <Container>
          <SectionHead
            number="01"
            title="How a project runs"
            note="Five stages, in order. You know what happens at each one, what you receive, and roughly how long it takes."
          />
          <ProcessList />
        </Container>
      </section>

      <section className="border-t border-rule bg-bone-2 py-20 md:py-28">
        <Container>
          <SectionHead
            number="02"
            title="What it costs. Before you ask."
            note="You should not have to make a phone call to find out roughly what you are getting into."
          />
          <CostTable />
        </Container>
      </section>

      <section className="border-t border-rule py-20 md:py-28">
        <Container>
          <SectionHead number="03" title="Questions we get asked" />
          <Faq />
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
