import type { Metadata } from "next";
import { getDictionary } from "@/content";
import { localePath, type Locale } from "@/lib/i18n";
import { absoluteUrl } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { DataInsight } from "@/components/DataInsight";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";

type Props = { params: Promise<{ lang: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const d = getDictionary(lang).insights;
  // noindex until verified research is published, so an empty shell doesn't compete with real pages.
  return buildMetadata({ locale: lang, path: "/insights", title: d.metaTitle, description: d.metaDescription, noindex: true });
}

export default async function InsightsPage({ params }: Props) {
  const { lang } = await params;
  const dict = getDictionary(lang);
  const d = dict.insights;
  const crumbs = [
    { name: dict.ui.home, href: localePath(lang) },
    { name: dict.nav.insights, href: localePath(lang, "/insights") },
  ];
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs.map((x) => ({ name: x.name, url: absoluteUrl(x.href) })))} />
      <PageHero crumbs={crumbs} crumbsLabel={dict.ui.breadcrumbs} h1={d.h1} lead={d.intro} />
      <section aria-labelledby="areas" className="section-y">
        <div className="container-x">
          <p className="eyebrow">{d.status}</p>
          <h2 id="areas" className="h-section mt-3">{d.areasTitle}</h2>
          {/* Pass `value` + `source` to DataInsight once a figure is verified. Never a placeholder number. */}
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {d.areas.map((a) => <li key={a.title}><DataInsight title={a.title} body={a.body} pendingLabel={d.pendingLabel} /></li>)}
          </ul>
        </div>
      </section>
      <section aria-labelledby="principles" className="section-y border-t border-line">
        <div className="container-x grid gap-8 lg:grid-cols-[1fr_1.4fr]">
          <h2 id="principles" className="h-section">{d.principlesTitle}</h2>
          <ul className="grid gap-3 lead">{d.principles.map((p) => <li key={p} className="border-s-2 border-signal ps-4">{p}</li>)}</ul>
        </div>
      </section>
      <CTASection locale={lang} title={dict.home.final.h2} body={dict.home.final.body} cta={d.cta} />
    </>
  );
}
