/**
 * Static imports so Next can read intrinsic dimensions and generate a blur
 * placeholder for every image at build time. That gives us zero layout shift
 * and a soft fade-in without shipping a single byte of JavaScript for it.
 *
 * The intrinsic width and height also let the gallery lay itself out: a
 * landscape frame takes the full row, a portrait one takes a single column,
 * so nothing is ever cropped into the wrong shape.
 */
import hero from "@/public/img/hero.jpg";
import daylight from "@/public/img/daylight.jpg";
import timber from "@/public/img/timber.jpg";
import studioImg from "@/public/img/studio.jpg";
import ctaBand from "@/public/img/cta-band.jpg";

import svcArchitecture from "@/public/img/svc-architecture.jpg";
import svcInterior from "@/public/img/svc-interior.jpg";
import svcApprovals from "@/public/img/svc-approvals.jpg";
import svcConstruction from "@/public/img/svc-construction.jpg";
import svcRenovation from "@/public/img/svc-renovation.jpg";

/* The studio's own work. Renders and site photographs supplied by Vector. */
import azadKashmirDusk from "@/public/projects/azad-kashmir-dusk.jpg";
import azadKashmirDay from "@/public/projects/azad-kashmir-day.jpg";
import bahriaSafariFront from "@/public/projects/bahria-safari-front.jpg";
import bahriaSafariCorner from "@/public/projects/bahria-safari-corner.jpg";
import dhaPhase3 from "@/public/projects/dha-phase-3.jpg";
import gulbergResidencia from "@/public/projects/gulberg-residencia.jpg";
import jinnahGardenRender from "@/public/projects/jinnah-garden-render.jpg";
import jinnahGardenSite1 from "@/public/projects/jinnah-garden-site-1.jpg";
import jinnahGardenSite2 from "@/public/projects/jinnah-garden-site-2.jpg";
import siteSlab from "@/public/projects/site-slab.jpg";
import siteColumn from "@/public/projects/site-column.jpg";
import siteReview from "@/public/projects/site-review.jpg";

export const img = {
  hero,
  daylight,
  timber,
  studio: studioImg,
  ctaBand,
} as const;

export const serviceImages = {
  architecture: svcArchitecture,
  interior: svcInterior,
  approvals: svcApprovals,
  construction: svcConstruction,
  renovation: svcRenovation,
} as const;

/** Every frame of the studio's own work, keyed by a stable slug. */
export const projectImages = {
  "azad-kashmir-dusk": azadKashmirDusk,
  "azad-kashmir-day": azadKashmirDay,
  "bahria-safari-front": bahriaSafariFront,
  "bahria-safari-corner": bahriaSafariCorner,
  "dha-phase-3": dhaPhase3,
  "gulberg-residencia": gulbergResidencia,
  "jinnah-garden-render": jinnahGardenRender,
  "jinnah-garden-site-1": jinnahGardenSite1,
  "jinnah-garden-site-2": jinnahGardenSite2,
  "site-slab": siteSlab,
  "site-column": siteColumn,
  "site-review": siteReview,
} as const;

export type ProjectImageKey = keyof typeof projectImages;

/** Site photographs used on their own, away from any one project page. */
export const siteImages = [
  {
    key: "site-review" as const,
    alt: "Reinforcement being set out against the drawings at a hillside footing",
    caption: "Setting out a footing against the drawings",
  },
  {
    key: "site-column" as const,
    alt: "A column reinforcement cage being tied over a pad foundation",
    caption: "Column cage tied over its pad",
  },
  {
    key: "site-slab" as const,
    alt: "A reinforced slab laid out with conduit before a pour, hills beyond",
    caption: "Slab reinforcement and conduit, before the pour",
  },
];

export const isLandscape = (image: { width: number; height: number }) =>
  image.width >= image.height;
