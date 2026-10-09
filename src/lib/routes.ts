export const SERVICE_SLUGS = [
  "gcc-market-entry",
  "google-ads-gcc",
  "arabic-seo",
  "arabic-landing-pages",
  "conversion-tracking",
  "customer-journey-optimization",
] as const;
export type ServiceSlug = (typeof SERVICE_SLUGS)[number];

export const INDUSTRY_SLUGS = [
  "hair-transplant",
  "dental-clinics",
  "medical-tourism",
  "hotels",
  "travel",
  "muay-thai",
  "real-estate",
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
  "gcc-market-entry": ["hair-transplant", "dental-clinics", "medical-tourism", "hotels", "real-estate"],
  "google-ads-gcc": ["hair-transplant", "dental-clinics", "medical-tourism", "travel", "muay-thai"],
  "arabic-seo": ["dental-clinics", "medical-tourism", "hotels", "travel"],
  "arabic-landing-pages": ["hair-transplant", "dental-clinics", "muay-thai", "real-estate"],
  "conversion-tracking": ["hair-transplant", "medical-tourism", "real-estate", "hotels"],
  "customer-journey-optimization": ["medical-tourism", "hair-transplant", "hotels", "travel"],
};

export const serviceRelatedServices: Record<ServiceSlug, ServiceSlug[]> = {
  "gcc-market-entry": ["google-ads-gcc", "arabic-seo", "arabic-landing-pages"],
  "google-ads-gcc": ["arabic-landing-pages", "conversion-tracking", "gcc-market-entry"],
  "arabic-seo": ["arabic-landing-pages", "gcc-market-entry", "conversion-tracking"],
  "arabic-landing-pages": ["google-ads-gcc", "conversion-tracking", "customer-journey-optimization"],
  "conversion-tracking": ["google-ads-gcc", "customer-journey-optimization", "arabic-landing-pages"],
  "customer-journey-optimization": ["conversion-tracking", "arabic-landing-pages", "google-ads-gcc"],
};

export const industryServices: Record<IndustrySlug, ServiceSlug[]> = {
  "hair-transplant": ["gcc-market-entry", "google-ads-gcc", "arabic-landing-pages", "conversion-tracking"],
  "dental-clinics": ["arabic-seo", "google-ads-gcc", "arabic-landing-pages", "conversion-tracking"],
  "medical-tourism": ["gcc-market-entry", "arabic-seo", "google-ads-gcc", "conversion-tracking"],
  hotels: ["gcc-market-entry", "arabic-seo", "google-ads-gcc"],
  travel: ["gcc-market-entry", "google-ads-gcc", "arabic-seo"],
  "muay-thai": ["google-ads-gcc", "arabic-landing-pages", "conversion-tracking"],
  "real-estate": ["gcc-market-entry", "arabic-landing-pages", "google-ads-gcc", "conversion-tracking"],
};

export const industryRelatedIndustries: Record<IndustrySlug, IndustrySlug[]> = {
  "hair-transplant": ["medical-tourism", "dental-clinics"],
  "dental-clinics": ["hair-transplant", "medical-tourism"],
  "medical-tourism": ["hair-transplant", "dental-clinics", "hotels"],
  hotels: ["travel", "medical-tourism"],
  travel: ["hotels", "muay-thai"],
  "muay-thai": ["travel", "hotels"],
  "real-estate": ["hotels", "travel"],
};

/** Display order of GCC markets (country-level pages may be added later). */
export const MARKETS = ["saudi-arabia", "uae", "kuwait", "qatar", "oman"] as const;
export type MarketSlug = (typeof MARKETS)[number];
