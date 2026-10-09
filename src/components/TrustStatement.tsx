import { ShieldCheck } from "lucide-react";

export function TrustStatement({ lead, text }: { lead: string; text: string }) {
  return (
    <aside className="relative rounded-2xl border border-signal-bright/40 bg-signal-bright/[0.07] p-5 sm:p-6">
      <div className="flex items-start gap-4">
        <ShieldCheck aria-hidden className="mt-0.5 size-6 shrink-0 text-signal-bright" />
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-signal-bright">{lead}</p>
          <p className="mt-2 text-base font-medium leading-relaxed text-white sm:text-lg">{text}</p>
        </div>
      </div>
    </aside>
  );
}
