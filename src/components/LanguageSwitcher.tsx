"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, localeMeta, type Locale } from "@/lib/i18n";

/** Swaps the locale segment. Slugs are identical across locales so the rest of the path maps 1:1. */
export function LanguageSwitcher({ current, label }: { current: Locale; label: string }) {
  const pathname = usePathname() || `/${current}/`;
  const rest = pathname.replace(/^\/[^/]+/, "") || "/";
  return (
    <nav aria-label={label} className="flex items-center gap-1 font-mono text-sm">
      {locales.map((l, i) => (
        <span key={l} className="flex items-center gap-1">
          {i > 0 && <span aria-hidden className="text-current opacity-40">|</span>}
          <Link
            href={`/${l}${rest}`}
            hrefLang={localeMeta[l].htmlLang}
            lang={localeMeta[l].htmlLang}
            aria-label={localeMeta[l].name}
            aria-current={l === current ? "true" : undefined}
            className={`rounded px-1.5 py-1 ${l === current ? "font-semibold underline decoration-signal-bright decoration-2 underline-offset-[6px]" : "opacity-70 hover:opacity-100"}`}
          >
            {localeMeta[l].label}
          </Link>
        </span>
      ))}
    </nav>
  );
}
