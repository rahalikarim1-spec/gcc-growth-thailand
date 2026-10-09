import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function ServiceCard({ href, title, summary, index, cta }: { href: string; title: string; summary: string; index?: number; cta: string }) {
  return (
    <Link href={href} className="card group flex h-full flex-col p-6 sm:p-7">
      {index !== undefined && <span className="font-mono text-xs text-signal">{String(index + 1).padStart(2, "0")}</span>}
      <h3 className="mt-3 text-xl font-semibold">{title}</h3>
      <p className="mt-2 grow text-muted">{summary}</p>
      <span className="link-arrow mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-signal-dark">
        {cta}
        <ArrowUpRight aria-hidden className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
