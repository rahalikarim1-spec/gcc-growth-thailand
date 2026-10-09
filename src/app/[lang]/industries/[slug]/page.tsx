import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { getDictionary } from "@/content";
import { localePath, locales, type Locale } from "@/lib/i18n";
import { INDUSTRY_SLUGS, industryRelatedIndustries, industryServices, isIndustrySlug } from "@/lib/routes";
import { absoluteUrl } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { RichText } from "@/components/RichText";
import { ProcessStep } from "@/components/ProcessStep";
import { CTASection } from "@/components/CTASection";
import { RelatedIndustries } from "@/components/RelatedIndustries";
import { JsonLd } from "@/components/JsonLd";

type Props = { params: Promise<{ lang: Locale; slug: string }> };
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((lang) => INDUSTRY_SLUGS.map((slug) => ({ lang, slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isIndustrySlug(slug)) return {};
  const d = getDictionary(lang).industries[slug];
  return buildMetadata({ locale: lang, path: `/industries/${slug}`, title: d.metaTitle, description: d.metaDescription });
}

export default async function IndustryPage({ params }: Props) {
  const { lang, slug } = await params;
  if (!isIndustrySlug(slug)) notFound();
  const dict = getDictionary(lang);
  const p = dict.industries[slug];
  const url = absoluteUrl(localePath(lang, `/industries/${slug}`));
  const crumbs = [
    { name: dict.ui.home, href: localePath(lang) },
    { name: dict.nav.industries, href: localePath(lang, "/industries") },
    { name: p.navLabel, href: localePath(lang, `/industries/${slug}`) },
  ];
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: p.metaTitle,
    description: p.metaDescription,
    inLanguage: lang,
    isPartOf: { "@type": "WebSite", url: absoluteUrl(localePath(lang)) },
    about: p.cardTitle,
  };
  const services = industryServices[slug];

  return (
    <>
      <JsonLd data={[pageSchema, breadcrumbSchema(crumbs.map((c) => ({ name: c.name, url: absoluteUrl(c.href) })))]} />
      <PageHero crumbs={crumbs} crumbsLabel={dict.ui.breadcrumbs} h1={p.h1} lead={p.intro} cta={{ href: localePath(lang, "/contact"), label: dict.cta.audit }} />

      <section aria-labelledby="problem" className="section-y">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <h2 id="problem" className="h-section">{p.problem.title}</h2>
          <div className="prose-body lead max-w-2xl">{p.problem.body.map((t) => <p key={t}>{t}</p>)}</div>
        </div>
      </section>

      <section aria-labelledby="opportunity" className="section-y border-t border-line bg-paper-2/60">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <h2 id="opportunity" className="h-section">{p.opportunity.title}</h2>
          <div className="prose-body lead max-w-2xl">{p.opportunity.body.map((t) => <p key={t}>{t}</p>)}</div>
        </div>
      </section>

      <section aria-labelledby="funnel" className="on-dark bg-ink-900 text-white">
        <div className="container-x section-y">
          <h2 id="funnel" className="h-section max-w-3xl">{p.funnel.title}</h2>
          <p className="lead mt-4 max-w-3xl">{p.funnel.intro}</p>
          <ol className="mt-10 grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-5">
            {p.funnel.steps.map((st, i) => (
              <ProcessStep key={st.title} dark n={i + 1} title={st.title} body={<RichText text={st.body} locale={lang} />} />
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="services" className="section-y">
        <div className="container-x">
          <h2 id="services" className="h-section max-w-3xl">{dict.ui.relatedServicesForIndustry.title}</h2>
          <p className="lead mt-4 max-w-3xl">{p.servicesIntro}</p>
          <ul className="mt-10 grid gap-5 md:grid-cols-2">
            {services.map((s) => (
              <li key={s}>
                <Link href={localePath(lang, `/services/${s}`)} className="card group flex h-full flex-col p-6">
                  <h3 className="text-lg font-semibold">{dict.services[s].cardTitle}</h3>
                  <p className="mt-2 grow text-muted">{p.serviceNotes[s] ?? dict.services[s].cardSummary}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-signal-dark">
                    {dict.ui.explore}<ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {p.responsibility && (
        <section aria-labelledby="roles" className="section-y border-t border-line bg-paper-2/60">
          <div className="container-x">
            <h2 id="roles" className="h-section max-w-3xl">{p.responsibility.title}</h2>
            <p className="lead mt-4 max-w-3xl">{p.responsibility.intro}</p>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="card p-6">
                <h3 className="font-mono text-xs uppercase tracking-widest text-signal">{dict.ui.wadhah}</h3>
                <ul className="mt-4 grid gap-2.5">{p.responsibility.wadhah.map((x) => <li key={x} className="flex gap-3"><Check aria-hidden className="mt-1 size-4 shrink-0 text-signal" />{x}</li>)}</ul>
              </div>
              <div className="card p-6">
                <h3 className="font-mono text-xs uppercase tracking-widest text-gold">{dict.ui.yourTeam}</h3>
                <ul className="mt-4 grid gap-2.5">{p.responsibility.client.map((x) => <li key={x} className="flex gap-3"><Check aria-hidden className="mt-1 size-4 shrink-0 text-gold" />{x}</li>)}</ul>
              </div>
            </div>
            <p className="mt-6 max-w-3xl text-sm text-muted">{p.responsibility.note}</p>
          </div>
        </section>
      )}

      <CTASection locale={lang} title={p.ctaTitle} body={p.ctaBody} cta={dict.cta.audit} />
      <RelatedIndustries locale={lang} dict={dict} slugs={industryRelatedIndustries[slug]} title={dict.ui.relatedIndustries.title} intro={dict.ui.relatedIndustries.intro} />
    </>
  );
}
