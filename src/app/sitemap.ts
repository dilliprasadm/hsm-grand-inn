import type { MetadataRoute } from "next";
import { ROOMS } from "@/lib/constants/rooms";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://hsmgrandinn.com";

  // Static routes
  const staticRoutes = ["", "/about", "/rooms", "/gallery", "/contact"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Dynamic room details routes
  const roomRoutes = ROOMS.map((room) => ({
    url: `${baseUrl}/rooms/${room.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...roomRoutes];
}
