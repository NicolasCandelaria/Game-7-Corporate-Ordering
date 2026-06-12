# GAME 7 Corporate Program — Website

Premium marketing/showcase site for the GAME 7 corporate customization program,
distributed by Billboard Agency International. Not a store: no pricing, no cart,
no checkout — all commercial conversation routes to the inquiry form.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4 (GAME 7 design tokens in `src/app/globals.css`)
- Framer Motion (scroll reveals, micro-interactions)
- Local brand fonts served from `public/fonts/`: Pilat Wide, Neue Haas Grotesk
  Display Pro, and Suisse Intl Mono for web-legible labels/specs.
- lucide-react icons

## Local development

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production build
```

## Deploy to Vercel

1. Push this repo to GitHub/GitLab/Bitbucket.
2. Import the repo at [vercel.com/new](https://vercel.com/new) — defaults work
   (framework auto-detected as Next.js).
3. Add any environment variables for the form provider (below) and deploy.

## Wiring the inquiry form

Submissions POST JSON to `src/app/api/inquiry/route.ts`. The route validates and
currently logs + returns success. One clearly marked **PROVIDER INTEGRATION
POINT** comment block in that file shows the swap for either:

- **Resend (email):** `npm i resend`, set `RESEND_API_KEY`, uncomment the Resend
  snippet.
- **Formspree / webhook:** set `INQUIRY_WEBHOOK_URL` and uncomment the fetch
  snippet.

### Spreadsheet export (future)

If submissions should land in a spreadsheet, point the webhook variant at a
Zapier/Make scenario that appends rows to Google Sheets (or write to the Sheets
API directly from the route). Not built in the one-shot by design.

## Future quote-cart ("inquiry list")

The seams exist; the cart does not:

- `src/lib/inquiry.ts` → `addToInquiry(slug)` is the single entry point used by
  every "Request this item" action. Replace its body with a store write (e.g.
  Zustand) to persist items.
- `InquiryForm` already models selected items as `{ slug, name }[]`
  (`ItemSelector`), so a persistent list drops in without restructuring.

## Content and assets

- **Products:** `src/data/products.ts` (typed by `src/lib/types.ts`). Isolated
  data layer — a CMS can replace it later. `baseGarmentRef` is internal-only and
  never rendered.
- **Placeholders:** all product/editorial/partner images are generated labeled
  SVG tiles. Regenerate with `node scripts/generate-placeholders.mjs`. Replace
  with real photography at the same paths (update extensions in
  `src/data/products.ts`), then remove `images.dangerouslyAllowSVG` from
  `next.config.ts`.
- **Brand marks:** placeholder SVGs in `public/brand/` — swap with official
  Horizontal Primary, Primary (stacked), and Icon Mark files. Single color only.
- **Fonts:** supplied brand fonts live in `fonts/` and are served from
  `public/fonts/` via `@font-face` in `src/app/globals.css`. The web mono uses
  Suisse Intl Mono for readability.
