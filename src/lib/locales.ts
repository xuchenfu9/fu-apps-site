import type { Locale, Storefront } from "./types";

export const locales = ["zh-Hans", "zh-Hant", "en", "ja", "ko"] as const satisfies readonly Locale[];

export const localeLabels: Record<Locale, string> = {
  "zh-Hans": "简体中文",
  "zh-Hant": "繁體中文",
  en: "English",
  ja: "日本語",
  ko: "한국어"
};

export const localeDefaultStorefront: Record<Locale, Storefront> = {
  "zh-Hans": "CN",
  "zh-Hant": "HK",
  en: "US",
  ja: "JP",
  ko: "KR"
};

export const isLocale = (value: string | undefined): value is Locale => locales.includes(value as Locale);

export function localePath(locale: Locale, suffix = ""): string {
  const normalizedSuffix = suffix.replace(/^\/+|\/+$/g, "");
  return normalizedSuffix ? `/${locale}/${normalizedSuffix}/` : `/${locale}/`;
}
