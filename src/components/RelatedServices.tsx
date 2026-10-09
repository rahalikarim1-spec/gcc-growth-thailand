import type { Locale } from "@/lib/i18n";
import { localePath } from "@/lib/i18n";
import type { ServiceSlug } from "@/lib/routes";
import type { Dictionary } from "@/content/types";
import { ServiceCard } from "./ServiceCard";

export function RelatedServices({ locale, dict, slugs, title, intro }: { locale: Locale; dict: Dictionary; slugs: ServiceSlug[]; title: string; intro?: string }) {
  return (
    <section aria-labelledby="related-services" className="section-y border-t border-line">
      <div className="container-x">
        <h2 id="related-services" className="h-section max-w-3xl">{title}</h2>
        {intro && <p className="lead mt-4 max-w-2xl">{intro}</p>}
        <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {slugs.map((s) => (
            <li key={s}>
              <ServiceCard href={localePath(locale, `/services/${s}`)} title={dict.services[s].cardTitle} summary={dict.services[s].cardSummary} cta={dict.ui.explore} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
