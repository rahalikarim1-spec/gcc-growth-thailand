import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { localePath, type Locale } from "@/lib/i18n";
import type { Dictionary } from "@/content/types";

export function MedicalFeature({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const m = dict.home.medical;
  const wadhahCount = 4; // steps 1–4 are acquisition; 5–7 belong to the clinic
  return (
    <section aria-labelledby="medical-title" className="on-dark relative isolate overflow-hidden bg-ink-900 text-white">
      <div aria-hidden className="grid-bg absolute inset-0 -z-10 opacity-70 [mask-image:linear-gradient(to_bottom,#000,transparent)]" />
      <div className="container-x section-y">
        <p className="eyebrow">{m.eyebrow}</p>
        <h2 id="medical-title" className="h-section mt-3 max-w-3xl">{m.h2}</h2>
        <p className="lead mt-5 max-w-3xl">{m.body}</p>

        <div className="mt-12 grid gap-3 text-xs font-mono uppercase tracking-widest lg:grid-cols-7">
          <div className="text-signal-bright lg:col-span-4">{m.wadhahTitle}</div>
          <div className="hidden text-gold-bright lg:col-span-3 lg:block">{m.clinicTitle}</div>
        </div>
        <ol className="mt-3 grid gap-3 lg:grid-cols-7">
          {m.funnel.map((step, i) => {
            const mine = i < wadhahCount;
            return (
              <li
                key={step}
                className={`relative rounded-xl border p-4 text-[0.95rem] font-medium leading-snug ${i < m.funnel.length - 1 ? "lg:after:absolute lg:after:-right-[0.95rem] lg:after:top-1/2 lg:after:-translate-y-1/2 lg:after:text-slate-400 lg:after:content-['→'] rtl:lg:after:content-['←']" : ""} ${
                  mine ? "border-signal-bright/50 bg-signal-bright/10" : "border-gold-bright/40 bg-gold-bright/[0.07]"
                }`}
              >
                <span className={`mb-2 block font-mono text-[0.7rem] ${mine ? "text-signal-bright" : "text-gold-bright"}`}>{String(i + 1).padStart(2, "0")}</span>
                {step}
                {!mine && i === wadhahCount && <span className="sr-only"> — {m.clinicTitle}</span>}
              </li>
            );
          })}
        </ol>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-signal-bright/30 p-6">
            <h3 className="text-lg font-semibold text-signal-bright">{m.wadhahTitle}</h3>
            <ul className="mt-4 grid gap-2.5">
              {m.wadhahItems.map((x) => <li key={x} className="flex gap-3"><Check aria-hidden className="mt-1 size-4 shrink-0 text-signal-bright" />{x}</li>)}
            </ul>
          </div>
          <div className="rounded-2xl border border-gold-bright/30 p-6">
            <h3 className="text-lg font-semibold text-gold-bright">{m.clinicTitle}</h3>
            <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
              {m.clinicItems.map((x) => <li key={x} className="flex gap-3"><Check aria-hidden className="mt-1 size-4 shrink-0 text-gold-bright" />{x}</li>)}
            </ul>
          </div>
        </div>

        <p className="mt-6 max-w-3xl text-sm text-slate-300">{m.disclaimer}</p>
        <Link href={localePath(locale, "/industries/medical-tourism")} className="btn btn-primary-dark mt-8">
          {m.link}
          <ArrowRight aria-hidden className="arrow size-4" />
        </Link>
      </div>
    </section>
  );
}
