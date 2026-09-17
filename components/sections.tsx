import Link from "next/link";
import Image from "next/image";
import { Button, Container, DimLine, Eyebrow } from "./ui";
import { serviceImages, img } from "@/lib/images";
import {
  authorities,
  costs,
  faqs,
  process,
  services,
  studio,
  whatsappHref,
} from "@/lib/site";
import { mediaLabel, type Project } from "@/lib/projects";
import { projectImages, siteImages, isLandscape } from "@/lib/images";

/* ── Trust strip ─────────────────────────────────────────────────────── */

export function TrustStrip() {
  return (
    <div className="border-y border-rule bg-bone-2">
      <Container>
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 py-4 sm:gap-x-9">
          {authorities.map((a) => (
            <li
              key={a}
              className="eyebrow text-[10px] text-stone sm:text-[10.5px]"
            >
              {a}
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}

/* ── Services ────────────────────────────────────────────────────────── */

export function ServiceGrid({ detailed = false }: { detailed?: boolean }) {
  return (
    <div className="grid gap-x-6 gap-y-12 lg:grid-cols-6">
      {services.map((s, i) => (
        <article
          key={s.slug}
          className={`rise group ${i < 2 ? "lg:col-span-3" : "lg:col-span-2"}`}
        >
          <div className="relative overflow-hidden bg-bone-3">
            <Image
              src={serviceImages[s.image]}
              alt=""
              placeholder="blur"
              sizes="(max-width: 1024px) 100vw, (max-width: 1240px) 33vw, 400px"
              className={`w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04] ${
                i < 2 ? "aspect-[16/10]" : "aspect-[4/3]"
              }`}
            />
            <span className="spec absolute top-4 left-4 bg-bone/90 px-2.5 py-1 text-[11px] text-sage">
              {s.number}
            </span>
          </div>

          <h3 className="mt-6 font-display text-[22px] leading-tight font-normal text-ink">
            {s.title}
          </h3>
          <p className="mt-2 text-[17px] leading-relaxed text-ink/75">
            {s.promise}
          </p>

          {detailed ? (
            <p className="mt-4 text-[16px] leading-relaxed text-stone">
              {s.body}
            </p>
          ) : null}

          <ul className="mt-5 flex flex-wrap gap-x-2 gap-y-1.5">
            {s.deliverables.map((d) => (
              <li
                key={d}
                className="spec border border-rule px-2.5 py-1 text-[11px] text-stone"
              >
                {d}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

/* ── Projects ────────────────────────────────────────────────────────── */

export function ProjectCard({
  project,
  priority = false,
  wide = false,
}: {
  project: Project;
  priority?: boolean;
  wide?: boolean;
}) {
  const label = mediaLabel[project.coverMedia];

  return (
    <article className="rise group">
      <Link href={`/work/${project.slug}`} className="block">
        <div className="relative overflow-hidden bg-bone-3">
          <Image
            src={projectImages[project.cover]}
            alt={`${project.name}, ${project.location}`}
            placeholder="blur"
            priority={priority}
            sizes={
              wide
                ? "(max-width: 1024px) 100vw, 1200px"
                : "(max-width: 768px) 100vw, (max-width: 1240px) 50vw, 600px"
            }
            className={`w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.035] ${
              wide ? "aspect-[16/9]" : "aspect-[4/3]"
            }`}
          />
          {label ? (
            <span className="spec absolute top-4 left-4 bg-ink/75 px-2.5 py-1 text-[10.5px] tracking-[0.1em] text-bone uppercase">
              {label}
            </span>
          ) : null}
        </div>

        <div className="mt-5 flex items-baseline justify-between gap-4 border-t border-rule pt-4">
          <h3 className="font-display text-[21px] leading-tight font-normal text-ink transition-colors group-hover:text-sage">
            {project.name}
          </h3>
          {project.year ? (
            <span className="spec shrink-0 text-[11px] text-stone-2">
              {project.year}
            </span>
          ) : null}
        </div>
        <p className="spec mt-1.5 text-[11.5px] text-sage">
          {[project.sector, project.location, project.plot]
            .filter(Boolean)
            .join("  /  ")}
        </p>
        <p className="mt-3 max-w-[46ch] text-[16px] leading-relaxed text-stone">
          {project.summary}
        </p>
      </Link>
    </article>
  );
}

/* ── Process ─────────────────────────────────────────────────────────── */

export function ProcessList() {
  return (
    <ol className="mt-10 border-t border-rule">
      {process.map((step) => (
        <li
          key={step.number}
          className="rise grid grid-cols-[42px_1fr] gap-4 border-b border-rule-soft py-7 sm:gap-6 md:grid-cols-[42px_minmax(0,1fr)_minmax(0,1.5fr)_140px]"
        >
          <span className="spec pt-1.5 text-[11.5px] text-sage">
            {step.number}
          </span>
          <h3 className="font-display text-[20px] leading-snug font-normal text-ink">
            {step.title}
          </h3>
          <p className="col-start-2 max-w-[58ch] text-[16px] leading-relaxed text-stone md:col-start-auto">
            {step.body}
          </p>
          <span className="spec col-start-2 text-[12px] text-ink md:col-start-auto md:pt-1 md:text-right">
            {step.duration}
          </span>
        </li>
      ))}
    </ol>
  );
}

/* ── Costs ───────────────────────────────────────────────────────────── */

export function CostTable() {
  return (
    <div className="rise mt-10">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[560px] border-collapse">
          <thead>
            <tr className="border-b border-ink/30">
              <th className="eyebrow py-3 pr-6 text-left text-[10px] text-stone-2">
                Line
              </th>
              <th className="eyebrow py-3 pr-6 text-left text-[10px] text-stone-2">
                Range
              </th>
              <th className="eyebrow py-3 text-left text-[10px] text-stone-2">
                Note
              </th>
            </tr>
          </thead>
          <tbody>
            {costs.map((c) => (
              <tr key={c.line} className="border-b border-rule-soft">
                <td className="py-4 pr-6 align-top font-display text-[17px] text-ink">
                  {c.line}
                </td>
                <td className="spec py-4 pr-6 align-top text-[14px] whitespace-nowrap text-ink">
                  {c.range}
                </td>
                <td className="py-4 align-top text-[15.5px] leading-relaxed text-stone">
                  {c.note}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-6 max-w-[62ch] text-[16.5px] leading-relaxed text-ink/80">
        Every project gets a written scope and a stage-wise payment schedule
        before you commit to anything. We do not start work on a verbal number.
      </p>
      <p className="spec mt-3 text-[11.5px] text-stone-2">
        Islamabad market rates, 2026. Ranges for planning, not a quotation.
      </p>
    </div>
  );
}

/* ── FAQ, native disclosure, no JavaScript ───────────────────────────── */

export function Faq() {
  return (
    <div className="mt-10 border-t border-rule">
      {faqs.map((f) => (
        <details key={f.q} className="group border-b border-rule-soft">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 [&::-webkit-details-marker]:hidden">
            <h3 className="font-display text-[19px] leading-snug font-normal text-ink transition-colors group-open:text-sage">
              {f.q}
            </h3>
            <span
              aria-hidden="true"
              className="relative mt-2 block h-3 w-3 shrink-0"
            >
              <span className="absolute top-1/2 left-0 block h-px w-3 -translate-y-1/2 bg-sage" />
              <span className="absolute top-1/2 left-0 block h-px w-3 -translate-y-1/2 rotate-90 bg-sage transition-transform duration-300 group-open:rotate-0" />
            </span>
          </summary>
          <p className="max-w-[68ch] pb-6 text-[16.5px] leading-relaxed text-stone">
            {f.a}
          </p>
        </details>
      ))}
    </div>
  );
}

/* ── Closing call to action ──────────────────────────────────────────── */

export function CtaBand() {
  return (
    <section className="relative isolate mt-24 overflow-hidden md:mt-32">
      <Image
        src={img.ctaBand}
        alt=""
        placeholder="blur"
        sizes="100vw"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-ink/72" />
      <Container className="py-20 md:py-28">
        <div className="max-w-[52ch]">
          <Eyebrow className="text-brass-soft">Start here</Eyebrow>
          <h2 className="mt-5 font-display text-[clamp(30px,4.6vw,52px)] leading-[1.08] font-light text-bone">
            Tell us about the plot.
          </h2>
          <p className="mt-6 text-[17.5px] leading-relaxed text-bone/80">
            Send a location and a rough idea of what you want. We will tell you
            honestly whether we are the right studio for it, and what it is
            likely to cost, before anyone signs anything.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button
              href={whatsappHref(
                "Hello, I'd like to talk about a project in Islamabad.",
              )}
              external
              className="border-sage bg-sage text-bone hover:border-bone hover:bg-bone hover:text-ink"
            >
              WhatsApp {studio.phone}
            </Button>
            <Button href="/contact" variant="light">
              Send a message
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ── Project gallery ─────────────────────────────────────────────────── */

/**
 * Renders and site photographs arrive in different shapes: the drawings are
 * landscape, the photographs come off a phone in portrait. Rather than crop
 * one into the other's proportion, each frame keeps its own ratio and the
 * landscape ones take the full row.
 */
export function ProjectGallery({ project }: { project: Project }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {project.frames.map((frame) => {
        const image = projectImages[frame.key];
        const wide = isLandscape(image);
        const label = mediaLabel[frame.media];

        return (
          <figure
            key={frame.key}
            className={`rise ${wide ? "sm:col-span-2" : ""}`}
          >
            <div className="relative overflow-hidden bg-bone-3">
              <Image
                src={image}
                alt={frame.alt}
                placeholder="blur"
                sizes={
                  wide
                    ? "(max-width: 640px) 100vw, (max-width: 1240px) 92vw, 1130px"
                    : "(max-width: 640px) 100vw, (max-width: 1240px) 46vw, 555px"
                }
                /* Landscape frames keep their own ratio and take the row.
                   Portrait ones share a single ratio so a row of them lines
                   up, rather than stepping to whatever the phone recorded. */
                className={
                  wide ? "h-auto w-full" : "aspect-[3/4] w-full object-cover"
                }
              />
              {label ? (
                <span className="spec absolute top-4 left-4 bg-ink/75 px-2.5 py-1 text-[10.5px] tracking-[0.1em] text-bone uppercase">
                  {label}
                </span>
              ) : null}
            </div>
            {frame.caption ? (
              <figcaption className="mt-3 text-[15px] leading-relaxed text-stone">
                {frame.caption}
              </figcaption>
            ) : null}
          </figure>
        );
      })}
    </div>
  );
}

/* ── On site ─────────────────────────────────────────────────────────── */

/** Photographs from the studio's own sites. Proof that the drawings get built. */
export function OnSite() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {siteImages.map((frame) => (
        <figure key={frame.key} className="rise">
          <div className="overflow-hidden bg-bone-3">
            <Image
              src={projectImages[frame.key]}
              alt={frame.alt}
              placeholder="blur"
              sizes="(max-width: 640px) 100vw, (max-width: 1240px) 32vw, 385px"
              className="aspect-[3/4] w-full object-cover"
            />
          </div>
          <figcaption className="mt-3 text-[15px] leading-relaxed text-stone">
            {frame.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export { DimLine };
