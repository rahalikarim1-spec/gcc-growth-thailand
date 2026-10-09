import { localePath, type Locale } from "@/lib/i18n";
import { INDUSTRY_SLUGS, SERVICE_SLUGS } from "@/lib/routes";
import type { Dictionary } from "@/content/types";
import { HeaderClient, type HeaderData } from "./HeaderClient";

// Nav shows the five core service pages from the brief; the sixth is reachable via the hub.
const NAV_SERVICES = SERVICE_SLUGS.filter((s) => s !== "customer-journey-optimization");

export function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const data: HeaderData = {
    locale,
    homeHref: localePath(locale),
    brand: dict.brand.name,
    brandAria: dict.nav.home,
    services: {
      label: dict.nav.services,
      items: NAV_SERVICES.map((s) => ({ href: localePath(locale, `/services/${s}`), label: dict.services[s].navLabel, desc: dict.services[s].cardSummary })),
      all: { href: localePath(locale, "/services"), label: dict.nav.allServices },
    },
    industries: {
      label: dict.nav.industries,
      items: INDUSTRY_SLUGS.map((s) => ({ href: localePath(locale, `/industries/${s}`), label: dict.industries[s].navLabel })),
      all: { href: localePath(locale, "/industries"), label: dict.nav.allIndustries },
    },
    links: [
      { href: localePath(locale) + `#${dict.home.how.id}`, label: dict.nav.howItWorks },
      { href: localePath(locale, "/insights"), label: dict.nav.insights },
      { href: localePath(locale) + `#${dict.home.about.id}`, label: dict.nav.about },
    ],
    cta: { href: localePath(locale, "/contact"), label: dict.nav.audit },
    labels: { menu: dict.nav.menu, close: dict.nav.closeMenu, primary: dict.nav.primary, language: dict.nav.language },
  };
  return <HeaderClient data={data} />;
}
