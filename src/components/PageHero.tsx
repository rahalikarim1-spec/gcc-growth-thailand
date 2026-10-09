import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";

interface Props {
  crumbs: Crumb[];
  crumbsLabel: string;
  h1: string;
  lead: string;
  note?: string;
  cta?: { href: string; label: string };
}

export function PageHero({ crumbs, crumbsLabel, h1, lead, note, cta }: Props) {
  return (
    <section className="on-dark relative isolate overflow-hidden bg-ink-950 text-white">
      <div aria-hidden className="grid-bg absolute inset-0 -z-10 [mask-image:radial-gradient(80%_100%_at_20%_0%,#000,transparent)]" />
      <div aria-hidden className="absolute -right-32 -top-20 -z-10 size-96 rounded-full bg-signal/20 blur-3xl" />
      <div className="container-x py-12 lg:py-20">
        <Breadcrumbs items={crumbs} label={crumbsLabel} dark />
        <h1 className="h-display mt-8 max-w-4xl !text-[clamp(2rem,4.6vw,3.5rem)]">{h1}</h1>
        <p className="lead mt-6 max-w-3xl">{lead}</p>
        {note && <p className="mt-6 max-w-2xl border-s-2 border-signal-bright ps-4 text-slate-100">{note}</p>}
        {cta && (
          <Link href={cta.href} className="btn btn-primary-dark mt-8">
            {cta.label}<ArrowRight aria-hidden className="arrow size-4" />
          </Link>
        )}
      </div>
    </section>
  );
}
