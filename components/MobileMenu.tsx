"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { nav, studio, whatsappHref } from "@/lib/site";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  // Lock the page behind the overlay, and close on Escape.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const panel = (
    <div
      id="mobile-nav"
      className="fixed inset-0 top-16 z-50 flex flex-col bg-bone px-5 pt-10 pb-10 md:hidden"
    >
      <nav className="flex flex-col" aria-label="Mobile">
        {nav.map((item, i) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setOpen(false)}
            className="border-b border-rule-soft py-5 font-display text-[26px] font-light tracking-[-0.01em] text-ink"
          >
            <span className="spec mr-4 text-[11px] text-sage">
              {String(i + 1).padStart(2, "0")}
            </span>
            {item.label}
          </Link>
        ))}
      </nav>

      <a
        href={whatsappHref(
          "Hello, I'd like to talk about a project in Islamabad.",
        )}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 bg-sage px-6 py-4 text-center font-display text-[15px] tracking-[0.05em] text-bone"
      >
        Start a project
      </a>

      <div className="mt-auto pt-10">
        <p className="eyebrow text-stone-2">Studio</p>
        <p className="mt-2 text-[15px] leading-relaxed text-stone">
          {studio.address.line1}, {studio.address.line2}
          <br />
          {studio.address.city}
        </p>
        <a
          href={`tel:${studio.phoneRaw}`}
          className="spec mt-3 inline-block text-[13px] text-ink"
        >
          {studio.phone}
        </a>
      </div>
    </div>
  );

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-nav"
        className="relative z-60 -mr-2 flex h-11 w-11 items-center justify-center"
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        <span className="flex w-6 flex-col gap-[5px]">
          <span
            className={`block h-px w-full bg-ink transition-transform duration-300 ${
              open ? "translate-y-[6px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-full bg-ink transition-opacity duration-200 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-px w-full bg-ink transition-transform duration-300 ${
              open ? "-translate-y-[6px] -rotate-45" : ""
            }`}
          />
        </span>
      </button>

      {/* Portalled to <body>. The header sets backdrop-filter, which makes it
          the containing block for fixed descendants, so an overlay rendered
          inside it would be trapped in the 64px-tall header box.
          Rendered only while open, so the server and the first client render
          agree and there is nothing to hydrate. */}
      {open ? createPortal(panel, document.body) : null}
    </div>
  );
}
