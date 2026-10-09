# Wadhah Belhassen — GCC & Arabic Market Growth (Thailand)

Next.js 16 (App Router) · TypeScript · Tailwind CSS 4 · EN + TH · deployable to Vercel.

## Run

```bash
npm install
npm run dev          # http://localhost:3000  → redirects to /en/
npm run lint && npm run typecheck && npm run build
```

Environment (see `.env.example`):

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical origin for canonicals, hreflang, sitemap, JSON-LD. Falls back to `VERCEL_PROJECT_PRODUCTION_URL`, then `http://localhost:3000`. |
| `AUDIT_WEBHOOK_URL` | Where audit-form leads are POSTed (Zapier/Make/n8n/CRM). **Unset in production ⇒ the form shows an error** rather than silently dropping leads. |

## Architecture

```
src/
  app/
    [lang]/                 layout (html lang, fonts, header/footer), home, services, industries, contact, insights, OG image
    api/audit/route.ts      validates + forwards the audit form
    sitemap.ts robots.ts icon.svg
  components/               Header(+Client), MegaMenu, LanguageSwitcher, Hero, MarketFlow, TeamDiagram, MedicalFeature,
                            IndustryCard, ServiceCard, ProcessStep, DataInsight, Related{Services,Industries}, FAQ,
                            Breadcrumbs, CTASection, AuditForm, JsonLd, RichText, PageHero, Footer
  content/                  ALL copy. types.ts defines the Dictionary; en/ and th/ implement it.
  lib/                      i18n (locales), routes (slugs + internal-link graph), seo (metadata/hreflang), site, links, audit
```

- **Content is separate from UI.** Each locale implements `Dictionary` (`content/types.ts`); TypeScript fails the build if a locale is missing a page or field.
- **Internal links in copy** use `[anchor](service:slug)` / `[anchor](industry:slug)` / `[anchor](page:contact)` markup, resolved per-locale by `RichText`.
- **Link graph** (service ↔ industry ↔ related) lives in `lib/routes.ts`, not in components.
- **Static generation**: every page is prerendered via `generateStaticParams`; unknown locales/slugs 404.
- **Trailing slashes** are on (`trailingSlash: true`), matching the specified URLs and canonicals.

### Adding Arabic (`/ar/`)

1. `lib/i18n.ts`: add `"ar"` to `locales` and `localeMeta` (`htmlLang: "ar"`, `ogLocale: "ar_AR"`, `dir: "rtl"`).
2. Create `content/ar/` (copy `content/en/`, translate), register it in `content/index.ts`.
3. In `[lang]/layout.tsx` set `<html dir>` from the locale and add an Arabic font (e.g. `IBM_Plex_Sans_Arabic`).
4. Hreflang, sitemap alternates and the language switcher pick the new locale up automatically. Components already use logical properties (`ps-*`, `border-s-*`) in the places that matter; audit remaining `left/right`, `translate-x` and arrow icons.

## SEO implementation

Per page: unique `<title>` + description, canonical, `hreflang` (`en`, `th`, `x-default`), Open Graph + Twitter. JSON-LD: `Person`, `ProfessionalService`, `WebSite` (home); `Service` + `BreadcrumbList` + `FAQPage` (service pages — FAQ is visible `<details>` content); `WebPage` + `BreadcrumbList` (industries); `BreadcrumbList` on hubs. No `Organization` schema (no registered entity/address is claimed).
Pages now include `/about/` (ProfilePage + Person) and `/industries/restaurants/` (flagged HOT via `HotBadge`; per-vertical "optimises for" line comes from `IndustryPage.model`).
`/insights/` is `noindex` and excluded from the sitemap until verified research exists.

## Content rules baked in

No invented clients, logos, testimonials, awards, statistics, Bangkok office or Thailand client claims. Clinic pages carry a responsibility split and no outcome guarantees. `DataInsight` renders a "Verified data pending" state unless given a `value` + `source`.
