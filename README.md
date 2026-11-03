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
  blog/page.tsx                blog index (lists every post)
  blog/[slug]/page.tsx         blog post (one per .md file, prerendered)
  blog/*.md                    blog post sources (markdown + frontmatter)
  blog/og.png/ blog/[slug]/og.png/   share-image routes (1200x630 PNG, built statically)
  privacy/page.tsx             website privacy policy
  about/ contact/              studio pages
  sitemap.ts  robots.ts        SEO
components/                    Navbar, Footer, AppCard, PhoneMockup, PrivacyPolicy, …
lib/
  site.ts                      brand/contact constants (edit me first)
  apps.ts                      THE app catalog + privacy metadata
  blog.ts                      reads + parses the blog markdown posts
  seo.ts                       canonical URLs + Open Graph/Twitter metadata helper
  og.tsx                       renders the branded share images
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

## Adding a blog post

Drop a new markdown file in **`app/blog/`** with this frontmatter. The blog index, the post
page, the sitemap, structured data, and the share image are all generated from it
(newest `date` first):

```md
---
title: "Post title"
description: "One or two sentences — keep it under 160 characters."
date: "2026-10-11"
slug: "url-slug"
---
```

- **`slug`** should match an app's slug in `lib/apps.ts` to show that app's icon on the card,
  an app card + Play Store button at the end of the post, and `about` in the structured data.
- **`description`** is used as the meta description, the Open Graph description, and the card
  text. Search engines truncate past ~160 characters.
- Files without a `slug` are ignored. GitHub-flavored markdown (tables, blockquotes, lists)
  is supported; a `#` heading in the body renders as an `<h2>` because the page title is the `<h1>`.

### SEO

Each post and the blog index ship with a canonical URL, Open Graph + Twitter tags, a generated
`og.png` share image, and JSON-LD (`BlogPosting` / `Blog` + `BreadcrumbList`). All URLs use a
trailing slash to match `trailingSlash: true` in `next.config.mjs` — build them with
`absoluteUrl()` from `lib/seo.ts`, as the sitemap does. Use `pageMetadata()` for the same
treatment on other pages.

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
