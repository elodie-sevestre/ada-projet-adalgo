// Ecrivez les tests attestant du bon fonctionnement des questions suivantes.
// faites une phase de clean code et modifier certaines variables / noms de variable si nÃ©cessaire.

function arraysEqual(a, b) {
  return a.length === b.length && a.every((val, i) => val === b[i]);
}

// --- Affichage mauvaise rÃ©ponse avec la correction ---
function badGirl(divID, data, nbQuestion) {
  const div = document.getElementById(divID);
  const question = data[nbQuestion - 1];
  const correctAnswers = question.correctIndex
    .map((index) => question.options[index])
    .join(", ");
  div.innerHTML = `
        <div id="answerMessage">
        <p>Mauvaise fille</p>
        <p>La bonne rÃ©ponse Ã©tait :${correctAnswers}</p>
        </div>
        <button id="next-question">Question suivante</button>
    `;
}

export function initNextButton() {
  const nextButton = document.getElementById("next-question-button");
  const resultButton = document.createElement("button");
  resultButton.innerText = "Résultat";
  resultButton.classList.add("result-button", "hidden");
  nextButton.classList.add("hidden");
  resultButton.classList.add("hidden");
  answerButtons.forEach((button) => (button.disabled = false));
}

// Fonction qui transforme le score en pourcentage

function calculPourcentScore(finalScore, numberQuestions) {
  pourcentScore = (finalScore / numberQuestions) * 100;
}
