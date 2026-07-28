import type { Locale } from "../../lib/types";

export type LegalKind = "privacy" | "support" | "terms";

export interface LegalSection {
  title: string;
  paragraphs: readonly string[];
  bullets?: readonly string[];
}

export interface LegalDocument {
  title: string;
  updatedAt: string;
  sections: readonly LegalSection[];
}

export type LocalizedLegalDocuments = Record<LegalKind, LegalDocument>;
export type AppLegalDocuments = Record<Locale, LocalizedLegalDocuments>;

export type PermissionKind = "photos" | "camera" | "microphone" | "calendar" | "location" | "notifications" | "biometric" | "localNetwork";

export interface LegalProfile {
  slug: string;
  names: Record<Locale, string>;
  contentKinds: Record<Locale, string>;
  email: string;
  operator: string;
  permissions: readonly PermissionKind[];
  usesICloud: boolean;
  usesStoreKit: boolean;
  usesWeatherKit?: boolean;
  localSharing?: Record<Locale, string>;
  hasPurchases: boolean;
}
