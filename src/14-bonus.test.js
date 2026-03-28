import { describe, test, expect, beforeEach } from "vitest";
import { initNextButton } from "./14-bonus";

describe("initNextButton", () => {
  // beforeEach : fonction de Vitest qui s'exécute automatiquement avant chaque test.
  // Ça permet de repartir d'un DOM propre à chaque fois pour que les tests ne s'influencent pas entre eux.
  beforeEach(() => {
    document.body.innerHTML = `
      <button id="next-question-button"></button>
    `;
  });
  test('check if DOM id="next-question-button" exists', () => {
    initNextButton();
    const nextButton = document.getElementById("next-question-button");
    expect(nextButton).not.toBe(null);
  });
});
