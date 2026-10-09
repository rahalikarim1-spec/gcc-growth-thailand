import type { IndustrySlug, ServiceSlug } from "@/lib/routes";
import type { Locale } from "@/lib/i18n";

/**
 * Inline link markup usable in any body string:
 *   [anchor text](service:arabic-seo)   [anchor text](industry:dental-clinics)   [anchor text](page:contact)
 */
export interface Step { title: string; body: string }
export interface Faq { q: string; a: string }
export interface TextBlock { title: string; body: string[] }

export interface ServicePage {
  navLabel: string;
  cardTitle: string;
  cardSummary: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  valueProp: string;
  problem: TextBlock;
  whatIDo: { title: string; items: Step[] };
  collaboration: { title: string; intro: string; yourTeam: string[]; wadhah: string[] };
  process: { title: string; steps: Step[] };
  industriesIntro: string;
  marketsIntro: string;
  faqs: Faq[];
  ctaTitle: string;
  ctaBody: string;
}

export interface IndustryPage {
  navLabel: string;
  cardTitle: string;
  cardSummary: string;
  cardLink: string;
  /** Short statement of what this vertical optimises for (its business model). */
  model: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  problem: TextBlock;
  opportunity: TextBlock;
  funnel: { title: string; intro: string; steps: Step[] };
  /** Optional discovery/journey flows (used by restaurants). */
  journeys?: { title: string; intro: string; flows: { label: string; steps: string[] }[]; note: string };
  /** Optional grid of surfaces/channels that decide the outcome. */
  channels?: { title: string; intro: string; items: Step[] };
  servicesIntro: string;
  /** Industry-specific reason each linked service matters. */
  serviceNotes: Partial<Record<ServiceSlug, string>>;
  /** Present for regulated/medical verticals. */
  responsibility?: { title: string; intro: string; wadhah: string[]; client: string[]; note: string };
  ctaTitle: string;
  ctaBody: string;
}

export interface HomeCard { slug: IndustrySlug; title: string; body: string; link: string; hot?: boolean }

export interface Dictionary {
  locale: Locale;
  brand: { name: string; role: string; statement: string };
  nav: {
    services: string; industries: string; howItWorks: string; insights: string; about: string; contact: string;
    audit: string; menu: string; closeMenu: string; allServices: string; allIndustries: string;
    skip: string; primary: string; language: string; home: string;
  };
  ui: {
    breadcrumbs: string;
    home: string;
    relatedServices: { title: string; intro: string };
    relatedIndustries: { title: string; intro: string };
    relatedServicesForIndustry: { title: string };
    explore: string;
    hot: string;
    optimiseFor: string;
    faq: string;
    markets: string;
    industries: string;
    yourTeam: string;
    wadhah: string;
    opensNewTab: string;
    sectionProcess: string;
  };
  markets: Record<"saudi-arabia" | "uae" | "kuwait" | "qatar" | "oman", string>;
  footer: {
    navTitle: string; marketsTitle: string; externalTitle: string; languagesTitle: string;
    website: string; linkedin: string; rights: string; disclaimer: string; contact: string; industriesTitle: string;
  };
  cta: { primary: string; secondary: string; audit: string };
  home: {
    metaTitle: string;
    metaDescription: string;
    hero: {
      eyebrow: string; h1: string; lead: string; description: string;
      trustLead: string; trust: string; industriesLabel: string; industries: { name: string; hot?: boolean }[];
    };
    visual: {
      label: string; origin: string; originSub: string;
      steps: string[]; caption: string; coordsNote: string;
      hub: string; nodes: Record<"saudi-arabia" | "uae" | "kuwait" | "qatar" | "oman", string>;
    };
    keepTeam: {
      id: string; h2: string; intro: string[]; keeps: string[]; role: string;
      diagram: {
        existingTitle: string; existing: string[];
        layerTitle: string; layer: string[];
        resultTitle: string; result: string[];
        plus: string; equals: string;
      };
    };
    who: { h2: string; intro: string; cards: HomeCard[] };
    medical: {
      h2: string; eyebrow: string; body: string; funnel: string[];
      wadhahTitle: string; wadhahItems: string[]; clinicTitle: string; clinicItems: string[];
      disclaimer: string; link: string;
    };
    how: { id: string; h2: string; steps: Step[] };
    services: { h2: string; intro: string; all: string; sectorNote: string };
    about: {
      id: string; h2: string; body: string[]; proof: { value: string; label: string }[];
      expertiseTitle: string; expertise: string[]; mainSite: string; linkedin: string; honesty: string; more: string;
    };
    data: { h2: string; intro: string; items: { title: string; body: string }[]; pending: string; cta: string };
    final: { h2: string; body: string };
  };
  about: AboutPage;
  servicesHub: { metaTitle: string; metaDescription: string; h1: string; intro: string; collabNote: string };
  industriesHub: { metaTitle: string; metaDescription: string; h1: string; intro: string };
  services: Record<ServiceSlug, ServicePage>;
  industries: Record<IndustrySlug, IndustryPage>;
  contact: {
    metaTitle: string; metaDescription: string; h1: string; intro: string;
    expectTitle: string; expect: string[]; altTitle: string; altBody: string;
  };
  form: {
    name: string; company: string; website: string; businessType: string; targetMarket: string;
    situation: string; contactField: string; contactHint: string; message: string; optional: string;
    submit: string; sending: string; successTitle: string; successBody: string;
    errorTitle: string; errorBody: string; required: string; invalidContact: string;
    businessTypes: string[]; markets: string[]; situations: string[]; select: string; privacy: string;
  };
  insights: {
    metaTitle: string; metaDescription: string; h1: string; intro: string;
    status: string; areasTitle: string; areas: { title: string; body: string }[];
    pendingLabel: string; principlesTitle: string; principles: string[]; cta: string;
  };
  notFound: { title: string; body: string; back: string };
}

export interface AboutPage {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  portraitAlt: string;
  h1: string;
  role: string;
  role2: string;
  positioning: string;
  card: { title: string; lines: { k: string; v: string }[] };
  proofNote: string;
  approach: { h2: string; body: string[]; chain: string[]; closing: string };
  expertise: { h2: string; intro: string; groups: { title: string; body: string; items: string[] }[] };
  international: { h2: string; body: string[]; marketsLabel: string; markets: string[] };
  experience: {
    h2: string; intro: string;
    items: { name: string; place: string; type: string; body: string; relevance?: string }[];
    otherTitle: string; otherBody: string; categories: string[]; note: string;
  };
  focus: {
    h2: string; intro: string;
    groups: { label: string; hot?: boolean; items: { slug: IndustrySlug; name: string }[] }[];
    note: string;
  };
  why: { h2: string; body: string[]; validateTitle: string; validate: string[]; closing: string };
  team: { h2: string; quote: string; body: string[]; rolesTitle: string; roles: string[]; closing: string };
  method: { h2: string; intro: string; steps: Step[] };
  links: { h2: string; body: string; mainSite: { label: string; desc: string }; linkedin: { label: string; desc: string } };
  cta: { h2: string; body: string; label: string };
  servicesTitle: string;
  servicesIntro: string;
}
