import { ProcessStep } from "./ProcessStep";
import type { Dictionary } from "@/content/types";

/** 90-day GCC Market Opportunity & Acquisition Pilot: a structured, no-price entry offer. */
export function PilotSection({ pilot }: { pilot: Dictionary["servicesHub"]["pilot"] }) {
  return (
    <section id={pilot.id} aria-labelledby="pilot-title" className="on-dark relative isolate overflow-hidden bg-ink-900 text-white">
      <div aria-hidden className="grid-bg absolute inset-0 -z-10 opacity-60 [mask-image:linear-gradient(to_bottom,#000,transparent)]" />
      <div className="container-x section-y">
        <h2 id="pilot-title" className="h-section max-w-3xl">{pilot.h2}</h2>
        <p className="lead mt-4 max-w-3xl">{pilot.intro}</p>
        <ol className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {pilot.stages.map((s, i) => <ProcessStep key={s.title} dark n={i + 1} title={s.title} body={s.body} />)}
        </ol>
        <p className="mt-10 max-w-3xl border-s-2 border-gold-bright ps-4 text-slate-100">{pilot.note}</p>
      </div>
    </section>
  );
}
