# Vector Design Atelier

Website for the architecture and construction studio of Omer Jilani, MPCATP,
Gulberg, Islamabad.

Next.js 16 (App Router) · React 19 · Tailwind v4 · TypeScript.

```bash
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
npm run lint
```

---

## Before you launch

**1. Replace the placeholder projects.** `lib/projects.ts` holds six structural
placeholders illustrated with licensed stock photography of *other architects'
buildings*. Clients in this market do reverse image searches, and one hit ends
the conversation. Replace every entry with real work before this site is public.
Each entry has a `media` field: set it to `"render"` or `"drawing"` when there is
no photograph and the page will caption it honestly. An honest render beats a
beautiful photograph of somebody else's building.

**2. Add a photograph of Omer.** `app/studio/page.tsx` uses a stand-in image,
marked with a `TODO`.

**3. Set the real domain.** `SITE_URL` in `lib/site.ts` feeds the metadata,
`sitemap.xml`, `robots.txt` and the JSON-LD.

**4. Fill in the mail credentials.** See "Contact form and email" below. Until
they are set, the form tells visitors to use WhatsApp instead of failing quietly.

**5. Confirm the social URLs.** `studio.social` in `lib/site.ts`. The business
card lists handles, not links.

**6. Confirm the numbers you publish.** The process durations and cost ranges in
`lib/site.ts` are realistic Islamabad market figures for 2026. They should be
your figures before they go live.

---

## Where things live

| What | Where |
| --- | --- |
| All site copy: services, process, costs, FAQs, contact details | `lib/site.ts` |
| Projects | `lib/projects.ts` |
| Image imports (static, for blur placeholders) | `lib/images.ts` |
| Design tokens: colours, fonts, motion | `app/globals.css` |
| Shared UI: Container, SectionHead, Button | `components/ui.tsx` |
| Page sections: services, process, costs, FAQ, CTA | `components/sections.tsx` |
| Contact API | `app/api/contact/route.ts` |

Copy changes almost never require touching a component.

### Adding a project

1. Drop images into `public/img/`.
2. Add the imports to `lib/images.ts` (`projectImages` for the cover,
   `galleryImages` for the rest).
3. Add an entry to `projects` in `lib/projects.ts` and remove `placeholder: true`.

The route, the sitemap entry and the metadata all generate themselves.

---

## Design system

Every colour is sampled directly out of `public/business card.jpeg` and
`public/logo.jpeg`. The identity already existed; the site extends it.

| Token | Value | Role |
| --- | --- | --- |
| `sage` | `#5F6D61` | The card's band and the logo arc. Primary. |
| `bone` | `#F4F2EC` | Page ground. |
| `brass` | `#AE9573` | The card's sidebar. Accent only. |
| `ink` | `#141815` | The logo mark. Text and rules. |
| `stone` | `#5C645B` | Secondary text. A grey biased toward the sage. |

**Type.** Jost for display, chosen as the closest match to the letterforms in the
existing VECTOR wordmark. Newsreader for body text. IBM Plex Mono for specs,
rates and plot sizes, because architectural drawings are annotated in mono. Only
the weights the site actually uses are loaded.

**The structural motif** is the drawing title block: project pages open with a
spec strip (sector, location, plot, covered area, year, status) set in mono
against a hairline grid, the way an architect labels a sheet.

**House style.** No en dashes or em dashes anywhere in the copy. Use a comma, a
colon or a full stop instead.

---

## Performance

Production build, mobile viewport, first load:

| | |
| --- | --- |
| Total transfer | ~400 KB |
| JS | 140 KB (React and Next baseline) |
| CSS | 8 KB |
| Fonts | 93 KB, 6 faces |
| First Contentful Paint | ~360 ms |

What keeps it there:

- **Server components everywhere** except the mobile menu and the contact form.
- **Images are local**, imported statically so Next reads their intrinsic
  dimensions and generates a blur placeholder at build time. No layout shift, no
  runtime dependency on an external image host, served as AVIF or WebP.
- **Scroll reveals are pure CSS** via `animation-timeline: view()`, guarded by
  `@supports` and `prefers-reduced-motion`. Browsers without support simply
  render everything visible. Nothing is hidden behind a script that might not run.
- **The FAQ is a native `<details>`**, so there is no accordion library.
- **Fonts are self-hosted** through `next/font`, subset to latin.

---

## Contact form and email

Enquiries POST to `app/api/contact/route.ts`, which sends them through Nodemailer
to the studio mailbox. Copy `.env.example` to `.env.local` and fill in:

```bash
EMAIL_USERNAME=you@yourdomain.com     # Namecheap Private Email mailbox
EMAIL_PASSWORD=your-mailbox-password
# EMAIL_HOST=mail.privateemail.com    # default
# EMAIL_PORT=465                      # default. 465 = SSL, 587 = STARTTLS
# CONTACT_TO=                         # defaults to EMAIL_USERNAME
```

`EMAIL_USERNAME` must be the full address of the mailbox. Namecheap rejects a
`From` header that is not the authenticated mailbox, so mail is sent from the
studio address with `Reply-To` set to the enquirer. Hitting reply in your mail
client goes straight back to the client.

The route validates the input, carries a hidden honeypot field to absorb bots,
throttles to five messages an hour per IP, and returns a readable error that
always falls back to the WhatsApp number. The enquiry arrives as a formatted
HTML email in the studio's own colours.

Set the same variables in your host's environment settings when you deploy.

---

## Notes

- The header sets `backdrop-filter`, which makes it the containing block for any
  fixed-position descendant. The mobile menu is therefore portalled to
  `document.body`. Do not move it back inside the header, or the overlay will be
  trapped in the 64px header box. There is a comment explaining this in
  `components/MobileMenu.tsx`.
- `public/logo-mark.png` and `public/logo-full.png` are generated from
  `logo.jpeg` with the white ground keyed out to real transparency and the
  result trimmed to its bounds. Regenerate them if the logo file ever changes.
- The hero is sized `calc(100dvh - 65px)` on mobile and `calc(100dvh - 75px)`
  from `md` up. Those numbers are the header height *plus its bottom border*, so
  the hero ends exactly at the fold with nothing of the next section peeking
  below it. If you change the header height, change these to match.
