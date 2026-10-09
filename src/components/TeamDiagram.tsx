import type { Dictionary } from "@/content/types";

function Operator({ symbol, label }: { symbol: string; label: string }) {
  return (
    <div className="flex items-center justify-center py-1 lg:px-1" role="presentation">
      <span aria-hidden className="grid size-11 place-items-center rounded-full border border-ink-900/20 bg-white text-2xl font-light shadow-card">{symbol}</span>
      <span className="sr-only">{label}</span>
    </div>
  );
}

export function TeamDiagram({ d }: { d: Dictionary["home"]["keepTeam"]["diagram"] }) {
  return (
    <div className="grid items-stretch lg:grid-cols-[1fr_auto_1.15fr_auto_1fr]">
      <section aria-labelledby="dg-existing" className="rounded-2xl border border-line bg-white p-6 shadow-card">
        <h3 id="dg-existing" className="font-mono text-xs uppercase tracking-widest text-muted">{d.existingTitle}</h3>
        <ul className="mt-4 grid gap-2">
          {d.existing.map((x) => <li key={x} className="rounded-lg border border-line bg-paper px-4 py-3 font-medium">{x}</li>)}
        </ul>
      </section>
      <Operator symbol="+" label={d.plus} />
      <section aria-labelledby="dg-layer" className="on-dark rounded-2xl border border-signal-bright/40 bg-ink-900 p-6 text-white shadow-lift">
        <h3 id="dg-layer" className="font-mono text-xs uppercase tracking-widest text-signal-bright">{d.layerTitle}</h3>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          {d.layer.map((x) => <li key={x} className="rounded-lg border border-white/12 bg-white/[0.05] px-4 py-3 text-[0.95rem] font-medium">{x}</li>)}
        </ul>
      </section>
      <Operator symbol="=" label={d.equals} />
      <section aria-labelledby="dg-result" className="flex flex-col rounded-2xl border border-gold/40 bg-gradient-to-b from-[#fbf3df] to-white p-6 shadow-card">
        <h3 id="dg-result" className="font-mono text-xs uppercase tracking-widest text-gold">{d.resultTitle}</h3>
        <ul className="mt-4 grid grow content-center gap-4">
          {d.result.map((x) => <li key={x} className="text-2xl font-semibold leading-tight">{x}</li>)}
        </ul>
      </section>
    </div>
  );
}
