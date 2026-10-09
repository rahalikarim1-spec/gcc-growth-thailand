"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { HotBadge } from "./HotBadge";

export interface MenuItem { href: string; label: string; desc?: string; hot?: string }

interface Props {
  id: string;
  label: string;
  items: MenuItem[];
  all: MenuItem;
  open: boolean;
  onToggle: () => void;
}

/** Disclosure-pattern dropdown: a button toggles a panel of real links (keyboard + screen-reader friendly). */
export function MegaMenu({ id, label, items, all, open, onToggle }: Props) {
  return (
    <div className="relative">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={onToggle}
        className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-[0.9375rem] font-medium text-slate-200 hover:text-white"
      >
        {label}
        <ChevronDown aria-hidden className={`size-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <div
        id={id}
        hidden={!open}
        className="absolute left-0 top-full z-50 mt-2 w-[min(30rem,90vw)] rounded-2xl border border-white/10 bg-ink-900 p-3 shadow-2xl"
      >
        <ul className="grid gap-1">
          {items.map((it) => (
            <li key={it.href}>
              <Link href={it.href} className="block rounded-lg px-3 py-2.5 hover:bg-white/8">
                <span className="flex items-center gap-2 text-[0.9375rem] font-medium text-white">{it.label}{it.hot && <HotBadge label={it.hot} tone="dark" />}</span>
                {it.desc && <span className="mt-0.5 block text-sm leading-snug text-slate-400">{it.desc}</span>}
              </Link>
            </li>
          ))}
        </ul>
        <Link href={all.href} className="mt-2 block rounded-lg border-t border-white/10 px-3 pt-3 text-sm font-semibold text-signal-bright hover:underline">
          {all.label} →
        </Link>
      </div>
    </div>
  );
}
