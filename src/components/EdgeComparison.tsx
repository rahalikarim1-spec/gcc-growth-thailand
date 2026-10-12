import { Check } from "lucide-react";
import type { Dictionary } from "@/content/types";

/** Three-way positioning: agency vs. market-entry consultant vs. Wadhah (market intelligence + execution). */
export function EdgeComparison({ edge, id = "edge-title" }: { edge: Dictionary["home"]["edge"]; id?: string }) {
  return (
    <section aria-labelledby={id} className="section-y border-t border-line">
      <div className="container-x">
        <h2 id={id} className="h-section max-w-3xl">{edge.h2}</h2>
        <p className="lead mt-4 max-w-2xl">{edge.intro}</p>
        <ul className="mt-12 grid gap-5 lg:grid-cols-3">
          {edge.cols.map((c) => (
            <li
              key={c.label}
              className={`flex flex-col rounded-2xl border p-6 sm:p-7 ${
                c.highlight ? "on-dark border-signal-bright/40 bg-ink-900 text-white shadow-lift" : "border-line bg-white shadow-card"
              }`}
            >
              <h3 className={`font-mono text-xs uppercase tracking-widest ${c.highlight ? "text-signal-bright" : "text-muted"}`}>{c.label}</h3>
              <p className="mt-3 text-2xl font-semibold leading-snug">{c.line}</p>
              {c.body && <p className="mt-3 text-muted">{c.body}</p>}
              {c.items && (
                <ul className="mt-4 grid gap-2.5">
                  {c.items.map((it) => (
                    <li key={it} className="flex gap-3"><Check aria-hidden className="mt-1 size-4 shrink-0 text-signal-bright" />{it}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-3xl border-s-2 border-signal ps-4 text-lg font-medium">{edge.closing}</p>
      </div>
    </section>
  );
}
