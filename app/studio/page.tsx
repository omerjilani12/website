import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo-full.png";
import { Container, Eyebrow, SectionHead } from "@/components/ui";
import { CtaBand, ProcessList, TrustStrip } from "@/components/sections";
import { img } from "@/lib/images";
import { studio } from "@/lib/site";

export const metadata: Metadata = {
  title: "Studio",
  description: `${studio.architect}, ${studio.credential}. A multidisciplinary architecture studio in Gulberg, Islamabad. Architecture, interiors, approvals and construction under one roof.`,
  alternates: { canonical: "/studio" },
};

const principles = [
  {
    n: "01",
    t: "Climate first, then form",
    b: "Orientation, openings and cross-ventilation are settled before the elevation is drawn. A building that works with the climate costs less to run every year it stands, and that saving is the most durable thing we can design into it.",
  },
  {
    n: "02",
    t: "Space is the budget",
    b: "Intelligent planning buys more than expensive finishes do. We would rather recover a quarter of a floor plate from a dead corridor than specify imported stone to distract from it.",
  },
  {
    n: "03",
    t: "One accountable party",
    b: "The studio that drew the building takes it through construction. There is no gap between the drawing and the site for responsibility to fall into.",
  },
  {
    n: "04",
    t: "Built to last",
    b: "Materials are chosen for how they age in this climate, not how they photograph on the day of handover. Sustainability begins with a building nobody has to replace.",
  },
];

export default function StudioPage() {
  return (
    <>
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <Eyebrow>The studio</Eyebrow>
              <h1 className="mt-6 max-w-[18ch] font-display text-[clamp(34px,5.6vw,66px)] leading-[1.04] font-light tracking-[-0.02em] text-ink">
                Where design finds direction.
              </h1>
              <p className="mt-8 max-w-[60ch] text-[18.5px] leading-relaxed text-ink/85">
                {studio.intro}
              </p>
              <p className="mt-6 max-w-[60ch] text-[17.5px] leading-relaxed text-stone">
                Great design is where creativity, functionality and
                sustainability meet. Our work focuses on intelligent space
                planning, sustainable building, and climate-responsive
                architecture: maximising natural light, passive
                ventilation and the efficient use of every square foot, so the
                buildings we make are comfortable, cheap to run, and built to
                last.
              </p>
            </div>

            <div className="flex items-start justify-center lg:col-span-4 lg:col-start-9">
              <Image
                src={logo}
                alt={`${studio.name} logo`}
                placeholder="blur"
                sizes="(max-width: 1024px) 220px, 300px"
                className="h-auto w-[220px] lg:w-[300px]"
              />
            </div>
          </div>
        </Container>
      </section>

      <TrustStrip />

      {/* ── The architect ────────────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-12 md:grid-cols-12 md:gap-14">
            <div className="rise md:col-span-5">
              <div className="overflow-hidden bg-bone-3">
                {/* TODO: replace with a photograph of Omer Jilani */}
                <Image
                  src={img.timber}
                  alt="Warm timber detailing in raking light"
                  placeholder="blur"
                  sizes="(max-width: 768px) 100vw, 480px"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
              <div className="mt-5 border-t border-rule pt-4">
                <p className="font-display text-[20px] text-ink">
                  {studio.architect}
                </p>
                <p className="spec mt-1.5 text-[11.5px] text-sage">
                  Architect &middot; {studio.credential}
                </p>
              </div>
            </div>

            <div className="rise flex flex-col justify-center md:col-span-7">
              <h2 className="font-display text-[clamp(26px,3.6vw,42px)] leading-[1.1] font-light text-ink">
                One architect, from the first sketch to the last snag.
              </h2>
              <p className="mt-7 max-w-[58ch] text-[17.5px] leading-relaxed text-stone">
                {studio.architect} is an architect registered with the Pakistan
                Council of Architects and Town Planners. He founded Vector
                Design Atelier to practise the way he believes architecture
                works best: one architect, accountable across design,
                approvals and construction, rather than a project passed between
                departments.
              </p>
              <p className="mt-5 max-w-[58ch] text-[17.5px] leading-relaxed text-stone">
                In practice that means the person who visits your plot is the
                person who draws it, submits it, and stands on the site while it
                goes up. The studio works on residences, commercial interiors
                and renovation across Islamabad and Rawalpindi.
              </p>
              <p className="mt-5 max-w-[58ch] text-[17.5px] leading-relaxed text-stone">
                Registration matters for a practical reason as well as a
                professional one: drawings prepared by a PCATP-registered
                architect are recognised by CDA, RDA and the housing societies,
                which is what timely approval turns on.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Principles ───────────────────────────────────────────────── */}
      <section className="border-t border-rule py-20 md:py-28">
        <Container>
          <SectionHead
            number="01"
            title="How we think about a building"
            note="Four positions that decide most of what happens on a Vector project."
          />
          <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2">
            {principles.map((p) => (
              <div key={p.n} className="rise border-t-2 border-sage pt-5">
                <span className="spec text-[11.5px] text-sage">{p.n}</span>
                <h3 className="mt-3 font-display text-[21px] leading-snug font-normal text-ink">
                  {p.t}
                </h3>
                <p className="mt-3 max-w-[46ch] text-[16.5px] leading-relaxed text-stone">
                  {p.b}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Process ──────────────────────────────────────────────────── */}
      <section className="border-t border-rule py-20 md:py-28">
        <Container>
          <SectionHead
            number="02"
            title="How a project runs"
            note="Five stages, in order, so you always know where you are."
          />
          <ProcessList />
          <Link
            href="/services"
            className="link-underline mt-10 inline-block font-display text-[15px] tracking-[0.04em] text-sage"
          >
            See what each service includes &rarr;
          </Link>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
