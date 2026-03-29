// TODO : test analyzeText.js
import { describe, test, expect } from "vitest";
import { analyzeText } from "./12-analyzeText";

describe("analyse_text", () => {
  test("", () => {
    expect(analyzeText("Hello world.")).toStrictEqual({
      letters: 10,
      words: 2,
      sentences: 1,
    });
    expect(analyzeText("Hello world. How are you?")).toStrictEqual({
      letters: 19,
      words: 5,
      sentences: 2,
    });
    expect(analyzeText("")).toStrictEqual({
      letters: 0,
      words: 0,
      sentences: 0,
    });
  });
});
