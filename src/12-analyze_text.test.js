// TODO : test analyzeText.js
import { describe, test, expect } from "vitest";
import { analyzeText } from "./12-analyze_text";

describe("analyse_text", () => {
  test("", () => {
    expect(analyzeText("Hello world.")).toBe({
      letters: 10,
      words: 2,
      sentences: 1,
    });
    expect(analyzeText("Hello world. How are you?")).toBe({
      letters: 19,
      words: 5,
      sentences: 2,
    });
    expect(analyzeText("")).toBe({
      letters: 0,
      words: 0,
      sentences: 0,
    });
  });
});
