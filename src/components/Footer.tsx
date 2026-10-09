import Link from "next/link";
import { localePath, locales, localeMeta, type Locale } from "@/lib/i18n";
import { INDUSTRY_SLUGS, MARKETS } from "@/lib/routes";
import { HotBadge } from "./HotBadge";
import { person } from "@/lib/site";
import type { Dictionary } from "@/content/types";

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const nav = [
    { href: localePath(locale, "/services"), label: dict.nav.services },
    { href: localePath(locale, "/industries"), label: dict.nav.industries },
    { href: localePath(locale, "/about"), label: dict.nav.about },
    { href: localePath(locale, "/insights"), label: dict.nav.insights },
    { href: localePath(locale, "/contact"), label: dict.nav.contact },
  ];
  const col = "font-mono text-xs uppercase tracking-widest text-slate-400";
  const link = "text-slate-200 hover:text-white hover:underline";
  return (
    <footer className="on-dark bg-ink-950 text-slate-200">
      <div className="container-x grid gap-12 py-16 lg:grid-cols-[1.4fr_0.9fr_1fr_0.9fr_0.9fr_0.8fr]">
        <div>
          <p className="text-lg font-semibold text-white">{dict.brand.name}</p>
          <p className="mt-1 text-sm text-signal-bright">{dict.brand.role}</p>
          <p className="mt-4 max-w-sm text-sm text-slate-300">{dict.brand.statement}</p>
        </div>
        <nav aria-label={dict.footer.navTitle}>
          <h2 className={col}>{dict.footer.navTitle}</h2>
          <ul className="mt-4 grid gap-2.5 text-sm">
            {nav.map((n) => <li key={n.href}><Link className={link} href={n.href}>{n.label}</Link></li>)}
          </ul>
        </nav>
        <nav aria-label={dict.footer.industriesTitle}>
          <h2 className={col}>{dict.footer.industriesTitle}</h2>
          <ul className="mt-4 grid gap-2.5 text-sm">
            {INDUSTRY_SLUGS.map((s) => (
              <li key={s} className="flex items-center gap-2">
                <Link className={link} href={localePath(locale, `/industries/${s}`)}>{dict.industries[s].navLabel}</Link>
                {s === "restaurants" && <HotBadge label={dict.ui.hot} tone="dark" />}
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h2 className={col}>{dict.footer.marketsTitle}</h2>
          <ul className="mt-4 grid gap-2.5 text-sm">
            {MARKETS.map((m) => <li key={m}>{dict.markets[m]}</li>)}
          </ul>
        </div>
        <div>
          <h2 className={col}>{dict.footer.externalTitle}</h2>
          <ul className="mt-4 grid gap-2.5 text-sm">
            <li><a className={link} href={person.mainSite} target="_blank" rel="noopener noreferrer">{dict.footer.website}<span className="sr-only"> {dict.ui.opensNewTab}</span></a></li>
            <li><a className={link} href={person.linkedin} target="_blank" rel="noopener noreferrer">{dict.footer.linkedin}<span className="sr-only"> {dict.ui.opensNewTab}</span></a></li>
          </ul>
        </div>
        <div>
          <h2 className={col}>{dict.footer.languagesTitle}</h2>
          <ul className="mt-4 grid gap-2.5 text-sm">
            {locales.map((l) => (
              <li key={l}>
                <a className={link} href={localePath(l)} hrefLang={localeMeta[l].htmlLang} lang={localeMeta[l].htmlLang}>{localeMeta[l].name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-2 py-6 text-xs text-slate-400 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {dict.brand.name}. {dict.footer.rights}</p>
          <p className="max-w-xl">{dict.footer.disclaimer}</p>
        </div>
      </div>
    </footer>
  );
}
