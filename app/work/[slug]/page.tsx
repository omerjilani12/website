import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container, Eyebrow } from "@/components/ui";
import { CtaBand, ProjectGallery } from "@/components/sections";
import {
  getProject,
  mediaLabel,
  projects,
  projectSpecs,
} from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };

  return {
    title: project.name,
    description: project.summary,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      type: "article",
      title: project.name,
      description: project.summary,
    },
  };
}

export default async function ProjectPage({
  params,
}: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length];
  const label = mediaLabel[project.coverMedia];
  const specs = projectSpecs(project);
  const builtOnSite = project.frames.some((f) => f.media === "photograph");

  return (
    <>
      {/* ── Title block, as an architect labels a sheet ─────────────── */}
      <section className="border-b border-rule py-14 md:py-20">
        <Container>
          <Link
            href="/work"
            className="link-underline eyebrow text-stone-2 hover:text-ink"
          >
            &larr; All work
          </Link>

          <h1 className="mt-8 max-w-[16ch] font-display text-[clamp(34px,5.6vw,66px)] leading-[1.04] font-light tracking-[-0.02em] text-ink">
            {project.name}
          </h1>
          <p className="mt-6 max-w-[56ch] text-[18px] leading-relaxed text-stone">
            {project.summary}
          </p>

          <dl className="mt-12 grid grid-cols-2 border-t border-ink/25 sm:grid-cols-3 lg:grid-cols-6">
            {specs.map(([k, v]) => (
              <div
                key={k}
                className="border-b border-rule-soft py-4 pr-4 sm:border-b-0 sm:border-r sm:last:border-r-0 sm:pl-4 sm:first:pl-0"
              >
                <dt className="eyebrow text-[9.5px] text-stone-2">{k}</dt>
                <dd className="spec mt-2 text-[13px] text-ink">{v}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* ── The narrative ──────────────────────────────────────────── */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              {(
                [
                  ["The design", project.description],
                  ["The brief", project.brief],
                ] as [string, string | undefined][]
              )
                .filter((row): row is [string, string] => Boolean(row[1]))
                .map(([heading, body], i) => (
                  <div
                    key={heading}
                    className={`rise ${i > 0 ? "mt-12 border-t border-rule pt-12" : ""}`}
                  >
                    <Eyebrow>{heading}</Eyebrow>
                    <p className="mt-5 max-w-[62ch] text-[18px] leading-relaxed text-ink/85">
                      {body}
                    </p>
                  </div>
                ))}
            </div>

            <aside className="lg:col-span-4 lg:col-start-9">
              <div className="rise border-t border-ink/25 pt-6">
                <Eyebrow>Materials</Eyebrow>
                <ul className="mt-5 flex flex-wrap gap-x-2 gap-y-1.5">
                  {project.materials.map((m) => (
                    <li
                      key={m}
                      className="spec border border-rule px-2.5 py-1 text-[11px] text-stone"
                    >
                      {m}
                    </li>
                  ))}
                </ul>

                <p className="mt-7 border-t border-rule pt-6 text-[16px] leading-relaxed text-stone">
                  {label
                    ? `The elevation shown here is a ${label.toLowerCase()}. `
                    : ""}
                  {builtOnSite
                    ? "The site photographs below are of this project under construction, built by the studio to its own drawings."
                    : "Designed by the studio and taken through approvals and construction."}
                </p>

                <Link
                  href="/services"
                  className="link-underline mt-6 inline-block font-display text-[15px] tracking-[0.04em] text-sage"
                >
                  How we work &rarr;
                </Link>
              </div>
            </aside>
          </div>

          <div className="mt-16 md:mt-20">
            <ProjectGallery project={project} />
          </div>
        </Container>
      </section>

      {/* ── Next project ───────────────────────────────────────────── */}
      <section className="border-t border-rule py-14">
        <Container>
          <Link href={`/work/${next.slug}`} className="group block">
            <p className="eyebrow text-stone-2">Next project</p>
            <div className="mt-3 flex flex-wrap items-baseline justify-between gap-4">
              <h2 className="font-display text-[clamp(24px,3.4vw,38px)] font-light text-ink transition-colors group-hover:text-sage">
                {next.name}
              </h2>
              <span className="spec text-[11.5px] text-sage">
                {next.sector} &nbsp;/&nbsp; {next.location}
              </span>
            </div>
          </Link>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
