import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function IndustryCard({ href, title, body, link, dark }: { href: string; title: string; body: string; link: string; dark?: boolean }) {
  return (
    <Link
      href={href}
      className={`group flex h-full flex-col rounded-2xl border p-6 transition-all duration-200 ${
        dark
          ? "border-white/12 bg-white/[0.03] hover:border-signal-bright/50 hover:bg-white/[0.06]"
          : "border-line bg-white shadow-card hover:-translate-y-0.5 hover:border-[#cfcbbd] hover:shadow-lift"
      }`}
    >
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className={`mt-2 grow text-[0.95rem] ${dark ? "text-slate-300" : "text-muted"}`}>{body}</p>
      <span className={`mt-5 inline-flex items-center gap-1.5 text-sm font-semibold ${dark ? "text-signal-bright" : "text-signal-dark"}`}>
        {link}
        <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1 rtl:rotate-180" />
      </span>
    </Link>
  );
}
