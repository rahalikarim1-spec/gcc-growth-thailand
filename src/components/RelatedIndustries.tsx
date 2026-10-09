import type { Locale } from "@/lib/i18n";
import { localePath } from "@/lib/i18n";
import type { IndustrySlug } from "@/lib/routes";
import type { Dictionary } from "@/content/types";
import { IndustryCard } from "./IndustryCard";

export function RelatedIndustries({ locale, dict, slugs, title, intro }: { locale: Locale; dict: Dictionary; slugs: IndustrySlug[]; title: string; intro?: string }) {
  return (
    <section aria-labelledby="related-industries" className="section-y border-t border-line">
      <div className="container-x">
        <h2 id="related-industries" className="h-section max-w-3xl">{title}</h2>
        {intro && <p className="lead mt-4 max-w-2xl">{intro}</p>}
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {slugs.map((s) => (
            <li key={s}>
              <IndustryCard hot={s === "restaurants" ? dict.ui.hot : undefined} href={localePath(locale, `/industries/${s}`)} title={dict.industries[s].cardTitle} body={dict.industries[s].cardSummary} link={dict.ui.explore} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
