import type { MetadataRoute } from "next";
import { apps } from "@/lib/apps";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/apps", "/about", "/hire", "/privacy", "/contact"].map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const appRoutes = apps.flatMap((a) => [
    { url: `${site.url}/apps/${a.slug}`, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${site.url}/apps/${a.slug}/privacy`, changeFrequency: "yearly" as const, priority: 0.5 },
  ]);

  return [...staticRoutes, ...appRoutes];
}
