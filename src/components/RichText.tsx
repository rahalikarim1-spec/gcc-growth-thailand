import Link from "next/link";
import { Fragment } from "react";
import type { Locale } from "@/lib/i18n";
import { resolveTarget } from "@/lib/links";

const LINK = /\[([^\]]+)\]\(([a-z]+:[a-z-]+)\)/g;

/** Renders a content string, turning `[text](service:slug)` markup into contextual internal links. */
export function RichText({ text, locale }: { text: string; locale: Locale }) {
  const nodes: React.ReactNode[] = [];
  let last = 0;
  for (const m of text.matchAll(LINK)) {
    const start = m.index ?? 0;
    if (start > last) nodes.push(text.slice(last, start));
    nodes.push(
      <Link key={start} href={resolveTarget(locale, m[2])}>
        {m[1]}
      </Link>,
    );
    last = start + m[0].length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return (
    <>
      {nodes.map((n, i) => (
        <Fragment key={i}>{n}</Fragment>
      ))}
    </>
  );
}

/** Strip link markup for plain-text uses (JSON-LD, meta). */
export function stripMarkup(text: string): string {
  return text.replace(LINK, "$1");
}
