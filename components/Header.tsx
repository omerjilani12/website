import Link from "next/link";
import Image from "next/image";
import mark from "@/public/logo-mark.png";
import { nav, studio, whatsappHref } from "@/lib/site";
import MobileMenu from "./MobileMenu";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-rule/70 bg-bone/85 backdrop-blur-md supports-[backdrop-filter]:bg-bone/70">
      <div className="mx-auto flex h-16 max-w-[1240px] items-center justify-between gap-6 px-5 sm:px-8 md:h-[74px]">
        <Link
          href="/"
          className="group flex items-center gap-3"
          aria-label={`${studio.name}, home`}
        >
          <Image
            src={mark}
            alt=""
            width={40}
            height={29}
            priority
            className="h-[26px] w-auto md:h-[30px]"
          />
          <span className="flex flex-col leading-none">
            <span className="font-display text-[15px] font-normal tracking-[0.24em] text-ink uppercase md:text-[17px]">
              Vector
            </span>
            <span className="eyebrow mt-[3px] text-[8.5px] tracking-[0.3em] text-sage md:text-[9px]">
              Design Atelier
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="link-underline font-display text-[14px] tracking-[0.04em] text-ink/85 transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={whatsappHref(
              "Hello, I'd like to talk about a project in Islamabad.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="font-display text-[13.5px] tracking-[0.05em] border border-sage bg-sage px-5 py-2.5 text-bone transition-colors hover:bg-sage-deep hover:border-sage-deep"
          >
            Start a project
          </a>
        </nav>

        <MobileMenu />
      </div>
    </header>
  );
}
