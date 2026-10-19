export const locales = ["en", "th", "ar"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const localeMeta: Record<Locale, { htmlLang: string; ogLocale: string; label: string; name: string; dir: "ltr" | "rtl" }> = {
  en: { htmlLang: "en", ogLocale: "en_US", label: "EN", name: "English", dir: "ltr" },
  th: { htmlLang: "th", ogLocale: "th_TH", label: "ไทย", name: "ไทย", dir: "ltr" },
  ar: { htmlLang: "ar", ogLocale: "ar_AR", label: "العربية", name: "العربية", dir: "rtl" },
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/**
 * Build the public path (with trailing slash) for a page. `path` is locale-independent, e.g. "/services/arabic-seo".
 * The default locale (English) has no prefix; every other locale is prefixed (/th/..., /ar/...).
 * next.config.ts serves the unprefixed English URLs by rewriting them to the internal /en/... route.
 */
export function localePath(locale: Locale, path = ""): string {
  const clean = path.replace(/^\/+|\/+$/g, "");
  const prefix = locale === defaultLocale ? "" : `/${locale}`;
  return clean ? `${prefix}/${clean}/` : `${prefix}/`;
}

/**
 * Split a pathname into its locale and the locale-independent remainder ("/services/"). Unprefixed = default locale.
 * The internal "/en/..." form (what the router reports for rewritten English URLs) is accepted too, so server and
 * client agree whichever they see.
 */
export function splitLocalePath(pathname: string): { locale: Locale; rest: string } {
  const [, first = "", ...tail] = pathname.split("/");
  if (isLocale(first)) return { locale: first, rest: `/${tail.join("/")}` };
  return { locale: defaultLocale, rest: pathname || "/" };
}
