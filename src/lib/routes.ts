export const SERVICE_SLUGS = [
  "gcc-market-entry",
  "market-intelligence",
  "arabic-localization",
  "google-ads-gcc",
  "arabic-seo",
  "local-seo",
  "arabic-landing-pages",
  "conversion-tracking",
] as const;
export type ServiceSlug = (typeof SERVICE_SLUGS)[number];

export const INDUSTRY_SLUGS = [
  "hair-transplant",
  "dental-clinics",
  "medical-tourism",
  "restaurants",
  "hotels",
  "travel",
  "muay-thai",
  "real-estate",
  "education",
  "professional-services",
  "b2b-exporters",
] as const;
export type IndustrySlug = (typeof INDUSTRY_SLUGS)[number];

export function isServiceSlug(v: string): v is ServiceSlug {
  return (SERVICE_SLUGS as readonly string[]).includes(v);
}
export function isIndustrySlug(v: string): v is IndustrySlug {
  return (INDUSTRY_SLUGS as readonly string[]).includes(v);
}

/** Semantic relationships. Locale-independent: copy lives in the content layer. */
export const serviceIndustries: Record<ServiceSlug, IndustrySlug[]> = {
  "gcc-market-entry": ["hair-transplant", "dental-clinics", "medical-tourism", "restaurants", "hotels", "real-estate", "b2b-exporters", "education", "professional-services"],
  "market-intelligence": ["medical-tourism", "b2b-exporters", "hotels", "travel", "real-estate", "education"],
  "arabic-localization": ["hair-transplant", "dental-clinics", "medical-tourism", "hotels", "restaurants", "education"],
  "google-ads-gcc": ["hair-transplant", "dental-clinics", "restaurants", "medical-tourism", "travel", "muay-thai", "b2b-exporters", "education"],
  "arabic-seo": ["restaurants", "dental-clinics", "medical-tourism", "hotels", "travel", "b2b-exporters", "professional-services"],
  "local-seo": ["restaurants", "hotels", "dental-clinics", "medical-tourism", "education", "professional-services"],
  "arabic-landing-pages": ["hair-transplant", "dental-clinics", "restaurants", "muay-thai", "real-estate", "education"],
  "conversion-tracking": ["hair-transplant", "restaurants", "medical-tourism", "real-estate", "hotels", "b2b-exporters"],
};

export const serviceRelatedServices: Record<ServiceSlug, ServiceSlug[]> = {
  "gcc-market-entry": ["market-intelligence", "arabic-localization", "google-ads-gcc"],
  "market-intelligence": ["gcc-market-entry", "arabic-seo", "google-ads-gcc"],
  "arabic-localization": ["arabic-landing-pages", "arabic-seo", "gcc-market-entry"],
  "google-ads-gcc": ["arabic-landing-pages", "conversion-tracking", "market-intelligence"],
  "arabic-seo": ["local-seo", "arabic-localization", "arabic-landing-pages"],
  "local-seo": ["arabic-seo", "arabic-landing-pages", "conversion-tracking"],
  "arabic-landing-pages": ["arabic-localization", "google-ads-gcc", "conversion-tracking"],
  "conversion-tracking": ["google-ads-gcc", "arabic-landing-pages", "gcc-market-entry"],
};

export const industryServices: Record<IndustrySlug, ServiceSlug[]> = {
  "hair-transplant": ["gcc-market-entry", "arabic-localization", "google-ads-gcc", "arabic-landing-pages", "conversion-tracking"],
  "dental-clinics": ["arabic-seo", "local-seo", "google-ads-gcc", "arabic-localization", "arabic-landing-pages", "conversion-tracking"],
  "medical-tourism": ["gcc-market-entry", "market-intelligence", "arabic-seo", "google-ads-gcc", "arabic-localization", "conversion-tracking"],
  restaurants: ["local-seo", "arabic-seo", "google-ads-gcc", "arabic-landing-pages", "conversion-tracking", "gcc-market-entry"],
  hotels: ["gcc-market-entry", "market-intelligence", "local-seo", "arabic-seo", "google-ads-gcc"],
  travel: ["gcc-market-entry", "google-ads-gcc", "arabic-seo"],
  "muay-thai": ["google-ads-gcc", "arabic-landing-pages", "conversion-tracking"],
  "real-estate": ["gcc-market-entry", "market-intelligence", "arabic-landing-pages", "google-ads-gcc", "conversion-tracking"],
  education: ["gcc-market-entry", "market-intelligence", "arabic-localization", "google-ads-gcc", "arabic-landing-pages"],
  "professional-services": ["gcc-market-entry", "arabic-seo", "local-seo", "arabic-landing-pages", "conversion-tracking"],
  "b2b-exporters": ["gcc-market-entry", "market-intelligence", "arabic-localization", "google-ads-gcc", "arabic-landing-pages", "conversion-tracking"],
};

export const industryRelatedIndustries: Record<IndustrySlug, IndustrySlug[]> = {
  "hair-transplant": ["medical-tourism", "dental-clinics"],
  "dental-clinics": ["hair-transplant", "medical-tourism"],
  "medical-tourism": ["hair-transplant", "dental-clinics", "hotels"],
  restaurants: ["hotels", "travel", "muay-thai"],
  hotels: ["travel", "restaurants", "medical-tourism"],
  travel: ["hotels", "restaurants", "muay-thai"],
  "muay-thai": ["travel", "hotels"],
  "real-estate": ["hotels", "travel", "professional-services"],
  education: ["professional-services", "travel", "b2b-exporters"],
  "professional-services": ["b2b-exporters", "education", "real-estate"],
  "b2b-exporters": ["professional-services", "real-estate", "education"],
};

/** Display order of GCC markets (country-level pages may be added later). */
export const MARKETS = ["saudi-arabia", "uae", "kuwait", "qatar", "bahrain", "oman"] as const;
export type MarketSlug = (typeof MARKETS)[number];

/**
 * Southeast Asian home markets. Reserved for future /thailand/ and /malaysia/ pages (only if backed by real
 * search demand). Not routed yet; adding Singapore/Indonesia later means extending this list, not repositioning.
 */
export const SEA_MARKETS = ["thailand", "malaysia"] as const;
export type SeaMarketSlug = (typeof SEA_MARKETS)[number];
