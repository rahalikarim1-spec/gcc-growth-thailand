import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { getDictionary } from "@/content";
import { localePath, type Locale } from "@/lib/i18n";
import { SERVICE_SLUGS } from "@/lib/routes";
import { absoluteUrl, person } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
import { Hero } from "@/components/Hero";
import { RichText } from "@/components/RichText";
import { TeamDiagram } from "@/components/TeamDiagram";
import { IndustryCard } from "@/components/IndustryCard";
import { MedicalFeature } from "@/components/MedicalFeature";
import { ProcessStep } from "@/components/ProcessStep";
import { ServiceCard } from "@/components/ServiceCard";
import { DataInsight } from "@/components/DataInsight";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";

type Props = { params: Promise<{ lang: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const d = getDictionary(lang).home;
  return buildMetadata({ locale: lang, path: "", title: d.metaTitle, description: d.metaDescription });
}

export default async function HomePage({ params }: Props) {
  const { lang } = await params;
  const dict = getDictionary(lang);
  const h = dict.home;
  const markets = ["Saudi Arabia", "United Arab Emirates", "Kuwait", "Qatar", "Oman"];

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": absoluteUrl("/#person"),
    name: person.name,
    jobTitle: "International Digital Growth Consultant",
    description: dict.brand.statement,
    url: person.mainSite,
    sameAs: [person.mainSite, person.linkedin],
    knowsAbout: ["Google Ads", "SEO", "Arabic SEO", "International SEO", "Conversion rate optimization", "Google Analytics 4", "Google Tag Manager", "Conversion tracking", "Market research"],
  };
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": absoluteUrl("/#service"),
    name: "Wadhah Belhassen — GCC & Arabic Market Growth",
    url: absoluteUrl(localePath(lang)),
    description: h.metaDescription,
    founder: { "@id": absoluteUrl("/#person") },
    areaServed: markets.map((name) => ({ "@type": "Country", name })),
    serviceType: ["GCC market entry strategy", "Google Ads management", "Arabic SEO", "Conversion rate optimization", "Conversion tracking"],
    knowsLanguage: ["en", "th", "ar"],
  };
  const siteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Wadhah Belhassen",
    url: absoluteUrl(localePath(lang)),
    inLanguage: lang,
    publisher: { "@id": absoluteUrl("/#person") },
  };

  return (
    <>
      <JsonLd data={[personSchema, serviceSchema, siteSchema]} />
      <Hero locale={lang} dict={dict} />

      {/* Keep your team */}
      <section id={h.keepTeam.id} aria-labelledby="keep-title" className="section-y">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h2 id="keep-title" className="h-section">{h.keepTeam.h2}</h2>
              <div className="lead mt-6 grid max-w-2xl gap-3">
                {h.keepTeam.intro.map((p, i) => <p key={p} className={i === 1 ? "text-2xl font-semibold text-ink-900" : ""}>{p}</p>)}
              </div>
            </div>
            <div className="self-end">
              <ul className="grid gap-3">
                {h.keepTeam.keeps.map((k) => (
                  <li key={k} className="flex gap-3 rounded-xl border border-line bg-white px-5 py-4 font-medium shadow-card">
                    <span aria-hidden className="mt-2 size-2 shrink-0 rounded-full bg-signal" />{k}
                  </li>
                ))}
              </ul>
              <p className="mt-5 border-s-2 border-signal ps-4 font-medium">{h.keepTeam.role}</p>
            </div>
          </div>
          <div className="mt-14"><TeamDiagram d={h.keepTeam.diagram} /></div>
        </div>
      </section>

      {/* Who I help */}
      <section aria-labelledby="who-title" className="section-y border-t border-line bg-paper-2/60">
        <div className="container-x">
          <h2 id="who-title" className="h-section max-w-3xl">{h.who.h2}</h2>
          <p className="lead mt-4 max-w-2xl">{h.who.intro}</p>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {h.who.cards.map((c, i) => (
              <li key={`${c.slug}-${i}`}>
                <IndustryCard hot={c.hot ? dict.ui.hot : undefined} href={localePath(lang, `/industries/${c.slug}`)} title={c.title} body={c.body} link={c.link} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <MedicalFeature locale={lang} dict={dict} />

      {/* How it works */}
      <section id={h.how.id} aria-labelledby="how-title" className="section-y">
        <div className="container-x">
          <h2 id="how-title" className="h-section max-w-3xl">{h.how.h2}</h2>
          <ol className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {h.how.steps.map((s, i) => <ProcessStep key={s.title} n={i + 1} title={s.title} body={s.body} />)}
          </ol>
        </div>
      </section>

      {/* Services teaser */}
      <section aria-labelledby="services-title" className="section-y border-t border-line">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <h2 id="services-title" className="h-section max-w-3xl">{h.services.h2}</h2>
              <p className="lead mt-4 max-w-2xl">{h.services.intro}</p>
            </div>
            <Link href={localePath(lang, "/services")} className="btn btn-outline shrink-0">
              {h.services.all}<ArrowRight aria-hidden className="arrow size-4" />
            </Link>
          </div>
          <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {SERVICE_SLUGS.map((s, i) => (
              <li key={s}>
                <ServiceCard index={i} href={localePath(lang, `/services/${s}`)} title={dict.services[s].cardTitle} summary={dict.services[s].cardSummary} cta={dict.ui.explore} />
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-3xl text-muted">
            <RichText locale={lang} text={h.services.sectorNote} />
          </p>
        </div>
      </section>

      {/* About */}
      <section id={h.about.id} aria-labelledby="about-title" className="on-dark bg-ink-900 text-white">
        <div className="container-x section-y grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 id="about-title" className="h-section">{h.about.h2}</h2>
            <div className="lead mt-6 grid max-w-2xl gap-4">{h.about.body.map((p) => <p key={p}>{p}</p>)}</div>
            <p className="mt-4 max-w-2xl text-sm text-slate-400">{h.about.honesty}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={localePath(lang, "/about")} className="btn btn-primary-dark">
                {h.about.more}<ArrowRight aria-hidden className="arrow size-4" />
              </Link>
              <a href={person.mainSite} target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark">
                {h.about.mainSite}<ExternalLink aria-hidden className="size-4" /><span className="sr-only">{dict.ui.opensNewTab}</span>
              </a>
              <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark">
                {h.about.linkedin}<ExternalLink aria-hidden className="size-4" /><span className="sr-only">{dict.ui.opensNewTab}</span>
              </a>
            </div>
          </div>
          <div>
            <dl className="grid grid-cols-3 gap-4 border-b border-white/15 pb-8">
              {h.about.proof.map((p) => (
                <div key={p.label} className="flex flex-col">
                  <dt className="order-2 mt-1 text-sm text-slate-300">{p.label}</dt>
                  <dd className="order-1 text-3xl font-semibold text-signal-bright sm:text-4xl">{p.value}</dd>
                </div>
              ))}
            </dl>
            <h3 className="mt-8 font-mono text-xs uppercase tracking-widest text-slate-400">{h.about.expertiseTitle}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {h.about.expertise.map((x) => <li key={x} className="rounded-full border border-white/20 px-3.5 py-1.5 text-sm">{x}</li>)}
            </ul>
          </div>
        </div>
      </section>

      {/* Data teaser */}
      <section aria-labelledby="data-title" className="section-y">
        <div className="container-x">
          <h2 id="data-title" className="h-section max-w-3xl">{h.data.h2}</h2>
          <p className="lead mt-4 max-w-3xl">{h.data.intro}</p>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {h.data.items.map((it) => (
              <li key={it.title}><DataInsight title={it.title} body={it.body} pendingLabel={h.data.pending} /></li>
            ))}
          </ul>
          <Link href={localePath(lang, "/insights")} className="btn btn-outline mt-10">
            {h.data.cta}<ArrowRight aria-hidden className="arrow size-4" />
          </Link>
        </div>
      </section>

      <CTASection locale={lang} title={h.final.h2} body={h.final.body} cta={dict.cta.audit} />
    </>
  );
}
