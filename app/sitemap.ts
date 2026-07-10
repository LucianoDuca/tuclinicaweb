import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://tuclinicaweb.com";
  return [
    { url: base, priority: 1 },
    { url: `${base}/servicios`, priority: 0.9 },
    { url: `${base}/precios`, priority: 0.9 },
    { url: `${base}/nosotros`, priority: 0.7 },
    { url: `${base}/contacto`, priority: 0.8 },
    { url: `${base}/aviso-legal`, priority: 0.2 },
    { url: `${base}/privacidad`, priority: 0.2 },
    { url: `${base}/cookies`, priority: 0.2 },
  ];
}
