import type { MetadataRoute } from "next";
import { apps } from "@/lib/apps";
import { getAllPosts } from "@/lib/blog";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/apps", "/blog", "/about", "/hire", "/privacy", "/contact"].map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const appRoutes = apps.flatMap((a) => [
    { url: `${site.url}/apps/${a.slug}`, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${site.url}/apps/${a.slug}/privacy`, changeFrequency: "yearly" as const, priority: 0.5 },
    ...(a.terms
      ? [{ url: `${site.url}/apps/${a.slug}/terms`, changeFrequency: "yearly" as const, priority: 0.5 }]
      : []),
  ]);

  const blogRoutes = getAllPosts().map((post) => ({
    url: `${site.url}/blog/${post.slug}`,
    lastModified: post.date,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...appRoutes, ...blogRoutes];
}
