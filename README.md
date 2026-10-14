# VERSO V3 — The Moving Gallery

A cinematic company-profile template for the BilguunSoft collection. The first screen is a full-width image carousel. The rest of the site moves through an editorial story, an immersive service selector, a people gallery, and a champagne contact finale.

Visitor-facing copy is professional Mongolian Cyrillic. Short English labels are editorial.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
```

`output: 'export'` writes a static site to `out/`. That folder can be deployed on Vercel or any static host.

## Rebrand in this order

1. **Identity** — edit `src/config/site.ts`.
   - `companyName`, `logoText`, `galleryName`, `companyTagline`
   - `phone`, `email`, `address`, `socialLinks`
   - `year`, `copyright`, `creditLabel`, `creditUrl`
   - `siteUrl` and `seo.canonicalUrl`, `seo.title`, `seo.description`
2. **Color** — edit `src/config/theme.ts`. The layout injects these values as CSS variables. Keep contrast: ivory text on dark green, dark text on champagne.
3. **Carousel** — edit `src/data/heroSlides.ts` and replace files in `public/images/carousel/`.
4. **Story** — edit `src/data/companyStory.ts` and `public/images/editorial/`.
5. **Services** — edit `src/data/services.ts` and `public/images/services/`.
6. **People** — edit `src/data/people.ts` and `public/images/people/`.
7. **Contact finale and drawer copy** — edit `src/data/contact.ts`.
8. **Navigation labels** — edit `src/data/navigation.ts`.
9. **Favicon** — replace `src/app/icon.svg`.

Do not paste HTML into the data files. Headlines are arrays of lines. A line is an array of text runs. Set `highlight: true` on the run that should render as italic serif.

```ts
headline: [
  [{ text: "ӨӨР ӨНЦӨГ." }],
  [{ text: "ИЛҮҮ ӨРГӨН", highlight: true }],
  [{ text: "БОЛОМЖ." }],
]
```

Mongolian `Ө ө Ү ү` need Manrope and Noto Serif. Both are loaded with a Cyrillic subset. Do not swap in a Latin-only display font.

## Carousel

Slides live in `src/data/heroSlides.ts`.

| Field | Role |
| --- | --- |
| `category` | Top-right slide label |
| `overline` | Small champagne line above the headline |
| `headline` | Structured lines, with one optional serif highlight |
| `description` | Supporting paragraph |
| `image`, `alt`, `imagePosition` | Photograph, description, and CSS object-position |
| `thumbnailLabel` | Label on the thumbnail, such as `01 / ХАРАА` |
| `shortLabel` | Label under the slide counter |
| `ctaLabel`, `ctaTarget` | Button text and in-page link |

Replace the JPG, keep the same path, or change `image` to a new path under `public/`. Use wide photographs, at least 1800px on the long edge. Write an `alt` that describes the picture and, for demo shots of people, states that they are not real staff.

`siteConfig.carousel.autoplay` is `false`. Leave it off unless you also keep the built-in safeguards: autoplay pauses on hover, focus, manual interaction, a hidden tab, and reduced motion. A pause control appears only when autoplay is enabled.

## Contact form

`siteConfig.contactMethod` controls delivery.

| Value | Behavior |
| --- | --- |
| `demo` | Default. The form says, before and after submit, that nothing was sent. |
| `mailto` | Opens the visitor’s email app using `email`. The site does not claim the message was delivered. |
| `formspree` | `POST`s JSON to `contactEndpoint`. A success message appears only after an HTTP 2xx response. |

`contactEndpoint` must be an `https://` URL. An invalid Formspree setup falls back to demo mode.

Name and phone are required. Email is optional, and must be valid when it is filled in.

The header, the service panel, and the contact finale open the same drawer. A service button preselects that discipline.

## Motion

GSAP ScrollTrigger reveals section headings, images, and the footer wordmark. The carousel crossfades with CSS.

- The footer control, and the mobile menu, switch Motion ON / OFF. The choice is stored in `localStorage`.
- With no saved choice, `prefers-reduced-motion: reduce` turns decorative motion off.
- Motion OFF keeps navigation, the carousel, the service selector, and the form working. It removes zoom and scroll reveals and shows content immediately.

## SEO

- Page title and description come from `siteConfig.seo`.
- `lang="mn"` is set on the document.
- Set `seo.canonicalUrl` to the live absolute origin when the domain is known. Until then, no canonical link is emitted.
- `src/app/sitemap.ts` and `src/app/robots.ts` use `canonicalUrl` or, if that is empty, `siteUrl`.
- Replace `siteUrl` (`https://verso.example`) before launch.

## Deployment

Vercel: import the project. The build command is `npm run build`. Because the site is a static export, set the output directory to `out` if the project is not auto-detected.

Any static host can serve the `out` folder. There is no database, authentication, or server action.

## Photographs

The JPGs in `public/images/` are **demonstration images** downloaded from Unsplash for layout preview. They do not show VERSO staff, clients, or offices.

Unsplash License allows many uses, but it does not automatically let a template vendor resell those files as stock photography. Before you sell or deliver this template to a client, replace every photograph with images the client owns or has licensed for that use.

Demo sources:

| File | Unsplash photo |
| --- | --- |
| `public/images/carousel/perspective.jpg` | `photo-1486406146926-c627a92ad1ab` |
| `public/images/carousel/people.jpg` | `photo-1517048676732-d65bc937f952` |
| `public/images/carousel/future.jpg` | `photo-1524758631624-e2822e304c36` |
| `public/images/editorial/workspace.jpg` | `photo-1497215728101-856f4ea42174` |
| `public/images/services/strategy.jpg` | `photo-1552664730-d307ca884978` |
| `public/images/services/operations.jpg` | `photo-1497366754035-f200968a6e72` |
| `public/images/services/delivery.jpg` | `photo-1517245386807-bb43f82c33c4` |
| `public/images/people/connect.jpg` | `photo-1522071820081-009f0129c71c` |
| `public/images/people/create.jpg` | `photo-1497366811353-6870744d04b2` |

Image URLs follow `https://images.unsplash.com/<photo-id>`.

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Local development |
| `npm run build` | Static production export into `out/` |
| `npm run lint` | ESLint |

## Stack

Next.js App Router, React, TypeScript, Tailwind CSS, GSAP, ScrollTrigger, Lucide. No backend.
