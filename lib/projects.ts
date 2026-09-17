import type { ProjectImageKey } from "./images";

/* ═══════════════════════════════════════════════════════════════════════
   The studio's own work.

   WHAT IS HERE: the name, the location, and a description of what the
   drawing actually shows. Those are all verifiable from the images.

   WHAT IS DELIBERATELY MISSING: plot size, covered area, year, and the
   client's brief. Those are facts only the studio holds, so nothing has
   been invented to fill the gap. Every one of these fields is optional
   and the page simply leaves out whatever is absent. Fill them in and
   they appear.

   To add a project: put the images in /public/projects, register them in
   lib/images.ts, then add an entry below.
   ═══════════════════════════════════════════════════════════════════════ */

export type Media = "render" | "photograph" | "drawing";

export type Frame = {
  key: ProjectImageKey;
  alt: string;
  media: Media;
  caption?: string;
};

export type Project = {
  slug: string;
  name: string;
  sector: "Residential" | "Commercial" | "Interior" | "Renovation";
  location: string;
  /** Optional, and omitted from the page when absent. */
  status?: string;
  plot?: string;
  covered?: string;
  year?: string;
  /** One line for the index grid. */
  summary: string;
  /** What the elevation does, read off the drawing. */
  description: string;
  /** Visible in the drawing, so safe to publish. */
  materials: string[];
  /** The client's own brief. Add when the studio supplies it. */
  brief?: string;
  cover: ProjectImageKey;
  coverMedia: Media;
  frames: Frame[];
};

