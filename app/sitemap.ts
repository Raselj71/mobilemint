import type { MetadataRoute } from "next";
import { apps } from "@/lib/apps";
import { getAllPosts } from "@/lib/blog";
import { absoluteUrl } from "@/lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/apps", "/blog", "/about", "/hire", "/privacy", "/contact"].map((path) => ({
    url: absoluteUrl(path),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const appRoutes = apps.flatMap((a) => [
    { url: absoluteUrl(`/apps/${a.slug}`), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: absoluteUrl(`/apps/${a.slug}/privacy`), changeFrequency: "yearly" as const, priority: 0.5 },
    ...(a.terms
      ? [{ url: absoluteUrl(`/apps/${a.slug}/terms`), changeFrequency: "yearly" as const, priority: 0.5 }]
      : []),
  ]);

  const blogRoutes = getAllPosts().map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: post.date,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...appRoutes, ...blogRoutes];
}
