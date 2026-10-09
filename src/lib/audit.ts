export interface AuditPayload {
  name: string;
  company: string;
  website: string;
  businessType: string;
  targetMarket: string;
  situation: string;
  contact: string;
  message: string;
  locale: string;
}

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE = /^\+?[0-9\s().-]{7,20}$/;

export function isValidContact(v: string): boolean {
  const s = v.trim();
  return EMAIL.test(s) || PHONE.test(s);
}

export function validateAudit(p: Partial<AuditPayload>): Partial<Record<keyof AuditPayload, true>> {
  const e: Partial<Record<keyof AuditPayload, true>> = {};
  if (!p.name?.trim()) e.name = true;
  if (!p.company?.trim()) e.company = true;
  if (!p.businessType?.trim()) e.businessType = true;
  if (!p.contact || !isValidContact(p.contact)) e.contact = true;
  return e;
}
