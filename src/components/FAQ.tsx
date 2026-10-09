import { ChevronDown } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import type { Faq } from "@/content/types";
import { RichText, stripMarkup } from "./RichText";

export function FAQ({ title, items, locale }: { title: string; items: Faq[]; locale: Locale }) {
  return (
    <section aria-labelledby="faq-title" className="section-y border-t border-line">
      <div className="container-x grid gap-10 lg:grid-cols-[1fr_2fr]">
        <h2 id="faq-title" className="h-section">{title}</h2>
        <div className="divide-y divide-line border-y border-line">
          {items.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-lg font-medium [&::-webkit-details-marker]:hidden">
                <span>{f.q}</span>
                <ChevronDown aria-hidden className="mt-1.5 size-5 shrink-0 text-signal transition-transform group-open:rotate-180" />
              </summary>
              <p className="rich mt-3 max-w-2xl text-muted"><RichText text={f.a} locale={locale} /></p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Only emit when the same Q&A is visible on the page (it is: <details> content is in the DOM). */
export function faqSchema(items: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: stripMarkup(f.a) },
    })),
  };
}
