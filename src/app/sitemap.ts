import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = (siteConfig.seo.canonicalUrl || siteConfig.siteUrl).replace(/\/$/, "");
  return [
    {
      url: `${base}/`,
      lastModified: new Date("2026-10-14"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
