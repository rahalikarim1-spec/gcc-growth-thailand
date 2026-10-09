export const locales = ["en", "th"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const localeMeta: Record<Locale, { htmlLang: string; ogLocale: string; label: string; name: string }> = {
  en: { htmlLang: "en", ogLocale: "en_US", label: "EN", name: "English" },
  th: { htmlLang: "th", ogLocale: "th_TH", label: "ไทย", name: "ไทย" },
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Build a locale-prefixed path with trailing slash. `path` is locale-independent, e.g. "/services/arabic-seo". */
export function localePath(locale: Locale, path = ""): string {
  const clean = path.replace(/^\/+|\/+$/g, "");
  return clean ? `/${locale}/${clean}/` : `/${locale}/`;
}
