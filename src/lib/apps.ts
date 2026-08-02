import { locales } from "./locales";
import type { AppRecord, Locale, LocalizedAppCopy } from "./types";

export function appLocales(app: AppRecord): readonly Locale[] {
  return app.supportedLocales ?? locales;
}

export function appSupportsLocale(app: AppRecord, locale: Locale): boolean {
  return appLocales(app).includes(locale);
}

export function appCopy(app: AppRecord, locale: Locale): LocalizedAppCopy {
  const copy = app.copy[locale];
  if (!copy) throw new Error(`${app.slug} has no copy for ${locale}`);
  return copy;
}
