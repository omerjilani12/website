/**
 * Static imports so Next can read intrinsic dimensions and generate a blur
 * placeholder for every image at build time. That gives us zero layout shift
 * and a soft fade-in without shipping a single byte of JavaScript for it.
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

import pMargalla from "@/public/img/p-margalla.jpg";
import pGulberg from "@/public/img/p-gulberg.jpg";
import pBluearea from "@/public/img/p-bluearea.jpg";
import pDha from "@/public/img/p-dha.jpg";
import pF7 from "@/public/img/p-f7.jpg";
import pBahria from "@/public/img/p-bahria.jpg";

import gStair from "@/public/img/g-stair.jpg";
import gKitchen from "@/public/img/g-kitchen.jpg";
import gFacade from "@/public/img/g-facade.jpg";
import gWindow from "@/public/img/g-window.jpg";
import gCrane from "@/public/img/g-crane.jpg";
import gSite from "@/public/img/g-site.jpg";

export const img = {
  hero,
  daylight,
  timber,
  studio: studioImg,
  ctaBand,
  gStair,
  gKitchen,
  gFacade,
  gWindow,
  gCrane,
  gSite,
} as const;

export const serviceImages = {
  architecture: svcArchitecture,
  interior: svcInterior,
  approvals: svcApprovals,
  construction: svcConstruction,
  renovation: svcRenovation,
} as const;

export const projectImages = {
  "p-margalla": pMargalla,
  "p-gulberg": pGulberg,
  "p-bluearea": pBluearea,
  "p-dha": pDha,
  "p-f7": pF7,
  "p-bahria": pBahria,
} as const;

export const galleryImages = {
  gStair,
  gKitchen,
  gFacade,
  gWindow,
  gCrane,
  gSite,
  daylight,
  timber,
} as const;

export type GalleryKey = keyof typeof galleryImages;
