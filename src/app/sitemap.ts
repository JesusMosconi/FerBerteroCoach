import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/config";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, lastModified: "2026-09-15" },
    { url: `${SITE_URL}/terminos-servicio`, lastModified: "2026-08-11" },
    { url: `${SITE_URL}/politica-privacidad`, lastModified: "2026-08-11" },
  ];
}
