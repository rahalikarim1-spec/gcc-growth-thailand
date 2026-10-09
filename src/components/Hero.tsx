import Image from "next/image";
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
      {/* Atmospheric portrait: decorative, dimmed, desaturated; copy side stays near-solid navy. */}
      <div aria-hidden className="absolute inset-0 -z-30 overflow-hidden">
        <div className="absolute inset-0 lg:-top-[7%] lg:bottom-0 lg:left-auto lg:w-[64%]">
          <Image
            src="/images/wadhah-belhassen.jpg"
            alt=""
            fill
            quality={60}
            loading="eager"
            fetchPriority="low"
            sizes="(min-width: 1024px) 64vw, 100vw"
            className="object-cover object-[70%_12%] opacity-[0.22] [filter:saturate(0.65)_contrast(1.08)_brightness(0.9)] sm:opacity-30 lg:object-[64%_0%] lg:opacity-[0.78]"
          />
        </div>
      </div>
      {/* Copy-side scrim: >=90% navy across the left ~60% on desktop, fading to the portrait on the right. */}
      <div aria-hidden className="absolute inset-0 -z-20 bg-gradient-to-b from-ink-950/80 via-ink-950/55 to-ink-950 lg:hidden" />
      <div aria-hidden className="absolute inset-0 -z-20 hidden bg-[linear-gradient(to_right,var(--color-ink-950)_0%,rgb(7_12_25_/_0.94)_38%,rgb(7_12_25_/_0.8)_56%,rgb(7_12_25_/_0.4)_74%,rgb(7_12_25_/_0.12)_100%)] lg:block" />
      {/* Even dimming over the whole image, plus bottom fade into the industries list. */}
      <div aria-hidden className="absolute inset-0 -z-20 bg-ink-950/25 lg:bg-ink-950/10" />
      <div aria-hidden className="absolute inset-x-0 bottom-0 -z-20 h-1/3 bg-gradient-to-t from-ink-950 to-transparent" />
      {/* Brand atmosphere: faint teal wash toward the right, existing grid on top. */}
      <div aria-hidden className="absolute inset-0 -z-20 bg-[radial-gradient(60%_70%_at_88%_30%,rgb(11_122_110_/_0.22),transparent_70%)]" />
      <div aria-hidden className="grid-bg absolute inset-0 -z-10 [mask-image:radial-gradient(80%_70%_at_30%_0%,#000,transparent)]" />
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

        <div className="lg:self-end"><MarketFlow v={dict.home.visual} /></div>
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
