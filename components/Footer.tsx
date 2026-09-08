import Link from "next/link";
import Image from "next/image";
import mark from "@/public/logo-mark.png";
import { nav, services, studio } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-ink/15 bg-bone-2">
      <div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-8 md:py-20">
        <p className="font-display text-[clamp(28px,5vw,52px)] leading-[1.05] font-light tracking-[-0.02em] text-ink">
          Where design
          <br />
          finds direction.
        </p>

        <div className="mt-14 grid gap-10 border-t border-rule pt-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src={mark}
                alt=""
                width={44}
                height={32}
                className="h-7 w-auto"
              />
              <span className="flex flex-col leading-none">
                <span className="font-display text-[15px] tracking-[0.24em] text-ink uppercase">
                  Vector
                </span>
                <span className="eyebrow mt-[3px] text-[8.5px] tracking-[0.3em] text-sage">
                  Design Atelier
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-[30ch] text-[15px] leading-relaxed text-stone">
              {studio.intro}
            </p>
          </div>

          <div>
            <h2 className="eyebrow text-stone-2">Studio</h2>
            <address className="mt-4 text-[15px] leading-relaxed text-stone not-italic">
              {studio.address.line1}
              <br />
              {studio.address.line2}
              <br />
              {studio.address.city}, {studio.address.country}
            </address>
          </div>

          <div>
            <h2 className="eyebrow text-stone-2">Contact</h2>
            <ul className="mt-4 flex flex-col gap-2 text-[15px]">
              <li>
                <a
                  href={`tel:${studio.phoneRaw}`}
                  className="link-underline spec text-[13px] text-ink"
                >
                  {studio.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${studio.email}`}
                  className="link-underline text-ink"
                >
                  {studio.email}
                </a>
              </li>
              <li className="mt-2 flex gap-4">
                <a
                  href={studio.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-stone"
                >
                  Instagram
                </a>
                <a
                  href={studio.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-stone"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="eyebrow text-stone-2">Navigate</h2>
            <ul className="mt-4 flex flex-col gap-2 text-[15px]">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="link-underline text-ink">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="mt-5 flex flex-col gap-1.5 text-[14px]">
              {services.slice(0, 3).map((s) => (
                <li key={s.slug}>
                  <Link
                    href="/services"
                    className="link-underline text-stone-2"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-rule pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="spec text-[11.5px] text-stone-2">
            © {year} {studio.name}. All rights reserved.
          </p>
          <p className="spec text-[11.5px] text-stone-2">
            {studio.architect}, {studio.credential} · {studio.discipline}
          </p>
        </div>
      </div>
    </footer>
  );
}
