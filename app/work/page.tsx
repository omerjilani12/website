import type { Metadata } from "next";
import { Container, Eyebrow } from "@/components/ui";
import { CtaBand, ProjectCard } from "@/components/sections";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Residences, commercial interiors and renovation across Islamabad and Rawalpindi. Architecture by Vector Design Atelier.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <section className="border-b border-rule py-16 md:py-24">
        <Container>
          <Eyebrow>Selected work</Eyebrow>
          <h1 className="mt-6 max-w-[18ch] font-display text-[clamp(34px,5.6vw,66px)] leading-[1.05] font-light tracking-[-0.02em] text-ink">
            Every project starts on the plot.
          </h1>
          <p className="mt-7 max-w-[58ch] text-[17.5px] leading-relaxed text-stone">
            Each of these is written the way we think about it: the
            brief, the thing about the site that made it difficult, and the one
            decision that resolved it.
          </p>
          <p className="spec mt-8 text-[11.5px] text-stone-2">
            {projects.length} projects &nbsp;/&nbsp; Islamabad &amp; Rawalpindi
          </p>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-x-6 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <ProjectCard key={p.slug} project={p} priority={i < 2} />
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
