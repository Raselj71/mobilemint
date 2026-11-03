import type { Metadata } from "next";
import { site } from "@/lib/site";

/** Open Graph share image size (the standard 1.91:1 card). */
export const ogSize = { width: 1200, height: 630 } as const;

/**
 * Absolute URL for a site path. The site is exported with `trailingSlash: true`,
 * so every page is served at a path ending in "/" — canonicals, Open Graph URLs,
 * structured data and the sitemap must all use that exact form.
 */
export function absoluteUrl(path = "/"): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${site.url}${clean.endsWith("/") ? clean : `${clean}/`}`;
}

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  /** Absolute URL of a 1200x630 share image (see lib/og.tsx). */
  image?: { url: string; alt: string };
  openGraph?: NonNullable<Metadata["openGraph"]>;
};

/**
 * Page metadata with a canonical URL and matching Open Graph / Twitter tags.
 * Page-level `openGraph` replaces the layout's wholesale, so the shared fields
 * (site name, locale, URL) are restated here.
 */
export function pageMetadata({ title, description, path, image, openGraph }: PageMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const images = image ? [{ url: image.url, width: ogSize.width, height: ogSize.height, alt: image.alt }] : undefined;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: "en_US",
      title,
      description,
      url,
      images,
      ...openGraph,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images,
    },
  };
}
