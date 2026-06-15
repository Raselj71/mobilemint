# MobileMint

The official site for **MobileMint** — an independent mobile app studio. It serves as the
studio landing page, the public showcase for published apps, and the host for each app's
privacy policy (as required by the Google Play Console).

Built with **Next.js 14** (App Router) and exported as a fully static site. No backend, no
database — just fast static HTML deployable anywhere.

## Commands

```bash
npm install      # install dependencies
npm run dev      # local dev server → http://localhost:3000
npm run build    # static export → ./out
npm run typecheck
npm run lint
```

`next.config.mjs` sets `output: "export"`, so `npm run build` produces a static site in `out/`.

## Project structure

```
app/
  page.tsx                     landing page
  apps/page.tsx                all apps grid
  apps/[slug]/page.tsx         app detail (one per app, prerendered)
  apps/[slug]/privacy/page.tsx per-app privacy policy
  privacy/page.tsx             website privacy policy
  about/ contact/              studio pages
  sitemap.ts  robots.ts        SEO
components/                    Navbar, Footer, AppCard, PhoneMockup, PrivacyPolicy, …
lib/
  site.ts                      brand/contact constants (edit me first)
  apps.ts                      THE app catalog + privacy metadata
public/brand/                  logo + icon source files
```

## Adding or editing an app

Everything about an app lives in **`lib/apps.ts`**. To add one, append an object to the
`apps` array with its name, tagline, category, status (`"live"` or `"coming-soon"`),
Play Store URL, features, mock screens, and a `privacy` block. The app detail page, the
privacy policy page, the apps grid, the footer, and the sitemap all update automatically.

The privacy policy for each app is **generated** from its `privacy` metadata
(`components/PrivacyPolicy.tsx`), so the wording stays consistent and Play-compliant. Set the
flags (`collectsPersonalData`, `showsAds`, `usesAnalytics`, etc.), list `dataPoints` and
`thirdParties`, and the policy text adapts.

> The three apps currently in the catalog (Sprout, Airwave, Splitly) are **realistic
> placeholders**. Replace their copy, Play Store URLs, and privacy data with your real apps.

## App icons & screenshots

There are **no binary placeholder images**. App icons are drawn from each app's `accent`
colors + `glyph` (`components/AppIcon.tsx`), and screenshots are rendered as styled phone
mockups (`components/PhoneMockup.tsx`). To use real Play Store screenshots later, swap the
`PhoneMockup` usage for `<img>`/`next/image` tags.

## Brand

Edit `lib/site.ts` for the studio name, contact email (`rasel.dev.cse@gmail.com`), domain,
and Google Play developer URL. The mint palette lives in `tailwind.config.ts`.

## Deploying to Vercel

1. Push this repo to GitHub.
2. Import it in Vercel — it auto-detects Next.js. No env vars needed.
3. Add your custom domain (e.g. `mobilemint.dev`) in Vercel → Project → Domains.
4. Update `site.url` / `site.domain` in `lib/site.ts` to the final domain.

Each app's privacy policy will then live at, e.g.,
`https://mobilemint.dev/apps/sprout/privacy/` — paste that URL into the Play Console listing.
