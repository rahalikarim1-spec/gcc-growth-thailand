/** Understated "HOT" marker: a thin gold outline pill with a small dot. Static (no animation) to stay premium. */
export function HotBadge({ label, tone = "light" }: { label: string; tone?: "light" | "dark" }) {
  const palette =
    tone === "dark"
      ? "border-gold-bright/50 bg-gold-bright/10 text-gold-bright"
      : "border-gold/40 bg-[#fbf3df] text-gold";
  return (
    <span className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border px-2 py-0.5 align-middle font-mono text-[0.6875rem] font-medium leading-none tracking-[0.14em] ${palette}`}>
      <span aria-hidden className="size-1.5 rounded-full bg-current" />
      {label}
    </span>
  );
}
