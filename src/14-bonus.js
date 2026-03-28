export function initNextButton() {
  const nextButton = document.getElementById("next-question-button");
  const resultButton = document.createElement("button");
  resultButton.innerText = "Résultat";
  resultButton.classList.add("result-button", "hidden");
  nextButton.classList.add("hidden");
  resultButton.classList.add("hidden");
  answerButtons.forEach((button) => (button.disabled = false));
}
