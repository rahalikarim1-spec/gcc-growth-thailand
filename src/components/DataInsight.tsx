import { Database } from "lucide-react";

interface Props {
  title: string;
  body: string;
  pendingLabel: string;
  /** Provide only verified figures. When absent the card renders a "pending" state — never a placeholder number. */
  value?: string;
  source?: string;
}

export function DataInsight({ title, body, pendingLabel, value, source }: Props) {
  return (
    <div className="flex h-full flex-col rounded-xl border border-dashed border-ink-600/30 bg-white/60 p-5">
      <Database aria-hidden className="size-5 text-signal" />
      <h3 className="mt-3 text-base font-semibold">{title}</h3>
      <p className="mt-1 grow text-sm text-muted">{body}</p>
      {value ? (
        <p className="mt-4 text-2xl font-semibold">
          {value}
          {source && <span className="mt-1 block text-xs font-normal text-muted">{source}</span>}
        </p>
      ) : (
        <p className="mt-4 inline-flex items-center gap-2 font-mono text-xs text-muted">
          <span aria-hidden className="size-1.5 rounded-full bg-gold-bright" />
          {pendingLabel}
        </p>
      )}
    </div>
  );
}
