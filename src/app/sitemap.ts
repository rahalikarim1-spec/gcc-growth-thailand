import type { MetadataRoute } from "next";
import { localePath, locales } from "@/lib/i18n";
import { INDUSTRY_SLUGS, SERVICE_SLUGS } from "@/lib/routes";
import { languageAlternates } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";

// /insights is intentionally excluded: it is noindex until verified research exists.
const paths = ["", "/about", "/services", ...SERVICE_SLUGS.map((s) => `/services/${s}`), "/industries", ...INDUSTRY_SLUGS.map((s) => `/industries/${s}`), "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.flatMap((path) =>
    locales.map((l) => ({
      url: absoluteUrl(localePath(l, path)),
      changeFrequency: path === "" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "" ? 1 : path.split("/").length > 2 ? 0.7 : 0.8,
      alternates: { languages: languageAlternates(path) },
    })),
  );
}
