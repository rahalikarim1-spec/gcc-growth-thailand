export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000")
).replace(/\/+$/, "");

export const person = {
  name: "Wadhah Belhassen",
  mainSite: "https://www.wadhah.digital/",
  linkedin: "https://www.linkedin.com/in/belhassen-wadhah/",
};

export function absoluteUrl(path: string): string {
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

/**
 * Contact channels. Only channels set here are rendered (footer, contact page, form error fallback).
 *  - linkedin / website: already published by the owner.
 *  - email / whatsapp: NOT confirmed yet. Set them (or the env vars below) and they appear everywhere automatically.
 *      NEXT_PUBLIC_CONTACT_EMAIL     e.g. name@example.com
 *      NEXT_PUBLIC_CONTACT_WHATSAPP  digits only, international format, e.g. 66XXXXXXXXX
 */
export const contactChannels = {
  linkedin: person.linkedin,
  website: person.mainSite,
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || undefined,
  whatsapp: process.env.NEXT_PUBLIC_CONTACT_WHATSAPP?.replace(/\D/g, "") || undefined,
};

export interface ContactLink { key: "linkedin" | "website" | "email" | "whatsapp"; href: string; external: boolean }

/** Verified/configured channels as ready-to-render links (external = open in a new tab). */
export function getContactLinks(): ContactLink[] {
  const c = contactChannels;
  const links: ContactLink[] = [];
  if (c.email) links.push({ key: "email", href: `mailto:${c.email}`, external: false });
  if (c.whatsapp) links.push({ key: "whatsapp", href: `https://wa.me/${c.whatsapp}`, external: true });
  links.push({ key: "linkedin", href: c.linkedin, external: true });
  links.push({ key: "website", href: c.website, external: true });
  return links;
}
