import type { Metadata } from "next";
import { getDictionary } from "@/content";
import { localePath, type Locale } from "@/lib/i18n";
import { SERVICE_SLUGS } from "@/lib/routes";
import { absoluteUrl } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { ServiceCard } from "@/components/ServiceCard";
import { RelatedIndustries } from "@/components/RelatedIndustries";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";

type Props = { params: Promise<{ lang: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const d = getDictionary(lang).servicesHub;
  return buildMetadata({ locale: lang, path: "/services", title: d.metaTitle, description: d.metaDescription });
}

export default async function ServicesHub({ params }: Props) {
  const { lang } = await params;
  const dict = getDictionary(lang);
  const d = dict.servicesHub;
  const crumbs = [
    { name: dict.ui.home, href: localePath(lang) },
    { name: dict.nav.services, href: localePath(lang, "/services") },
  ];
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs.map((c) => ({ name: c.name, url: absoluteUrl(c.href) })))} />
      <PageHero crumbs={crumbs} crumbsLabel={dict.ui.breadcrumbs} h1={d.h1} lead={d.intro} note={d.collabNote} />
      <section aria-labelledby="list-title" className="section-y">
        <div className="container-x">
          <h2 id="list-title" className="sr-only">{dict.nav.services}</h2>
          <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {SERVICE_SLUGS.map((s, i) => (
              <li key={s}>
                <ServiceCard index={i} href={localePath(lang, `/services/${s}`)} title={dict.services[s].cardTitle} summary={dict.services[s].cardSummary} cta={dict.ui.explore} />
              </li>
            ))}
          </ul>
        </div>
      </section>
      <RelatedIndustries locale={lang} dict={dict} slugs={["hair-transplant", "dental-clinics", "medical-tourism"]} title={dict.ui.industries} intro={dict.industriesHub.intro} />
      <CTASection locale={lang} title={dict.home.final.h2} body={dict.home.final.body} cta={dict.cta.audit} />
    </>
  );
}
