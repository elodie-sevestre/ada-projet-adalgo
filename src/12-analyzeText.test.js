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

// Pour comparer des valeurs primitives (string, number, boolean)
// toBe utilise === : vérifie que c'est exactement la même valeur en mémoire
// expect(2 + 2).toBe(4) ✅

// Pour comparer des objets ou des tableaux
// toStrictEqual compare le contenu propriété par propriété
// { a: 1 } === { a: 1 } → false (deux objets différents en mémoire)
// expect({ a: 1 }).toStrictEqual({ a: 1 }) → true ✅

// toEqual fonctionne aussi pour les tableaux
// expect([1, 2]).toEqual([1, 2]) ✅
