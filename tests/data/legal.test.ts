import { describe, expect, it } from "vitest";
import { apps } from "../../src/data/apps";
import { legalDocumentsBySlug } from "../../src/data/legal";
import { locales } from "../../src/lib/locales";

describe("legal document completeness", () => {
  it("provides privacy, support, and terms in every supported locale", () => {
    for (const app of apps) {
      for (const locale of locales) {
        const documents = legalDocumentsBySlug[app.slug][locale];
        expect(documents.privacy.sections.length).toBeGreaterThan(0);
        expect(documents.support.sections.length).toBeGreaterThan(0);
        expect(documents.terms.sections.length).toBeGreaterThan(0);
      }
    }
  });
});
