/**
 * Every word on the site lives here or in projects.ts.
 * Edit copy in this file. No need to touch components.
 */

export const SITE_URL = "https://vectorvda.com";

export const studio = {
  name: "Vector Design Atelier",
  tagline: "Where design finds direction",
  discipline: "Architecture & Construction",
  architect: "Omer Jilani",
  credential: "MPCATP",
  credentialFull:
    "Registered with the Pakistan Council of Architects and Town Planners",
  address: {
    line1: "Apt. 16, 3rd Floor",
    line2: "Gulberg Trade Center",
    city: "Islamabad",
    country: "Pakistan",
  },
  phone: "+92 313 888 22 07",
  phoneRaw: "923138882207",
  email: "omerjilani@yahoo.com",
  social: {
    // TODO: confirm full URLs. The business card lists handles only
    instagram: "https://instagram.com/vectordesignatelier",
    facebook: "https://facebook.com/vectordesignatelier",
  },
  intro:
    "A multidisciplinary architecture studio in Islamabad, creating thoughtful and sustainable spaces that connect people with purpose.",
} as const;

export const whatsappHref = (message?: string) =>
  `https://wa.me/${studio.phoneRaw}${
    message ? `?text=${encodeURIComponent(message)}` : ""
  }`;

export const nav = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/studio", label: "Studio" },
  { href: "/contact", label: "Contact" },
] as const;

export const authorities = [
  "MPCATP Registered Architect",
  "CDA",
  "DHA Islamabad",
  "Bahria Town",
  "Gulberg Greens",
  "Design & Build",
] as const;

export type Service = {
  slug: string;
  number: string;
  title: string;
  promise: string;
  body: string;
  deliverables: string[];
  image: "architecture" | "interior" | "approvals" | "construction" | "renovation";
};

export const services: Service[] = [
  {
    slug: "architectural-design",
    number: "01",
    title: "Architectural Design",
    promise: "From site study to drawings an authority will accept.",
    body: "We begin on the plot, not on the screen. Orientation, levels, access and the bylaws that govern the site set the constraints, and the design answers them. You see plans, massing and 3D views before anything is committed to a working drawing.",
    deliverables: [
      "Site & sun study",
      "Concept design",
      "3D visualisation",
      "Working drawings",
      "Structural coordination",
      "Bill of quantities",
    ],
    image: "architecture",
  },
  {
    slug: "interior-design",
    number: "02",
    title: "Interior Design",
    promise: "The inside resolved as carefully as the outside.",
    body: "Interiors are drawn as architecture, not decoration: joinery detailed, lighting planned to the layout, and materials chosen for how they age in this climate rather than how they photograph on the day of handover.",
    deliverables: [
      "Space planning",
      "Joinery details",
      "Material & finish schedule",
      "Lighting layout",
      "Furniture selection",
      "Site supervision",
    ],
    image: "interior",
  },
  {
    slug: "planning-approvals",
    number: "03",
    title: "Planning & Approvals",
    promise: "Drawings that clear CDA the first time.",
    body: "Drawings are checked against your authority's bylaws before they are submitted, not after they are returned. We prepare the submission set, file it, and follow it through until the map is sanctioned.",
    deliverables: [
      "Bylaw compliance check",
      "Submission drawing set",
      "Structural stability certificate coordination",
      "CDA / DHA / Bahria / Gulberg submission",
      "Follow-up until sanction",
    ],
    image: "approvals",
  },
  {
    slug: "construction",
    number: "04",
    title: "Construction",
    promise: "We build what we drew.",
    body: "The same studio that designed the building takes it through construction, which removes the argument about who is responsible when something on site does not match the drawing. Stage-wise costing, material approvals, and a written report at every site visit.",
    deliverables: [
      "Grey structure",
      "Finishing",
      "Contractor & labour management",
      "Material procurement",
      "Quality checks",
      "Stage-wise costing",
    ],
    image: "construction",
  },
  {
    slug: "renovation-additions",
    number: "05",
    title: "Renovation & Additions",
    promise: "Working with what is already standing.",
    body: "Existing buildings carry constraints a new plot does not: a structure that has to hold, a family that has to keep living there. We survey first, establish what the frame can take, and phase the work so the house stays usable.",
    deliverables: [
      "Condition survey",
      "Structural feasibility",
      "Phased plan for occupied homes",
      "Vertical addition",
      "Facade upgrade",
    ],
    image: "renovation",
  },
];

export type ProcessStep = {
  number: string;
  title: string;
  body: string;
  duration: string;
};

export const process: ProcessStep[] = [
  {
    number: "01",
    title: "Brief & site study",
    body: "We visit the plot and check orientation, levels, access and the bylaws that govern it. You get a written brief and a feasibility note before any design begins.",
    duration: "1 to 2 weeks",
  },
  {
    number: "02",
    title: "Concept design",
    body: "Plans, massing and 3D views. Two rounds of revision included. Nothing moves forward until you have signed off the concept.",
    duration: "2 to 4 weeks",
  },
  {
    number: "03",
    title: "Approvals",
    body: "Submission set prepared to CDA or your society's bylaws, submitted, and followed up until the map is sanctioned.",
    duration: "3 to 8 weeks",
  },
  {
    number: "04",
    title: "Construction",
    body: "Working drawings issued to site. Stage-wise costing, material approvals, and a site visit with a written report at every milestone.",
    duration: "Project-dependent",
  },
  {
    number: "05",
    title: "Handover",
    body: "Snag list, resolution, and a complete drawing set for your records, including what is behind the walls.",
    duration: "2 weeks",
  },
];

export type CostLine = {
  line: string;
  range: string;
  note: string;
};

export const costs: CostLine[] = [
  {
    line: "Grey structure",
    range: "Rs 1,800 to 2,800 / sq ft",
    note: "Varies with span, storeys and steel rates",
  },
  {
    line: "Standard finishing",
    range: "Rs 4,500 to 5,500 / sq ft",
    note: "Local materials, good fittings",
  },
  {
    line: "Luxury finishing",
    range: "Rs 6,500 to 8,500 / sq ft",
    note: "Imported finishes, bespoke joinery",
  },
  {
    line: "Design fee",
    range: "5 to 10% of construction cost",
    note: "Depends on scope, and whether interiors are included",
  },
  {
    line: "CDA / society approval",
    range: "Billed at actual",
    note: "The authority's fee, not ours",
  },
];

export const faqs = [
  {
    q: "Do you build, or only design?",
    a: "Both. You can hire us for design alone, or for design and construction together. Most clients choose the second, because it removes the argument about who is responsible when something on site does not match the drawing.",
  },
  {
    q: "What does the architect actually cost?",
    a: "Design fees run 5 to 10% of construction cost, depending on scope and whether interiors are included. You get the figure in writing after the site study, not a number over the phone before anyone has seen your plot.",
  },
  {
    q: "Will my map get approved?",
    a: "Drawings are prepared by a PCATP-registered architect and checked against your authority's bylaws before they are submitted. We handle submission and follow-up. Approval fees belong to the authority and are billed at actual.",
  },
  {
    q: "How long does a house take?",
    a: "Design and approvals usually run three to five months. Construction depends on size and finish level. You get a programme at concept stage and an update at every site visit.",
  },
  {
    q: "What plot sizes do you work with?",
    a: "From 5 marla to 1 kanal and above, plus commercial floors and fit-outs. The smaller the plot, the more the planning matters.",
  },
  {
    q: "Do you work outside Islamabad?",
    a: "Rawalpindi routinely. Further afield depending on scope. Just ask.",
  },
] as const;
