import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { localePath, type Locale } from "@/lib/i18n";
import type { Dictionary } from "@/content/types";
import { MarketFlow } from "./MarketFlow";
import { TrustStatement } from "./TrustStatement";
import { HotBadge } from "./HotBadge";

export function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const h = dict.home.hero;
  return (
    <section aria-labelledby="hero-title" className="on-dark relative isolate overflow-hidden bg-ink-950 text-white">
      <div aria-hidden className="grid-bg absolute inset-0 -z-10 [mask-image:radial-gradient(80%_70%_at_30%_0%,#000,transparent)]" />
      <div aria-hidden className="absolute -right-40 top-10 -z-10 size-[34rem] rounded-full bg-signal/20 blur-3xl" />
      <div className="container-x grid items-center gap-12 pb-16 pt-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pb-24 lg:pt-20">
        <div>
          <p className="eyebrow">{h.eyebrow}</p>
          <h1 id="hero-title" className="h-display mt-5">{h.h1}</h1>
          <p className="mt-6 max-w-2xl text-lg font-medium leading-snug text-slate-100 sm:text-xl">{h.lead}</p>
          <p className="lead mt-4 max-w-2xl">{h.description}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href={localePath(locale, "/services")} className="btn btn-primary-dark">
              {dict.cta.primary}
              <ArrowRight aria-hidden className="arrow size-4 rtl:rotate-180" />
            </Link>
            <Link href={localePath(locale, "/contact")} className="btn btn-outline-dark">{dict.cta.secondary}</Link>
          </div>

          <div className="mt-8 max-w-2xl"><TrustStatement lead={h.trustLead} text={h.trust} /></div>
        </div>

        <MarketFlow v={dict.home.visual} />
      </div>

      <div className="container-x pb-14">
        <p className="eyebrow !text-slate-400">{h.industriesLabel}</p>
        <ul className="mt-4 grid grid-cols-2 gap-x-6 sm:grid-cols-3">
          {h.industries.map((it, i) => (
            <li key={it.name} className="flex flex-wrap items-baseline gap-x-3 gap-y-1 border-t border-white/15 py-3 text-[0.95rem] text-slate-100">
              <span aria-hidden className="font-mono text-[0.7rem] text-signal-bright">{String(i + 1).padStart(2, "0")}</span>
              {it.name}
              {it.hot && <HotBadge label={dict.ui.hot} tone="dark" />}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
