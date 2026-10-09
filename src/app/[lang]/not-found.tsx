import Link from "next/link";
import { getDictionary } from "@/content";
import { defaultLocale } from "@/lib/i18n";

export default function NotFound() {
  // Locale is not available to not-found; default to English with a language-neutral link.
  const dict = getDictionary(defaultLocale);
  return (
    <section className="container-x section-y">
      <p className="eyebrow">404</p>
      <h1 className="h-display mt-3">{dict.notFound.title}</h1>
      <p className="lead mt-4">{dict.notFound.body}</p>
      <Link href="/en/" className="btn btn-primary mt-8">{dict.notFound.back}</Link>
    </section>
  );
}
