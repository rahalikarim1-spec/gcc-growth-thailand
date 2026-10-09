import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { localePath, type Locale } from "@/lib/i18n";

export function CTASection({ locale, title, body, cta, id }: { locale: Locale; title: string; body: string; cta: string; id?: string }) {
  return (
    <section id={id} aria-labelledby={`${id ?? "cta"}-title`} className="on-dark relative isolate overflow-hidden bg-ink-950 text-white">
      <div aria-hidden className="grid-bg absolute inset-0 -z-10 opacity-60 [mask-image:radial-gradient(70%_100%_at_50%_0%,#000,transparent)]" />
      <div className="container-x section-y flex flex-col items-start gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <h2 id={`${id ?? "cta"}-title`} className="h-section">{title}</h2>
          <p className="lead mt-4">{body}</p>
        </div>
        <Link href={localePath(locale, "/contact")} className="btn btn-primary-dark shrink-0">
          {cta}
          <ArrowRight aria-hidden className="arrow size-4" />
        </Link>
      </div>
    </section>
  );
}
