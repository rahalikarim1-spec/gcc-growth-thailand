import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { getDictionary } from "@/content";
import { localePath, type Locale } from "@/lib/i18n";
import { absoluteUrl } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { RichText } from "@/components/RichText";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";

type Props = { params: Promise<{ lang: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const d = getDictionary(lang).howPage;
  return buildMetadata({ locale: lang, path: "/how-it-works", title: d.metaTitle, description: d.metaDescription });
}

export default async function HowItWorksPage({ params }: Props) {
  const { lang } = await params;
  const dict = getDictionary(lang);
  const h = dict.howPage;
  const crumbs = [
    { name: dict.ui.home, href: localePath(lang) },
    { name: dict.nav.howItWorks, href: localePath(lang, "/how-it-works") },
  ];
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs.map((c) => ({ name: c.name, url: absoluteUrl(c.href) })))} />
      <PageHero crumbs={crumbs} crumbsLabel={dict.ui.breadcrumbs} h1={h.h1} lead={h.intro} cta={{ href: localePath(lang, "/contact"), label: dict.cta.audit }} />

      <section aria-labelledby="steps-title" className="section-y">
        <div className="container-x">
          <h2 id="steps-title" className="sr-only">{h.h1}</h2>
          <ol className="grid gap-5">
            {h.steps.map((s, i) => (
              <li key={s.title} className="card grid gap-6 p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr]">
                <div>
                  <span className="font-mono text-sm text-signal">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-2 text-2xl font-semibold">{s.title}</h3>
                  <p className="mt-3 text-muted">{s.body}</p>
                  <p className="rich mt-4 text-sm font-medium"><RichText text={s.more} locale={lang} /></p>
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-muted">{dict.ui.whatHappens}</p>
                  <ul className="mt-3 grid gap-2.5">
                    {s.points.map((p) => (
                      <li key={p} className="flex gap-3"><Check aria-hidden className="mt-1 size-4 shrink-0 text-signal" />{p}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="team-title" className="on-dark bg-ink-900 text-white">
        <div className="container-x section-y">
          <h2 id="team-title" className="h-section max-w-3xl">{h.team.title}</h2>
          <p className="lead mt-4 max-w-3xl">{h.team.body}</p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/15 p-6">
              <h3 className="font-mono text-xs uppercase tracking-widest text-slate-400">{dict.ui.yourTeam}</h3>
              <ul className="mt-4 grid gap-3">{h.team.yourTeam.map((x) => <li key={x} className="flex gap-3"><Check aria-hidden className="mt-1 size-4 shrink-0 text-slate-400" />{x}</li>)}</ul>
            </div>
            <div className="rounded-2xl border border-signal-bright/40 bg-signal-bright/[0.07] p-6">
              <h3 className="font-mono text-xs uppercase tracking-widest text-signal-bright">{dict.ui.wadhah}</h3>
              <ul className="mt-4 grid gap-3">{h.team.wadhah.map((x) => <li key={x} className="flex gap-3"><Check aria-hidden className="mt-1 size-4 shrink-0 text-signal-bright" />{x}</li>)}</ul>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="pilot-cta" className="section-y">
        <div className="container-x flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 id="pilot-cta" className="h-section">{h.pilotTitle}</h2>
            <p className="lead mt-3">{h.pilotBody}</p>
          </div>
          <Link href={localePath(lang, "/services") + "#pilot"} className="btn btn-outline shrink-0">
            {h.pilotCta}<ArrowRight aria-hidden className="arrow size-4" />
          </Link>
        </div>
      </section>

      <CTASection locale={lang} title={h.ctaTitle} body={h.ctaBody} cta={dict.cta.audit} />
    </>
  );
}
