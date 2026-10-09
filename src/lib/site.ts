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
