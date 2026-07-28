import { describe, expect, it } from "vitest";
import { validateContent } from "../../scripts/check-content.mts";

describe("published site content", () => {
  it("has a complete, renderable record for every published app", () => {
    expect(validateContent(process.cwd())).toEqual([]);
  });
});
