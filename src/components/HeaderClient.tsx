"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import { HotBadge } from "./HotBadge";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MegaMenu, type MenuItem } from "./MegaMenu";

export interface HeaderData {
  locale: Locale;
  homeHref: string;
  brand: string;
  brandAria: string;
  services: { label: string; items: MenuItem[]; all: MenuItem };
  industries: { label: string; items: MenuItem[]; all: MenuItem };
  links: { href: string; label: string }[];
  cta: { href: string; label: string };
  labels: { menu: string; close: string; primary: string; language: string };
}

type Menu = "services" | "industries" | null;

export function HeaderClient({ data }: { data: HeaderData }) {
  const pathname = usePathname();
  // Open state is tied to the pathname it was opened on, so navigation closes menus without an effect.
  const [state, setState] = useState<{ menu: Menu; mobile: boolean; path: string }>({ menu: null, mobile: false, path: pathname });
  const open = state.path === pathname ? state : { menu: null as Menu, mobile: false, path: pathname };
  const ref = useRef<HTMLElement>(null);

  const set = (patch: Partial<typeof state>) => setState({ ...open, ...patch, path: pathname });

  useEffect(() => {
    if (!open.menu && !open.mobile) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setState((s) => ({ ...s, menu: null, mobile: false }));
    };
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setState((s) => ({ ...s, menu: null }));
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, [open.menu, open.mobile]);

  const { services, industries, links, cta, labels } = data;

  return (
    <header ref={ref} className="on-dark sticky top-0 z-40 border-b border-white/10 bg-ink-950/95 text-white backdrop-blur supports-[backdrop-filter]:bg-ink-950/85">
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <Link href={data.homeHref} aria-label={data.brandAria} className="flex items-center gap-2.5 font-semibold tracking-tight">
          <span aria-hidden className="grid size-8 place-items-center rounded-lg border border-signal-bright/50 font-mono text-xs text-signal-bright">WB</span>
          <span className="hidden text-[0.95rem] sm:block">{data.brand}</span>
        </Link>

        <nav aria-label={labels.primary} className="hidden items-center gap-0.5 lg:flex">
          <MegaMenu id="menu-services" label={services.label} items={services.items} all={services.all} open={open.menu === "services"} onToggle={() => set({ menu: open.menu === "services" ? null : "services" })} />
          <MegaMenu id="menu-industries" label={industries.label} items={industries.items} all={industries.all} open={open.menu === "industries"} onToggle={() => set({ menu: open.menu === "industries" ? null : "industries" })} />
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="rounded-md px-3 py-2 text-[0.9375rem] font-medium text-slate-200 hover:text-white">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="text-slate-200"><LanguageSwitcher current={data.locale} label={labels.language} /></div>
          <Link href={cta.href} className="btn btn-primary-dark hidden !min-h-10 !px-4 !py-2 !text-sm xl:inline-flex">{cta.label}</Link>
          <button
            type="button"
            aria-expanded={open.mobile}
            aria-controls="mobile-menu"
            aria-label={open.mobile ? labels.close : labels.menu}
            onClick={() => set({ mobile: !open.mobile })}
            className="grid size-11 place-items-center rounded-lg border border-white/20 lg:hidden"
          >
            {open.mobile ? <X aria-hidden className="size-5" /> : <Menu aria-hidden className="size-5" />}
          </button>
        </div>
      </div>

      <div id="mobile-menu" hidden={!open.mobile} className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-white/10 bg-ink-950 lg:hidden">
        <nav aria-label={labels.primary} className="container-x grid gap-6 py-6">
          {[services, industries].map((group) => (
            <div key={group.label}>
              <p className="font-mono text-xs uppercase tracking-widest text-slate-400">{group.label}</p>
              <ul className="mt-2 grid">
                {group.items.map((it) => (
                  <li key={it.href}><Link href={it.href} className="flex items-center gap-2 py-2.5 text-base text-white">{it.label}{it.hot && <HotBadge label={it.hot} tone="dark" />}</Link></li>
                ))}
                <li><Link href={group.all.href} className="block py-2.5 text-base font-semibold text-signal-bright">{group.all.label} →</Link></li>
              </ul>
            </div>
          ))}
          <ul className="grid border-t border-white/10 pt-2">
            {links.map((l) => (
              <li key={l.href}><Link href={l.href} className="block py-2.5 text-base text-white">{l.label}</Link></li>
            ))}
          </ul>
          <Link href={cta.href} className="btn btn-primary-dark">{cta.label}</Link>
        </nav>
      </div>
    </header>
  );
}
