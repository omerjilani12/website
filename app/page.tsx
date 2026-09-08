import Image from "next/image";
import Link from "next/link";
import { Button, Container, Eyebrow, SectionHead } from "@/components/ui";
import {
  CostTable,
  CtaBand,
  Faq,
  ProcessList,
  ProjectCard,
  ServiceGrid,
  TrustStrip,
} from "@/components/sections";
import { img } from "@/lib/images";
import { projects } from "@/lib/projects";
import { studio, whatsappHref } from "@/lib/site";

export default function Home() {
  const featured = projects.slice(0, 3);

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      {/* Header is 64px + 1px rule on mobile, 74px + 1px from md up. Subtracting
          the border too means the hero ends exactly at the fold, with nothing
          of the next section peeking below it. */}
      <section className="relative isolate flex h-[calc(100dvh-65px)] min-h-[520px] flex-col justify-end overflow-hidden md:h-[calc(100dvh-75px)]">
        <Image
          src={img.hero}
          alt="A modern house at dusk, its interiors lit warm behind full-height glazing"
          placeholder="blur"
          priority
          fill
          sizes="100vw"
          className="hero-zoom -z-10 object-cover"
        />
        {/* Two light scrims. The image is already dark at the edges, so these
            only need to settle the type, not rescue it. */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/85 via-ink/35 to-ink/30" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/55 via-ink/15 to-transparent" />

        <Container className="pb-12 md:pb-16">
          {/* Set as a solid chip rather than bare text. This line crosses the
              lit part of the facade, where no text colour holds its contrast
              against the glow. The chip also puts the brand green in the hero. */}
          <p className="eyebrow inline-flex items-center gap-3 bg-sage px-4 py-2.5 text-bone">
            {studio.discipline}
            <span aria-hidden="true" className="block h-3 w-px bg-bone/45" />
            {studio.address.city}
          </p>

          <h1 className="mt-6 max-w-[13ch] font-display text-[clamp(42px,8vw,96px)] leading-[0.98] font-light tracking-[-0.03em] text-bone">
            Designed for how you live.
          </h1>

          <p className="mt-7 max-w-[46ch] text-[17.5px] leading-relaxed text-bone/80">
            Built for how Islamabad&rsquo;s climate behaves. Architecture,
            interiors and construction under one roof.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button
              href={whatsappHref(
                "Hello, I'd like to talk about a project in Islamabad.",
              )}
              external
            >
              Start a project
            </Button>
            <Button href="/work" variant="light">
              See our work
            </Button>
          </div>
        </Container>

        {/* Drawing-sheet annotation: where the studio actually is. Sits top
            right, clear of the WhatsApp button in the bottom corner. */}
        <div className="pointer-events-none absolute top-8 right-8 hidden items-center gap-3 lg:flex">
          <span className="spec text-[11px] tracking-[0.12em] text-bone/75">
            33.68&deg; N / 73.05&deg; E
          </span>
          <span className="block h-px w-10 bg-bone/45" />
        </div>
      </section>

      <TrustStrip />

      {/* ── Premise ──────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <Container>
          <SectionHead
            number="01"
            title={
              <>
                Most houses in this city are drawn to fill a plot.
                <br className="hidden md:block" /> We draw them to work in a
                climate.
              </>
            }
          />

          <div className="mt-14 grid gap-10 md:grid-cols-2 md:gap-14">
            <div className="rise relative overflow-hidden bg-bone-3">
              <Image
                src={img.daylight}
                alt="A corridor lit from above by a continuous skylight"
                placeholder="blur"
                sizes="(max-width: 768px) 100vw, 590px"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>

            <div className="rise flex flex-col justify-center">
              <p className="text-[18px] leading-relaxed text-ink/85">
                Islamabad gives you 40&deg;C summers, cold winters and a
                monsoon. A plan that ignores that produces a house you fight
                with. Rooms nobody uses in June, an air conditioner that
                never switches off, a bill that climbs every year.
              </p>
              <p className="mt-6 text-[18px] leading-relaxed text-ink/85">
                So we start with orientation, openings and cross-ventilation,
                and design around them. Daylight where you need it. Shade where
                you don&rsquo;t. Air that moves without a switch.
              </p>
              <p className="mt-6 text-[18px] leading-relaxed text-ink/85">
                It is the least visible thing we do, and the one you feel every
                single day.
              </p>

              <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-rule pt-6">
                {[
                  ["Summer peak", "40°C+"],
                  ["Winter low", "2°C"],
                  ["Design axis", "N/S"],
                ].map(([k, v]) => (
                  <div key={k}>
                    <dt className="eyebrow text-[9.5px] text-stone-2">{k}</dt>
                    <dd className="spec mt-1.5 text-[17px] text-ink">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Services ─────────────────────────────────────────────────── */}
      <section className="border-t border-rule py-20 md:py-28">
        <Container>
          <SectionHead
            number="02"
            title="What we do"
            note="Five services, and what you actually receive under each. You can take the whole sequence or any part of it."
          />
          <div className="mt-14">
            <ServiceGrid />
          </div>
        </Container>
      </section>

      {/* ── Work ─────────────────────────────────────────────────────── */}
      <section className="border-t border-rule py-20 md:py-28">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHead
              number="03"
              title="Selected work"
              note="Residences, commercial interiors and renovation across Islamabad and Rawalpindi."
              className="flex-1 min-w-[260px]"
            />
            <Link
              href="/work"
              className="link-underline mb-1 font-display text-[15px] tracking-[0.04em] text-sage"
            >
              All projects &rarr;
            </Link>
          </div>

          <div className="mt-14 grid gap-x-6 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((p, i) => (
              <ProjectCard key={p.slug} project={p} priority={i === 0} />
            ))}
          </div>
        </Container>
      </section>

      {/* ── Process ──────────────────────────────────────────────────── */}
      <section className="border-t border-rule py-20 md:py-28">
        <Container>
          <SectionHead
            number="04"
            title="How a project runs"
            note="Five stages, in order. You know what happens at each one, what you receive, and roughly how long it takes."
          />
          <ProcessList />
        </Container>
      </section>

      {/* ── Costs ────────────────────────────────────────────────────── */}
      <section className="border-t border-rule bg-bone-2 py-20 md:py-28">
        <Container>
          <SectionHead
            number="05"
            title="What it costs. Before you ask."
            note="You should not have to make a phone call to find out roughly what you are getting into."
          />
          <CostTable />
        </Container>
      </section>

      {/* ── Studio ───────────────────────────────────────────────────── */}
      <section className="border-t border-rule py-20 md:py-28">
        <Container>
          <div className="grid gap-12 md:grid-cols-12 md:gap-14">
            <div className="rise md:col-span-5">
              <div className="overflow-hidden bg-bone-3">
                <Image
                  src={img.studio}
                  alt="A curved architectural wall in raking light"
                  placeholder="blur"
                  sizes="(max-width: 768px) 100vw, 480px"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
            </div>

            <div className="rise flex flex-col justify-center md:col-span-7">
              <Eyebrow>The studio</Eyebrow>
              <h2 className="mt-5 font-display text-[clamp(26px,3.6vw,42px)] leading-[1.1] font-light text-ink">
                One architect, from the first sketch to the last snag.
              </h2>
              <p className="mt-7 max-w-[58ch] text-[17.5px] leading-relaxed text-stone">
                {studio.intro}
              </p>
              <p className="mt-5 max-w-[58ch] text-[17.5px] leading-relaxed text-stone">
                {studio.architect} is an architect registered with the Pakistan
                Council of Architects and Town Planners. He founded the studio
                to practise the way he believes architecture works best:
                one architect, accountable across design, approvals and
                construction, rather than a project passed between departments.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-rule pt-7">
                <div>
                  <p className="font-display text-[19px] text-ink">
                    {studio.architect}
                  </p>
                  <p className="spec mt-1 text-[11.5px] text-sage">
                    Architect &middot; {studio.credential}
                  </p>
                </div>
                <Link
                  href="/studio"
                  className="link-underline font-display text-[15px] tracking-[0.04em] text-sage"
                >
                  About the studio &rarr;
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section className="border-t border-rule py-20 md:py-28">
        <Container>
          <SectionHead number="06" title="Questions we get asked" />
          <Faq />
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
