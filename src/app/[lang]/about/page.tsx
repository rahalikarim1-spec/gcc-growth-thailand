import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, ExternalLink } from "lucide-react";
import { getDictionary } from "@/content";
import { localePath, type Locale } from "@/lib/i18n";
import { SERVICE_SLUGS } from "@/lib/routes";
import { absoluteUrl, person } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs, breadcrumbSchema } from "@/components/Breadcrumbs";
import { HotBadge } from "@/components/HotBadge";
import { Portrait } from "@/components/Portrait";
import { JourneyFlow } from "@/components/JourneyFlow";
import { ProcessStep } from "@/components/ProcessStep";
import { RichText } from "@/components/RichText";
import { RelatedServices } from "@/components/RelatedServices";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";

type Props = { params: Promise<{ lang: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const a = getDictionary(lang).about;
  return buildMetadata({ locale: lang, path: "/about", title: a.metaTitle, description: a.metaDescription });
}

export default async function AboutPage({ params }: Props) {
  const { lang } = await params;
  const dict = getDictionary(lang);
  const a = dict.about;
  const proof = dict.home.about.proof;
  const crumbs = [
    { name: dict.ui.home, href: localePath(lang) },
    { name: dict.nav.about, href: localePath(lang, "/about") },
  ];
  const url = absoluteUrl(localePath(lang, "/about"));

  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${url}#profile`,
    url,
    name: a.metaTitle,
    inLanguage: lang,
    mainEntity: {
      "@type": "Person",
      "@id": absoluteUrl("/#person"),
      name: person.name,
      jobTitle: "International Digital Growth Consultant",
      url: person.mainSite,
      sameAs: [person.mainSite, person.linkedin],
      knowsAbout: [
        "Google Ads", "Performance Max", "Search engine optimization", "Technical SEO", "International SEO", "Local SEO", "Google Business Profile",
        "Conversion rate optimization", "Google Analytics 4", "Google Tag Manager", "Conversion tracking", "Microsoft Clarity", "Meta Ads", "Market research",
      ],
    },
  };

  const ext = (href: string, label: string, desc: string) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="card group flex items-start justify-between gap-4 p-6">
      <span>
        <span className="block text-lg font-semibold">{label}<span className="sr-only"> {dict.ui.opensNewTab}</span></span>
        <span className="mt-1 block text-muted">{desc}</span>
      </span>
      <ExternalLink aria-hidden className="mt-1 size-5 shrink-0 text-signal transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </a>
  );

  return (
    <>
      <JsonLd data={[schema, breadcrumbSchema(crumbs.map((c) => ({ name: c.name, url: absoluteUrl(c.href) })))]} />

      {/* Hero */}
      <section className="on-dark relative isolate overflow-hidden bg-ink-950 text-white">
        <div aria-hidden className="grid-bg absolute inset-0 -z-10 [mask-image:radial-gradient(80%_100%_at_20%_0%,#000,transparent)]" />
        <div aria-hidden className="absolute -right-32 -top-20 -z-10 size-96 rounded-full bg-signal/20 blur-3xl" />
        <div className="container-x pb-14 pt-12 lg:pb-20 lg:pt-16">
          <Breadcrumbs items={crumbs} label={dict.ui.breadcrumbs} dark />
          <div className="mt-10 grid items-center gap-12 lg:grid-cols-[1.3fr_0.7fr]">
            <div>
              <p className="eyebrow">{a.eyebrow}</p>
              <h1 className="h-display mt-4">{a.h1}</h1>
              <p className="mt-5 text-xl font-medium text-slate-100">{a.role}</p>
              <p className="mt-1 text-lg text-signal-bright">{a.role2}</p>
              <p className="lead mt-6 max-w-2xl">{a.positioning}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href={localePath(lang, "/contact")} className="btn btn-primary-dark">{a.cta.label}<ArrowRight aria-hidden className="arrow size-4" /></Link>
                <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark">LinkedIn<ExternalLink aria-hidden className="size-4" /><span className="sr-only">{dict.ui.opensNewTab}</span></a>
              </div>
            </div>
            <Portrait priority alt={a.portraitAlt} name={a.h1} role={a.role} role2={a.role2} />
          </div>

          <aside aria-label={a.card.title} className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/12 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {a.card.lines.map((l) => (
              <div key={l.k} className="bg-ink-900 px-5 py-4">
                <p className="font-mono text-[0.7rem] uppercase tracking-widest text-slate-400">{l.k}</p>
                <p className="mt-1 font-medium">{l.v}</p>
              </div>
            ))}
          </aside>

          <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-white/15 pt-8">
            {proof.map((p) => (
              <div key={p.label} className="flex flex-col">
                <dt className="order-2 mt-1 text-sm text-slate-300">{p.label}</dt>
                <dd className="order-1 text-3xl font-semibold text-signal-bright sm:text-5xl">{p.value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 max-w-2xl text-sm text-slate-400">{a.proofNote}</p>
        </div>
      </section>

      {/* Approach */}
      <section aria-labelledby="approach" className="section-y">
        <div className="container-x">
          <h2 id="approach" className="h-section max-w-3xl">{a.approach.h2}</h2>
          <div className="lead mt-6 grid max-w-3xl gap-4">{a.approach.body.map((t) => <p key={t}>{t}</p>)}</div>
          <div className="mt-10"><JourneyFlow tone="light" label={a.approach.h2} steps={a.approach.chain} /></div>
          <p className="mt-6 max-w-3xl border-s-2 border-signal ps-4 text-lg font-medium">{a.approach.closing}</p>
        </div>
      </section>

      {/* Expertise */}
      <section aria-labelledby="expertise" className="section-y border-t border-line bg-paper-2/60">
        <div className="container-x">
          <h2 id="expertise" className="h-section max-w-3xl">{a.expertise.h2}</h2>
          <p className="lead mt-4 max-w-3xl">{a.expertise.intro}</p>
          <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {a.expertise.groups.map((g) => (
              <li key={g.title} className="card flex flex-col p-6">
                <h3 className="text-lg font-semibold">{g.title}</h3>
                <p className="mt-1 text-muted">{g.body}</p>
                <ul className="mt-4 grid gap-2">
                  {g.items.map((it) => <li key={it} className="flex gap-2.5 text-[0.95rem]"><Check aria-hidden className="mt-1 size-4 shrink-0 text-signal" />{it}</li>)}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* International */}
      <section aria-labelledby="international" className="section-y">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <h2 id="international" className="h-section">{a.international.h2}</h2>
            <h3 className="mt-8 font-mono text-xs uppercase tracking-widest text-muted">{a.international.marketsLabel}</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {a.international.markets.map((m) => <li key={m} className="rounded-full border border-ink-600/30 bg-white px-4 py-1.5 text-sm font-medium">{m}</li>)}
            </ul>
          </div>
          <div className="prose-body lead max-w-2xl">{a.international.body.map((t) => <p key={t}>{t}</p>)}</div>
        </div>
      </section>

      {/* Experience */}
      <section aria-labelledby="experience" className="section-y border-t border-line bg-paper-2/60">
        <div className="container-x">
          <h2 id="experience" className="h-section max-w-3xl">{a.experience.h2}</h2>
          <p className="lead mt-4 max-w-3xl">{a.experience.intro}</p>
          <ul className="mt-12 grid gap-5 md:grid-cols-2">
            {a.experience.items.map((it) => (
              <li key={it.name} className="card flex flex-col p-6 sm:p-7">
                <p className="font-mono text-xs uppercase tracking-widest text-signal">{it.type}</p>
                <h3 className="mt-2 text-xl font-semibold">{it.name}</h3>
                <p className="text-sm text-muted">{it.place}</p>
                <p className="mt-4 text-muted">{it.body}</p>
                {it.relevance && <p className="rich mt-4 border-t border-line pt-4 text-[0.95rem]"><RichText text={it.relevance} locale={lang} /></p>}
              </li>
            ))}
          </ul>
          <div className="mt-10 rounded-2xl border border-line bg-white p-6">
            <h3 className="text-lg font-semibold">{a.experience.otherTitle}</h3>
            <p className="mt-1 text-muted">{a.experience.otherBody}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {a.experience.categories.map((c) => <li key={c} className="rounded-full border border-ink-600/25 bg-paper px-3.5 py-1.5 text-sm">{c}</li>)}
            </ul>
          </div>
          <p className="mt-5 text-sm text-muted">{a.experience.note}</p>
        </div>
      </section>

      {/* Thailand focus */}
      <section aria-labelledby="focus" className="section-y">
        <div className="container-x">
          <h2 id="focus" className="h-section max-w-3xl">{a.focus.h2}</h2>
          <p className="lead mt-4 max-w-3xl">{a.focus.intro}</p>
          <div className="mt-12 grid gap-8">
            {a.focus.groups.map((g) => (
              <div key={g.label}>
                <h3 className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted">
                  {g.hot ? <HotBadge label={dict.ui.hot} /> : g.label}
                </h3>
                <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {g.items.map((it) => (
                    <li key={it.name}>
                      <Link href={localePath(lang, `/industries/${it.slug}`)} className={`card group flex h-full flex-col p-5 ${g.hot ? "ring-1 ring-gold/30" : ""}`}>
                        <span className="flex items-center justify-between gap-3 text-lg font-semibold">
                          <span className="flex flex-wrap items-center gap-2.5">{it.name}{g.hot && <HotBadge label={dict.ui.hot} />}</span>
                          <ArrowRight aria-hidden className="size-4 shrink-0 text-signal transition-transform group-hover:translate-x-1 rtl:rotate-180" />
                        </span>
                        <span className="mt-2 text-sm text-muted"><span className="font-medium text-ink-900">{dict.ui.optimiseFor}:</span> {dict.industries[it.slug].model}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-muted">{a.focus.note}</p>
        </div>
      </section>

      {/* Why GCC */}
      <section aria-labelledby="why" className="section-y border-t border-line bg-paper-2/60">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <h2 id="why" className="h-section">{a.why.h2}</h2>
            <div className="lead mt-6 grid gap-4">{a.why.body.map((t) => <p key={t}>{t}</p>)}</div>
            <p className="mt-6 border-s-2 border-signal ps-4 text-lg font-medium">{a.why.closing}</p>
          </div>
          <div className="card self-start p-6 sm:p-8">
            <h3 className="text-lg font-semibold">{a.why.validateTitle}</h3>
            <ol className="mt-5 grid gap-3">
              {a.why.validate.map((v, i) => (
                <li key={v} className="flex gap-4 border-t border-line pt-3 first:border-0 first:pt-0">
                  <span className="font-mono text-sm text-signal">{String(i + 1).padStart(2, "0")}</span>{v}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Existing team */}
      <section aria-labelledby="team" className="on-dark relative isolate overflow-hidden bg-ink-900 text-white">
        <div aria-hidden className="grid-bg absolute inset-0 -z-10 opacity-60 [mask-image:radial-gradient(70%_100%_at_50%_0%,#000,transparent)]" />
        <div className="container-x section-y">
          <h2 id="team" className="h-section max-w-3xl">{a.team.h2}</h2>
          <blockquote className="mt-8 max-w-4xl rounded-2xl border border-signal-bright/40 bg-signal-bright/[0.07] p-6 text-2xl font-semibold leading-snug sm:p-8 sm:text-3xl">
            {a.team.quote}
          </blockquote>
          <div className="lead mt-8 grid max-w-3xl gap-4">{a.team.body.map((t) => <p key={t}>{t}</p>)}</div>
          <h3 className="mt-10 font-mono text-xs uppercase tracking-widest text-slate-400">{a.team.rolesTitle}</h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {a.team.roles.map((r) => (
              <li key={r} className="flex items-center gap-3 rounded-xl border border-white/12 bg-white/[0.03] px-4 py-3 font-medium">
                <Check aria-hidden className="size-4 shrink-0 text-signal-bright" />{r}
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-3xl text-lg text-slate-100">{a.team.closing}</p>
        </div>
      </section>

      {/* Method */}
      <section aria-labelledby="method" className="section-y">
        <div className="container-x">
          <h2 id="method" className="h-section max-w-3xl">{a.method.h2}</h2>
          <p className="lead mt-4 max-w-3xl">{a.method.intro}</p>
          <ol className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {a.method.steps.map((s, i) => <ProcessStep key={s.title} n={i + 1} title={s.title} body={s.body} />)}
          </ol>
        </div>
      </section>

      {/* Links */}
      <section aria-labelledby="links" className="section-y border-t border-line bg-paper-2/60">
        <div className="container-x">
          <h2 id="links" className="h-section max-w-3xl">{a.links.h2}</h2>
          <p className="lead mt-4 max-w-3xl">{a.links.body}</p>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {ext(person.mainSite, a.links.mainSite.label, a.links.mainSite.desc)}
            {ext(person.linkedin, a.links.linkedin.label, a.links.linkedin.desc)}
          </div>
        </div>
      </section>

      <RelatedServices locale={lang} dict={dict} slugs={[...SERVICE_SLUGS]} title={a.servicesTitle} intro={a.servicesIntro} />
      <CTASection locale={lang} title={a.cta.h2} body={a.cta.body} cta={a.cta.label} />
    </>
  );
}
