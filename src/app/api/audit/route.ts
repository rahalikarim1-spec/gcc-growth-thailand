import { NextResponse } from "next/server";
import { validateAudit, type AuditPayload } from "@/lib/audit";

export const dynamic = "force-dynamic";

const clip = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function POST(req: Request) {
  let raw: Record<string, unknown>;
  try {
    raw = await req.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  // Honeypot: bots fill hidden fields. Pretend success.
  if (clip(raw.hp, 100)) return NextResponse.json({ ok: true });

  const payload: AuditPayload = {
    name: clip(raw.name, 120),
    company: clip(raw.company, 160),
    website: clip(raw.website, 200),
    businessType: clip(raw.businessType, 120),
    targetMarket: clip(raw.targetMarket, 120),
    situation: clip(raw.situation, 120),
    contact: clip(raw.contact, 160),
    message: clip(raw.message, 2000),
    locale: clip(raw.locale, 5),
  };

  const errors = validateAudit(payload);
  if (Object.keys(errors).length) return NextResponse.json({ ok: false, errors }, { status: 422 });

  const webhook = process.env.AUDIT_WEBHOOK_URL;
  if (!webhook) {
    // No delivery channel configured. Never report success in production, or leads would be silently lost.
    if (process.env.NODE_ENV === "production") {
      console.error("AUDIT_WEBHOOK_URL is not set; audit request was not delivered.");
      return NextResponse.json({ ok: false }, { status: 503 });
    }
    console.info("[audit:dev] request received (not delivered):", payload);
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ ...payload, receivedAt: new Date().toISOString() }),
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Audit webhook failed:", err);
    return NextResponse.json({ ok: false }, { status: 502 });
  }
}
