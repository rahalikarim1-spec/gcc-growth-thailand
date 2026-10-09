export function ProcessStep({ n, title, body, dark }: { n: number; title: string; body: React.ReactNode; dark?: boolean }) {
  return (
    <li className={`relative flex flex-col border-t pt-5 ${dark ? "border-white/20" : "border-ink-900/20"}`}>
      <span className={`font-mono text-sm ${dark ? "text-signal-bright" : "text-signal"}`}>{String(n).padStart(2, "0")}</span>
      <h3 className="mt-2 text-xl font-semibold">{title}</h3>
      <p className={`rich mt-2 ${dark ? "text-slate-300" : "text-muted"}`}>{body}</p>
    </li>
  );
}
