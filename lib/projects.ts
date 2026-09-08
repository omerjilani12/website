import { projectImages, type GalleryKey } from "./images";

/* ═══════════════════════════════════════════════════════════════════════
   ⚠  PLACEHOLDER PROJECTS. REPLACE BEFORE LAUNCH
   ═══════════════════════════════════════════════════════════════════════
   The six entries below are structural placeholders that demonstrate how a
   project page reads. The photography is licensed stock and shows OTHER
   architects' buildings.

   Do not publish this site until each entry is replaced with a real Vector
   project. Clients in this market do reverse-image search, and one hit ends
   the conversation permanently.

   If a project has not been photographed yet, use a render or a drawing and
   set `media: "render"` or `media: "drawing"` and the page will caption it
   honestly. An honest render beats a beautiful photograph of someone else's
   building.

   To replace: drop images into /public/img, add the import to lib/images.ts,
   then edit the entry below. Nothing else needs to change.
   ═══════════════════════════════════════════════════════════════════════ */

export type Project = {
  slug: string;
  name: string;
  sector: "Residential" | "Commercial" | "Interior" | "Renovation";
  location: string;
  plot: string;
  covered: string;
  year: string;
  status: string;
  media: "photograph" | "render" | "drawing";
  /** The one-line summary used on the index grid. */
  summary: string;
  /** What the client asked for, in their language. */
  brief: string;
  /** What constrained it. The most interesting part of any project. */
  site: string;
  /** The single design decision that defines the project. */
  move: string;
  cover: keyof typeof projectImages;
  gallery: GalleryKey[];
  placeholder: true;
};

