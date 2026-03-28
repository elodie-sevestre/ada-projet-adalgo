import { describe, test, expect, beforeEach } from "vitest";
import { initNextButton } from "./14-bonus";

describe("fonction qui manipule éléments HTML", () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <button id="next-question-button" class="hidden"></button>
      <button class="answer-button"></button>
      <button class="answer-button"></button>
      <button class="result-button hidden">Résultat</button>
    `;
    global.answerButtons = document.querySelectorAll(".answer-button");
  });

  test('check if DOM id="next-question-button" exists', () => {
    initNextButton();
    const nextButton = document.getElementById("next-question-button");
    expect(nextButton).not.toBe(null);
  });

  test('check if DOM class="answer-button" exists', () => {
    initNextButton();
    const answerButton = document.querySelector(".answer-button");
    expect(answerButton).not.toBe(null);
  });

  test('check if DOM class="result-button" exists', () => {
    initNextButton();
    const resultButton = document.querySelector(".result-button");
    expect(resultButton).not.toBe(null);
  });

  test('check if result button contains the "Résultat" text', () => {
    initNextButton();
    const resultButton = document.querySelector(".result-button");
    expect(resultButton.textContent).toBe("Résultat");
  });

  test("adds hidden class to next-question-button", () => {
    initNextButton();
    const hiddenClass = document.querySelector(".hidden");
    expect(hiddenClass.classList.contains("hidden")).toBe(true);
  });

  test("disables all answer buttons", () => {
    initNextButton();
    const buttons = document.querySelectorAll(".answer-button");
    buttons.forEach((button) => {
      expect(button.disabled).toBe(false);
    });
  });
});
