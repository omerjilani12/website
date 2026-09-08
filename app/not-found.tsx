import type { Metadata } from "next";
import { Button, Container, Eyebrow } from "@/components/ui";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="py-24 md:py-36">
      <Container>
        <Eyebrow>404</Eyebrow>
        <h1 className="mt-6 max-w-[16ch] font-display text-[clamp(32px,5vw,58px)] leading-[1.05] font-light tracking-[-0.02em] text-ink">
          This page isn&rsquo;t on the drawing.
        </h1>
        <p className="mt-6 max-w-[52ch] text-[17.5px] leading-relaxed text-stone">
          The page you were looking for has moved or never existed. The work,
          the services and the studio are all still where you left them.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Button href="/">Back to home</Button>
          <Button href="/work" variant="outline">
            See our work
          </Button>
        </div>
      </Container>
    </section>
  );
}
