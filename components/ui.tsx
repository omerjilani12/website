import Link from "next/link";
import type { ReactNode } from "react";

/** Page-width container. One value, used everywhere. */
export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto max-w-[1240px] px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

/**
 * Section heading in the drawing-sheet manner: a reference number, a rule
 * that draws itself in, the title, and an optional standfirst.
 */
export function SectionHead({
  number,
  title,
  note,
  className = "",
}: {
  number: string;
  title: ReactNode;
  note?: ReactNode;
  className?: string;
}) {
  return (
    <div className={`rise grid grid-cols-[42px_1fr] gap-4 sm:gap-6 ${className}`}>
      <span className="spec pt-2 text-[11.5px] text-sage">{number}</span>
      <div>
        <span className="draw block h-px w-full bg-ink" />
        <h2 className="mt-4 font-display text-[clamp(26px,3.6vw,40px)] leading-[1.12] font-light text-ink">
          {title}
        </h2>
        {note ? (
          <p className="mt-4 max-w-[62ch] text-[16.5px] leading-relaxed text-stone">
            {note}
          </p>
        ) : null}
      </div>
    </div>
  );
}

/** Small tracked-caps label. */
export function Eyebrow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <p className={`eyebrow text-sage ${className}`}>{children}</p>;
}

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "light";
  external?: boolean;
  className?: string;
};

export function Button({
  href,
  children,
  variant = "solid",
  external = false,
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center border px-6 py-3 font-display text-[14px] tracking-[0.05em] transition-colors duration-300";
  const styles = {
    solid:
      "border-sage bg-sage text-bone hover:bg-sage-deep hover:border-sage-deep",
    outline:
      "border-ink/25 bg-transparent text-ink hover:border-ink hover:bg-ink hover:text-bone",
    light:
      "border-bone/40 bg-transparent text-bone hover:bg-bone hover:text-ink hover:border-bone",
  }[variant];

  const cls = `${base} ${styles} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

/** A hairline with end ticks, as a dimension line is drawn. */
export function DimLine({ className = "" }: { className?: string }) {
  return <div className={`dimline ${className}`} />;
}