export const projects: Project[] = [
  {
    slug: "jinnah-garden-house",
    name: "Jinnah Garden House",
    sector: "Residential",
    location: "Jinnah Gardens, Islamabad",
    status: "Under construction",
    summary:
      "One deep stone portal holds the whole front, with the glazing, the entrance and the porch set back inside it.",
    description:
      "The elevation is organised as a single large frame in pale stone, and everything sits inside it. A two-storey glazed bay with a planted balcony takes one side, a full-height entrance of vertical timber slats holds the centre, and the car porch sits beneath a first-floor terrace. Setting every opening back behind one deep frame is what gives the front its shadow, and it keeps direct sun off the glass for most of the day.",
    materials: [
      "Pale cast stone",
      "Split-face grey stone",
      "Vertical timber slatting",
      "Glass balustrade",
      "Concealed cove lighting",
    ],
    cover: "jinnah-garden-render",
    coverMedia: "render",
    frames: [
      {
        key: "jinnah-garden-render",
        alt: "Street elevation of the Jinnah Garden house at dusk, a deep stone frame around a glazed bay and timber entrance",
        media: "render",
      },
      {
        key: "jinnah-garden-site-1",
        alt: "The grey structure on site, brick infill between a reinforced concrete frame",
        media: "photograph",
        caption: "Grey structure, with the entrance recess already framed",
      },
      {
        key: "jinnah-garden-site-2",
        alt: "Ground and first floor openings cast and built up in brick",
        media: "photograph",
        caption: "The double-height opening taking shape",
      },
    ],
  },
  {
    slug: "bahria-safari-villa",
    name: "Safari Villa",
    sector: "Residential",
    location: "Bahria Town, Rawalpindi",
    summary:
      "A pitched roof with exposed rafters set against flat-roofed stone masses, so the house reads as two buildings meeting.",
    description:
      "A gabled volume with exposed timber rafters and a glazed apex stands against flat-roofed masses clad in dark split-face stone and pale textured render. A circular opening punctures the upper wall, and the entrance is marked by a tall screen of vertical timber with the light concealed in its reveals. The first-floor balcony carries planting out over the porch, which softens the stone at the one point where people actually stand.",
    materials: [
      "Dark split-face stone",
      "Textured render",
      "Exposed timber rafters",
      "Steel balustrade",
      "Linear entrance lighting",
    ],
    cover: "bahria-safari-front",
    coverMedia: "render",
    frames: [
      {
        key: "bahria-safari-front",
        alt: "Front elevation of the Safari Villa, a gabled timber-raftered volume beside flat-roofed stone masses",
        media: "render",
      },
      {
        key: "bahria-safari-corner",
        alt: "Corner view of the Safari Villa showing how the pitched and flat-roofed volumes meet",
        media: "render",
        caption: "Where the two roof forms meet",
      },
    ],
  },
  {
    slug: "dha-phase-3-house",
    name: "DHA Phase III House",
    sector: "Residential",
    location: "DHA Phase III, Islamabad",
    summary:
      "A wide frontage broken by a double-height entrance recess, with a perforated screen holding one end.",
    description:
      "The elevation runs long and low across a wide plot, faced in dark stone and textured grey render. A double-height recess in pale stone marks the entrance and is lined with timber slatting. A perforated screen closes the opposite end, filtering light into the rooms behind it rather than turning a blank wall to the street. Planted balcony troughs break the upper floor, and the porch for two cars is kept separate from the entrance.",
    materials: [
      "Dark stone cladding",
      "Textured render",
      "Perforated screen",
      "Timber slatting",
      "Planted balcony troughs",
    ],
    cover: "dha-phase-3",
    coverMedia: "render",
    frames: [
      {
        key: "dha-phase-3",
        alt: "Street elevation of the DHA Phase III house, a double-height stone entrance recess between dark stone masses",
        media: "render",
      },
    ],
  },
  {
    slug: "gulberg-residencia-house",
    name: "Gulberg Residencia House",
    sector: "Residential",
    location: "Gulberg Residencia, Islamabad",
    summary:
      "A narrow frontage given its depth by vertical fins, a marble entrance panel and herringbone timber balconies.",
    description:
      "On a narrower plot the elevation earns its depth from layering rather than width. Vertical stone fins with concealed lighting hold one edge, a veined marble panel frames the timber entrance, and the balcony fronts are laid up in a herringbone timber pattern that catches light across the day. The porch takes two cars under the first floor, so the frontage gives nothing up to parking.",
    materials: [
      "Veined marble",
      "Grey stone fins",
      "Herringbone timber",
      "Panelled timber door",
      "Concealed uplighting",
    ],
    cover: "gulberg-residencia",
    coverMedia: "render",
    frames: [
      {
        key: "gulberg-residencia",
        alt: "Street elevation of the Gulberg Residencia house, marble entrance panel between stone fins and a covered porch",
        media: "render",
      },
    ],
  },
  {
    slug: "azad-kashmir-house",
    name: "Azad Kashmir House",
    sector: "Residential",
    location: "Azad Kashmir",
    summary:
      "Pale limestone banding run across grey stone, with a timber louvre screen shading the upper terrace.",
    description:
      "Horizontal bands of pale limestone run across grey stone cladding and tie the two floors into one composition. A screen of timber louvres stands beside the recessed upper terrace, shading it through the afternoon without closing it off. The porch is cut deep into the ground floor, and a continuous cove light washes the underside of every projecting slab, so the depth of the elevation still reads after dark.",
    materials: [
      "Grey stone cladding",
      "Pale limestone banding",
      "Timber louvres",
      "Glass balustrade",
      "Continuous cove lighting",
    ],
    cover: "azad-kashmir-dusk",
    coverMedia: "render",
    frames: [
      {
        key: "azad-kashmir-dusk",
        alt: "The Azad Kashmir house at dusk, limestone banding across grey stone with the cove lighting lit",
        media: "render",
      },
      {
        key: "azad-kashmir-day",
        alt: "The same elevation in daylight, showing the timber louvre screen and the recessed upper terrace",
        media: "render",
        caption: "The same elevation in daylight",
      },
    ],
  },
];

/** Only the sectors actually represented, so the filter never offers a dead option. */
export const sectors = [
  "All",
  ...Array.from(new Set(projects.map((p) => p.sector))),
] as const;

export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);

export const mediaLabel: Record<Media, string | null> = {
  photograph: null,
  render: "Render",
  drawing: "Drawing",
};

/** The spec pairs a project actually has, for the title block. */
export const projectSpecs = (p: Project): [string, string][] => {
  const rows: [string, string | undefined][] = [
    ["Sector", p.sector],
    ["Location", p.location],
    ["Plot", p.plot],
    ["Covered", p.covered],
    ["Year", p.year],
    ["Status", p.status],
  ];
  return rows.filter((row): row is [string, string] => Boolean(row[1]));
};
