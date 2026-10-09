import type { Metadata } from "next";
import { getDictionary } from "@/content";
import { localePath, type Locale } from "@/lib/i18n";
import { INDUSTRY_SLUGS } from "@/lib/routes";
import { absoluteUrl } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { IndustryCard } from "@/components/IndustryCard";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";

type Props = { params: Promise<{ lang: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const d = getDictionary(lang).industriesHub;
  return buildMetadata({ locale: lang, path: "/industries", title: d.metaTitle, description: d.metaDescription });
}

export default async function IndustriesHub({ params }: Props) {
  const { lang } = await params;
  const dict = getDictionary(lang);
  const d = dict.industriesHub;
  const crumbs = [
    { name: dict.ui.home, href: localePath(lang) },
    { name: dict.nav.industries, href: localePath(lang, "/industries") },
  ];
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs.map((c) => ({ name: c.name, url: absoluteUrl(c.href) })))} />
      <PageHero crumbs={crumbs} crumbsLabel={dict.ui.breadcrumbs} h1={d.h1} lead={d.intro} />
      <section aria-labelledby="list-title" className="section-y">
        <div className="container-x">
          <h2 id="list-title" className="sr-only">{dict.nav.industries}</h2>
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRY_SLUGS.map((s) => (
              <li key={s}>
                <IndustryCard href={localePath(lang, `/industries/${s}`)} title={dict.industries[s].cardTitle} body={dict.industries[s].cardSummary} link={dict.industries[s].cardLink} />
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CTASection locale={lang} title={dict.home.final.h2} body={dict.home.final.body} cta={dict.cta.audit} />
    </>
  );
}