export const projects: Project[] = [
  {
    slug: "margalla-view-house",
    name: "Margalla View House",
    sector: "Residential",
    location: "F-7, Islamabad",
    plot: "1 Kanal",
    covered: "4,850 sq ft",
    year: "2025",
    status: "Completed",
    media: "photograph",
    summary:
      "A family house turned ninety degrees off the obvious plan to put every living space on the north.",
    brief:
      "A family of six who had lived in a rented house where the drawing room was unusable from May to September. They asked for something they would not need to air-condition all day, with a view of the hills from wherever they actually sat.",
    site: "A regular 1-kanal plot with the road on the south, which is where most houses in this sector put their living rooms, and why most of them cook in summer. The Margalla view is north-west. The two facts pointed the same direction.",
    move: "The entire living floor was rotated to face north, with service and circulation banked along the southern edge as a thermal buffer. A double-height slot cut through the centre of the plan pulls hot air up and out through a clerestory, so the ground floor draws cool air across itself without a fan running. The view came free with the orientation.",
    cover: "p-margalla",
    gallery: ["gWindow", "daylight", "gStair", "timber"],
    placeholder: true,
  },
  {
    slug: "gulberg-greens-residence",
    name: "Gulberg Greens Residence",
    sector: "Residential",
    location: "Gulberg Greens, Islamabad",
    plot: "10 Marla",
    covered: "3,100 sq ft",
    year: "2025",
    status: "Under construction",
    media: "render",
    summary:
      "Ten marla planned as though it were more, by refusing to give any square foot only one job.",
    brief:
      "A first house for a young family, on a budget that did not stretch to the plot they wanted. The brief was simply that it should not feel small.",
    site: "A 10-marla plot with neighbours built hard against both side boundaries, which removed cross-ventilation from the obvious axis and left only the front and rear open.",
    move: "A narrow courtyard was carved out of the middle of the plan: costly in area, decisive in everything else. It restored cross-ventilation on the blocked axis, put daylight into rooms that would otherwise have been internal, and gave the house a view of itself. Every room now borrows light and air from a space it does not have to own.",
    cover: "p-gulberg",
    gallery: ["gKitchen", "gStair", "timber", "gWindow"],
    placeholder: true,
  },
  {
    slug: "blue-area-office-floor",
    name: "Blue Area Office Floor",
    sector: "Interior",
    location: "Blue Area, Islamabad",
    plot: "Commercial floor",
    covered: "6,200 sq ft",
    year: "2024",
    status: "Completed",
    media: "photograph",
    summary:
      "A full floor fit-out where the glass was moved inward so the daylight could reach further.",
    brief:
      "A firm of forty moving from three scattered floors into one. They wanted meeting rooms that did not feel like interrogation cells and an office that people would come into rather than avoid.",
    site: "A deep floor plate with glazing on two elevations only, which meant the centre of the plan was more than fifteen metres from the nearest window.",
    move: "Every enclosed room was pulled off the facade and rebuilt in glass, so the perimeter daylight passes through them rather than stopping at them. The solid walls went to the core instead, where nobody needed a view. Desks sit in the light; meeting rooms borrow it.",
    cover: "p-bluearea",
    gallery: ["gWindow", "daylight", "gStair", "gKitchen"],
    placeholder: true,
  },
  {
    slug: "dha-phase-2-villa",
    name: "DHA Phase II Villa",
    sector: "Commercial",
    location: "DHA Phase II, Islamabad",
    plot: "2 Kanal",
    covered: "8,400 sq ft",
    year: "2024",
    status: "Completed",
    media: "photograph",
    summary:
      "A deep-set facade that does its shading with geometry instead of glass coatings.",
    brief:
      "A client who wanted a modern elevation and had been told by two firms that it would mean a wall of glass and a permanently running chiller.",
    site: "A west-facing frontage, the hardest orientation in this climate, taking full afternoon sun through the hottest months of the year.",
    move: "The western elevation was set back nearly a metre behind a deep concrete frame, so the structure itself does the shading. Glass area stayed generous; solar gain did not. The elevation reads as modern because of the depth in it, which is also the thing keeping the rooms behind it cool.",
    cover: "p-dha",
    gallery: ["gFacade", "daylight", "gWindow", "gStair"],
    placeholder: true,
  },
  {
    slug: "f-7-apartment-interior",
    name: "F-7 Apartment Interior",
    sector: "Interior",
    location: "F-7, Islamabad",
    plot: "Apartment",
    covered: "2,400 sq ft",
    year: "2024",
    status: "Completed",
    media: "photograph",
    summary:
      "One removed wall, and an apartment that finally matched how the family used it.",
    brief:
      "A couple who had bought an apartment they liked in a building they liked, with a layout drawn for a household that was not theirs.",
    site: "A structural frame with almost nothing movable in it: two columns and a shear wall fixed the plan, and the services were where they were.",
    move: "A single non-structural wall between the kitchen and the dining room came out, and everything else was resolved in joinery rather than construction. Storage was built to the ceiling along the one blank wall, freeing the floor entirely. The apartment gained no area and roughly a third more usable space.",
    cover: "p-f7",
    gallery: ["gKitchen", "timber", "gWindow", "daylight"],
    placeholder: true,
  },
  {
    slug: "bahria-town-renovation",
    name: "Bahria Town Renovation",
    sector: "Renovation",
    location: "Bahria Town, Rawalpindi",
    plot: "1 Kanal",
    covered: "4,200 sq ft",
    year: "2023",
    status: "Completed",
    media: "photograph",
    summary:
      "A twenty-year-old house re-planned around its own structure, with the family still living in it.",
    brief:
      "A house the family had outgrown and did not want to leave. They needed two more bedrooms and a kitchen that worked, and they could not move out while it happened.",
    site: "A 2003 structure in sound condition but with a plan built around a central corridor that consumed a quarter of the floor area and lit none of it.",
    move: "The corridor was absorbed into the rooms on either side of it and circulation moved to the perimeter, where it now runs along glazing and doubles as living space. The two bedrooms came out of the area recovered, with no addition to the footprint. Work was phased floor by floor so the family never lost a functioning kitchen or bathroom.",
    cover: "p-bahria",
    gallery: ["gSite", "gCrane", "timber", "gStair"],
    placeholder: true,
  },
];

export const sectors = [
  "All",
  "Residential",
  "Commercial",
  "Interior",
  "Renovation",
] as const;

export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);

export const mediaLabel: Record<Project["media"], string | null> = {
  photograph: null,
  render: "Render",
  drawing: "Drawing",
};
