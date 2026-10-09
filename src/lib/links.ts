import { localePath, type Locale } from "./i18n";
import { isIndustrySlug, isServiceSlug } from "./routes";

/** Resolve a content link target ("service:arabic-seo", "industry:dental-clinics", "page:contact") to a localized path. */
export function resolveTarget(locale: Locale, target: string): string {
  const [kind, slug] = target.split(":");
  if (kind === "service" && isServiceSlug(slug)) return localePath(locale, `/services/${slug}`);
  if (kind === "industry" && isIndustrySlug(slug)) return localePath(locale, `/industries/${slug}`);
  if (kind === "page") return localePath(locale, `/${slug}`);
  throw new Error(`Invalid content link target: ${target}`);
}
