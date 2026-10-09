import { ArrowDown, ArrowRight } from "lucide-react";

/** A labelled step sequence. Vertical on small screens, wrapping horizontal on large. Used for customer journeys. */
export function JourneyFlow({ label, steps, tone = "dark" }: { label: string; steps: string[]; tone?: "dark" | "light" }) {
  const dark = tone === "dark";
  return (
    <div className={`rounded-2xl border p-5 sm:p-6 ${dark ? "border-white/12 bg-white/[0.03]" : "border-line bg-white shadow-card"}`}>
      <h3 className={`font-mono text-xs uppercase tracking-widest ${dark ? "text-signal-bright" : "text-signal"}`}>{label}</h3>
      <ol className="mt-5 flex flex-col items-stretch gap-2 lg:flex-row lg:flex-nowrap lg:items-stretch">
        {steps.map((s, i) => (
          <li key={s} className={`flex flex-col items-stretch gap-2 lg:flex-row lg:items-center lg:gap-1.5 ${i < steps.length - 1 ? "lg:flex-[1_1_0]" : "lg:flex-[1_1_0]"} lg:min-w-0`}>
            <span className={`flex-1 rounded-xl border px-4 py-3 text-[0.95rem] font-medium leading-snug lg:min-w-0 lg:flex-1 lg:px-3 lg:py-2.5 lg:text-sm ${dark ? "border-white/15 bg-ink-900" : "border-line bg-paper"} ${i === steps.length - 1 ? (dark ? "!border-signal-bright/60 !bg-signal-bright/10" : "!border-signal/50") : ""}`}>
              <span className={`mb-1 block font-mono text-[0.7rem] ${dark ? "text-signal-bright" : "text-signal"}`}>{String(i + 1).padStart(2, "0")}</span>
              {s}
            </span>
            {i < steps.length - 1 && (
              <>
                <ArrowDown aria-hidden className="mx-auto size-4 opacity-50 lg:hidden" />
                <ArrowRight aria-hidden className="hidden size-4 shrink-0 opacity-50 lg:block rtl:rotate-180" />
              </>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
