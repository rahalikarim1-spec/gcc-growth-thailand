"use client";

import { useId, useRef, useState } from "react";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { validateAudit, type AuditPayload } from "@/lib/audit";
import { person } from "@/lib/site";
import type { Dictionary } from "@/content/types";

type Status = "idle" | "sending" | "success" | "error";
type Errors = Partial<Record<keyof AuditPayload, true>>;

const field = "mt-1.5 w-full rounded-lg border border-ink-600/30 bg-white px-3.5 py-3 text-base text-ink-900 placeholder:text-slate-400 focus:border-signal focus:outline-none focus:ring-2 focus:ring-signal/30 aria-[invalid=true]:border-red-600";

export function AuditForm({ locale, f }: { locale: string; f: Dictionary["form"] }) {
  const uid = useId();
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const statusRef = useRef<HTMLDivElement>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const data = Object.fromEntries(fd.entries()) as Record<string, string>;
    const payload = { ...data, locale } as unknown as Partial<AuditPayload> & { hp?: string };
    const found = validateAudit(payload);
    setErrors(found);
    if (Object.keys(found).length) {
      const first = (["name", "company", "businessType", "contact"] as const).find((k) => found[k]);
      requestAnimationFrame(() => (form.elements.namedItem(first ?? "name") as HTMLElement | null)?.focus());
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/audit/", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(payload) });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
    requestAnimationFrame(() => statusRef.current?.focus());
  }

  if (status === "success") {
    return (
      <div ref={statusRef} tabIndex={-1} role="status" className="rounded-2xl border border-signal/40 bg-white p-8 shadow-card">
        <CheckCircle2 aria-hidden className="size-8 text-signal" />
        <h2 className="mt-4 text-2xl font-semibold">{f.successTitle}</h2>
        <p className="mt-2 text-muted">{f.successBody}</p>
      </div>
    );
  }

  const id = (n: string) => `${uid}-${n}`;
  const err = (n: keyof AuditPayload) => (errors[n] ? { "aria-invalid": true as const, "aria-describedby": id(`${n}-err`) } : {});
  const err_ = (n: keyof AuditPayload, msg: string) =>
    errors[n] ? <p id={id(`${n}-err`)} className="mt-1 text-sm text-red-700">{msg}</p> : null;

  return (
    <form onSubmit={onSubmit} noValidate className="card grid gap-5 p-6 sm:p-8">
      {status === "error" && (
        <div ref={statusRef} tabIndex={-1} role="alert" className="flex gap-3 rounded-lg border border-red-300 bg-red-50 p-4 text-red-900">
          <AlertCircle aria-hidden className="mt-0.5 size-5 shrink-0" />
          <div>
            <p className="font-semibold">{f.errorTitle}</p>
            <p className="text-sm">
              {f.errorBody}{" "}
              <a className="underline" href={person.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </p>
          </div>
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={id("name")} className="font-medium">{f.name}</label>
          <input id={id("name")} name="name" autoComplete="name" required className={field} {...err("name")} />
          {err_("name", f.required)}
        </div>
        <div>
          <label htmlFor={id("company")} className="font-medium">{f.company}</label>
          <input id={id("company")} name="company" autoComplete="organization" required className={field} {...err("company")} />
          {err_("company", f.required)}
        </div>
      </div>

      <div>
        <label htmlFor={id("website")} className="font-medium">{f.website} <span className="font-normal text-muted">({f.optional})</span></label>
        <input id={id("website")} name="website" type="url" inputMode="url" autoComplete="url" placeholder="https://" className={field} />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={id("businessType")} className="font-medium">{f.businessType}</label>
          <select id={id("businessType")} name="businessType" defaultValue="" required className={field} {...err("businessType")}>
            <option value="" disabled>{f.select}</option>
            {f.businessTypes.map((o) => <option key={o}>{o}</option>)}
          </select>
          {err_("businessType", f.required)}
        </div>
        <div>
          <label htmlFor={id("targetMarket")} className="font-medium">{f.targetMarket}</label>
          <select id={id("targetMarket")} name="targetMarket" defaultValue="" className={field}>
            <option value="" disabled>{f.select}</option>
            {f.markets.map((o) => <option key={o}>{o}</option>)}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor={id("situation")} className="font-medium">{f.situation}</label>
        <select id={id("situation")} name="situation" defaultValue="" className={field}>
          <option value="" disabled>{f.select}</option>
          {f.situations.map((o) => <option key={o}>{o}</option>)}
        </select>
      </div>

      <div>
        <label htmlFor={id("contact")} className="font-medium">{f.contactField}</label>
        <input id={id("contact")} name="contact" autoComplete="email" required placeholder={f.contactHint} className={field} {...err("contact")} />
        {err_("contact", f.invalidContact)}
      </div>

      <div>
        <label htmlFor={id("message")} className="font-medium">{f.message} <span className="font-normal text-muted">({f.optional})</span></label>
        <textarea id={id("message")} name="message" rows={4} className={field} />
      </div>

      {/* Honeypot — hidden from people and assistive tech. */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>Leave empty<input name="hp" tabIndex={-1} autoComplete="off" /></label>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" disabled={status === "sending"} className="btn btn-primary disabled:opacity-70">
          {status === "sending" ? f.sending : f.submit}
        </button>
        <p className="text-sm text-muted">{f.privacy}</p>
      </div>
    </form>
  );
}
