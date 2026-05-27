import type { MetadataRoute } from "next";
import { seoPages } from "@/lib/seo-pages";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = ["/", "/about", "/contact", "/guides"].map(r => ({
    url: `${site.url}${r}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: r === "/" ? 1 : 0.8,
  }));
  const seo = seoPages.map(p => ({
    url: `${site.url}/seo/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));
  return [...staticRoutes, ...seo];
}
