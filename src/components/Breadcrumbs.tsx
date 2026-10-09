import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface Crumb { name: string; href: string }

export function Breadcrumbs({ items, label, dark }: { items: Crumb[]; label: string; dark?: boolean }) {
  return (
    <nav aria-label={label} className={`text-sm ${dark ? "text-slate-300" : "text-muted"}`}>
      <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-1.5">
              {last ? (
                <span aria-current="page" className={dark ? "text-white" : "text-ink-900"}>{item.name}</span>
              ) : (
                <>
                  <Link href={item.href} className="underline-offset-4 hover:underline">{item.name}</Link>
                  <ChevronRight aria-hidden className="size-3.5 opacity-60 rtl:rotate-180" />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: it.url })),
  };
}
