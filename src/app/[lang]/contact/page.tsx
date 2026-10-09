import type { Metadata } from "next";
import { getDictionary } from "@/content";
import { localePath, type Locale } from "@/lib/i18n";
import { absoluteUrl, person } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { AuditForm } from "@/components/AuditForm";
import { JsonLd } from "@/components/JsonLd";

type Props = { params: Promise<{ lang: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const d = getDictionary(lang).contact;
  return buildMetadata({ locale: lang, path: "/contact", title: d.metaTitle, description: d.metaDescription });
}

export default async function ContactPage({ params }: Props) {
  const { lang } = await params;
  const dict = getDictionary(lang);
  const c = dict.contact;
  const crumbs = [
    { name: dict.ui.home, href: localePath(lang) },
    { name: dict.nav.contact, href: localePath(lang, "/contact") },
  ];
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs.map((x) => ({ name: x.name, url: absoluteUrl(x.href) })))} />
      <PageHero crumbs={crumbs} crumbsLabel={dict.ui.breadcrumbs} h1={c.h1} lead={c.intro} />
      <section className="section-y">
        <div className="container-x grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <AuditForm locale={lang} f={dict.form} />
          <aside className="grid content-start gap-8">
            <div>
              <h2 className="text-xl font-semibold">{c.expectTitle}</h2>
              <ol className="mt-4 grid gap-4">
                {c.expect.map((x, i) => (
                  <li key={x} className="flex gap-4">
                    <span className="font-mono text-sm text-signal">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-muted">{x}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="border-t border-line pt-6">
              <h2 className="text-xl font-semibold">{c.altTitle}</h2>
              <p className="mt-2 text-muted">{c.altBody}</p>
              <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-outline mt-4">
                LinkedIn<span className="sr-only"> {dict.ui.opensNewTab}</span>
              </a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
