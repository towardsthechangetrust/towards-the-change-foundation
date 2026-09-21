import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: {
    path: string;
    priority: number;
    changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  }[] = [
    { path: "", priority: 1.0, changeFrequency: "weekly" },
    { path: "/programs", priority: 0.9, changeFrequency: "monthly" },
    { path: "/gallery", priority: 0.9, changeFrequency: "weekly" },
    { path: "/donate", priority: 0.85, changeFrequency: "monthly" },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
  ];

  return routes.map((route) => ({
    url: `${site.url}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
