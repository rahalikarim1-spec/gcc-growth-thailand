import type { Metadata } from "next";
import { defaultLocale, localeMeta, locales, localePath, type Locale } from "./i18n";
import { absoluteUrl } from "./site";

interface PageMetaInput {
  locale: Locale;
  /** Locale-independent path, e.g. "/services/arabic-seo". Empty string = home. */
  path: string;
  title: string;
  description: string;
  noindex?: boolean;
}

/** hreflang map incl. x-default. Slugs are identical across locales so paths mirror 1:1. */
export function languageAlternates(path: string): Record<string, string> {
  const map: Record<string, string> = {};
  for (const l of locales) map[localeMeta[l].htmlLang] = absoluteUrl(localePath(l, path));
  map["x-default"] = absoluteUrl(localePath(defaultLocale, path));
  return map;
}

export function buildMetadata({ locale, path, title, description, noindex }: PageMetaInput): Metadata {
  const url = absoluteUrl(localePath(locale, path));
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url, languages: languageAlternates(path) },
    robots: noindex ? { index: false, follow: true } : undefined,
    openGraph: {
      type: "website",
      url,
      title,
      description,
      siteName: "Wadhah Belhassen",
      locale: localeMeta[locale].ogLocale,
      alternateLocale: locales.filter((l) => l !== locale).map((l) => localeMeta[l].ogLocale),
      images: [{ url: absoluteUrl(`${localePath(locale)}opengraph-image/`), width: 1200, height: 630, alt: "Wadhah Belhassen — GCC & Arabic Market Growth" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl(`${localePath(locale)}opengraph-image/`)],
    },
  };
}
