import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { getDictionary } from "@/content";
import { localePath, locales, type Locale } from "@/lib/i18n";
import { MARKETS, SERVICE_SLUGS, isServiceSlug, serviceIndustries, serviceRelatedServices } from "@/lib/routes";
import { absoluteUrl, person } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { RichText, stripMarkup } from "@/components/RichText";
import { ProcessStep } from "@/components/ProcessStep";
import { FAQ, faqSchema } from "@/components/FAQ";
import { CTASection } from "@/components/CTASection";
import { RelatedServices } from "@/components/RelatedServices";
import { RelatedIndustries } from "@/components/RelatedIndustries";
import { JsonLd } from "@/components/JsonLd";

type Props = { params: Promise<{ lang: Locale; slug: string }> };
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((lang) => SERVICE_SLUGS.map((slug) => ({ lang, slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isServiceSlug(slug)) return {};
  const s = getDictionary(lang).services[slug];
  return buildMetadata({ locale: lang, path: `/services/${slug}`, title: s.metaTitle, description: s.metaDescription });
}

export default async function ServicePage({ params }: Props) {
  const { lang, slug } = await params;
  if (!isServiceSlug(slug)) notFound();
  const dict = getDictionary(lang);
  const s = dict.services[slug];
  const url = absoluteUrl(localePath(lang, `/services/${slug}`));

  const crumbs = [
    { name: dict.ui.home, href: localePath(lang) },
    { name: dict.nav.services, href: localePath(lang, "/services") },
    { name: s.navLabel, href: localePath(lang, `/services/${slug}`) },
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: s.cardTitle,
    description: stripMarkup(s.valueProp),
    url,
    inLanguage: lang,
    provider: { "@type": "Person", "@id": absoluteUrl("/#person"), name: person.name, url: person.mainSite },
    areaServed: ["Saudi Arabia", "United Arab Emirates", "Kuwait", "Qatar", "Oman"].map((name) => ({ "@type": "Country", name })),
    audience: { "@type": "BusinessAudience", name: "Businesses in Thailand and Southeast Asia targeting GCC and Arabic-speaking customers" },
  };

  return (
    <>
      <JsonLd data={[serviceSchema, breadcrumbSchema(crumbs.map((c) => ({ name: c.name, url: absoluteUrl(c.href) }))), faqSchema(s.faqs)]} />
      <PageHero
        crumbs={crumbs}
        crumbsLabel={dict.ui.breadcrumbs}
        h1={s.h1}
        lead={s.valueProp}
        cta={{ href: localePath(lang, "/contact"), label: dict.cta.audit }}
      />

      <section aria-labelledby="problem" className="section-y">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <h2 id="problem" className="h-section">{s.problem.title}</h2>
          <div className="prose-body rich lead max-w-2xl">
            {s.problem.body.map((p) => <p key={p}><RichText text={p} locale={lang} /></p>)}
          </div>
        </div>
      </section>

      <section aria-labelledby="what" className="section-y border-t border-line bg-paper-2/60">
        <div className="container-x">
          <h2 id="what" className="h-section">{s.whatIDo.title}</h2>
          <ul className="mt-10 grid gap-5 md:grid-cols-2">
            {s.whatIDo.items.map((it) => (
              <li key={it.title} className="card flex gap-4 p-6">
                <Check aria-hidden className="mt-1 size-5 shrink-0 text-signal" />
                <div>
                  <h3 className="text-lg font-semibold">{it.title}</h3>
                  <p className="rich mt-1 text-muted"><RichText text={it.body} locale={lang} /></p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="collab" className="on-dark bg-ink-900 text-white">
        <div className="container-x section-y">
          <h2 id="collab" className="h-section max-w-3xl">{s.collaboration.title}</h2>
          <p className="lead mt-4 max-w-3xl">{s.collaboration.intro}</p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/15 p-6">
              <h3 className="font-mono text-xs uppercase tracking-widest text-slate-400">{dict.ui.yourTeam}</h3>
              <ul className="mt-4 grid gap-3">{s.collaboration.yourTeam.map((x) => <li key={x} className="flex gap-3"><Check aria-hidden className="mt-1 size-4 shrink-0 text-slate-400" />{x}</li>)}</ul>
            </div>
            <div className="rounded-2xl border border-signal-bright/40 bg-signal-bright/[0.07] p-6">
              <h3 className="font-mono text-xs uppercase tracking-widest text-signal-bright">{dict.ui.wadhah}</h3>
              <ul className="mt-4 grid gap-3">{s.collaboration.wadhah.map((x) => <li key={x} className="flex gap-3"><Check aria-hidden className="mt-1 size-4 shrink-0 text-signal-bright" />{x}</li>)}</ul>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="process" className="section-y">
        <div className="container-x">
          <h2 id="process" className="h-section">{s.process.title}</h2>
          <ol className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {s.process.steps.map((st, i) => <ProcessStep key={st.title} n={i + 1} title={st.title} body={st.body} />)}
          </ol>
        </div>
      </section>

      <section aria-labelledby="where" className="section-y border-t border-line">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          <div>
            <h2 id="where" className="h-section">{dict.ui.industries}</h2>
            <p className="rich lead mt-5"><RichText text={s.industriesIntro} locale={lang} /></p>
          </div>
          <div>
            <h2 className="h-section">{dict.ui.markets}</h2>
            <p className="lead mt-5">{s.marketsIntro}</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {MARKETS.map((m) => <li key={m} className="rounded-full border border-ink-600/30 bg-white px-4 py-1.5 text-sm font-medium">{dict.markets[m]}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <FAQ title={dict.ui.faq} items={s.faqs} locale={lang} />
      <CTASection locale={lang} title={s.ctaTitle} body={s.ctaBody} cta={dict.cta.audit} />
      <RelatedServices locale={lang} dict={dict} slugs={serviceRelatedServices[slug]} title={dict.ui.relatedServices.title} intro={dict.ui.relatedServices.intro} />
      <RelatedIndustries locale={lang} dict={dict} slugs={serviceIndustries[slug].slice(0, 3)} title={dict.ui.relatedIndustries.title} intro={dict.ui.relatedIndustries.intro} />
    </>
  );
}
