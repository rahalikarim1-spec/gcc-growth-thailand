import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "./types";
import { en } from "./en";
import { th } from "./th";
import { ar } from "./ar";

const dictionaries: Record<Locale, Dictionary> = { en, th, ar };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
