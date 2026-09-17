import type { Metadata } from "next";
import { Container, Eyebrow } from "@/components/ui";
import { CtaBand, OnSite, ProjectCard } from "@/components/sections";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Houses across Islamabad, Rawalpindi and Azad Kashmir. Architecture, approvals and construction by Vector Design Atelier.",
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
            Houses across Islamabad, Rawalpindi and Azad Kashmir. Each one is
            described by what the elevation actually does, and where a project
            is already on site, the photographs are of our own work in progress.
          </p>
          <p className="spec mt-8 text-[11.5px] text-stone-2">
            {projects.length} projects &nbsp;/&nbsp; Islamabad, Rawalpindi
            &amp; Azad Kashmir
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

      {/* ── On site ────────────────────────────────────────────────── */}
      <section className="border-t border-rule py-16 md:py-24">
        <Container>
          <div className="max-w-[58ch]">
            <Eyebrow>On site</Eyebrow>
            <h2 className="mt-5 font-display text-[clamp(26px,3.6vw,40px)] leading-[1.12] font-light text-ink">
              A drawing is only worth what gets built from it.
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed text-stone">
              Footings set out against the drawings, reinforcement checked
              before the pour, levels taken on ground that refuses to be flat.
              This is the part of the work nobody photographs, and the part that
              decides whether the finished building matches what was promised.
            </p>
          </div>
          <div className="mt-12">
            <OnSite />
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
