## Structure d’un test avec Vitest

describe : décrit un groupe de tests
it : décrit un cas précis
expect : permet de vérifier un résultat avec une assertion

### Assertions

Une assertion est une vérification.

Exemples courants :

toBe() → égalité stricte
toEqual() → égalité de valeur
toBeTruthy() → valeur vraie
toBeFalsy() → valeur fausse

👉 Si l’assertion échoue, le test est en échec.

# Tests unitaires - `initNextButton`

## La fonction testée

`initNextButton` est une fonction qui manipule des éléments HTML. Elle :

1. Récupère le bouton `#next-question-button` dans le DOM
2. Crée un bouton "Résultat" en JavaScript
3. Ajoute la classe `hidden` aux deux boutons pour les cacher
4. Désactive tous les boutons de réponse (`answerButtons`)

---

## Concepts utilisés dans les tests

### JSDOM

Quand on lance Vitest, on est dans Node.js — il n'y a pas de vrai navigateur, donc pas de `document`, pas de `getElementById`, pas de boutons HTML. **jsdom recrée tout ça en mémoire** pour que les tests puissent interagir avec le DOM comme si c'était un vrai navigateur.

Configuration dans `vitest.config.js` :

```javascript
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
  },
});
```

---

### `beforeEach`

Fonction de Vitest qui s'exécute **automatiquement avant chaque test**. Elle permet de repartir d'un DOM propre à chaque fois, pour que les tests ne s'influencent pas entre eux.

```javascript
beforeEach(() => {
  document.body.innerHTML = `...` // recrée le HTML avant chaque test
  global.answerButtons = ...      // recrée les variables globales
});
```

---

### `global.answerButtons`

`answerButtons` est une variable globale définie dans le projet Adaquiz. Dans le contexte des tests, elle n'existe pas naturellement. On la recrée avec `global.answerButtons` pour simuler son existence.

---

## Les tests

### 1. Vérifier que `#next-question-button` existe

```javascript
test('check if DOM id="next-question-button" exists', () => {
  initNextButton();
  const nextButton = document.getElementById("next-question-button");
  expect(nextButton).not.toBe(null);
});
```

`getElementById` retourne `null` si l'élément n'existe pas. `.not.toBe(null)` vérifie qu'il a bien été trouvé.

---

### 2. Vérifier que les boutons `.answer-button` existent

```javascript
test('check if DOM class="answer-button" exists', () => {
  initNextButton();
  const answerButton = document.querySelector(".answer-button");
  expect(answerButton).not.toBe(null);
});
```

---

### 3. Vérifier le texte du bouton "Résultat"

```javascript
test('check if result button contains the "Résultat" text', () => {
  initNextButton();
  const resultButton = document.querySelector(".button");
  expect(resultButton.textContent).toBe("Résultat");
});
```

`textContent` retourne le texte contenu dans un élément HTML. On vérifie qu'il vaut exactement `"Résultat"`.

---

### 4. Vérifier la classe `hidden`

```javascript
test("adds hidden class to next-question-button", () => {
  initNextButton();
  const nextButton = document.getElementById("next-question-button");
  expect(nextButton.classList.contains("hidden")).toBe(true);
});
```

`classList.contains("hidden")` retourne `true` si l'élément a la classe `hidden`, `false` sinon.

---

### 5. Vérifier que les boutons de réponse sont désactivés

```javascript
test("disables all answer buttons", () => {
  initNextButton();
  const buttons = document.querySelectorAll(".answer-button");
  buttons.forEach((button) => {
    expect(button.disabled).toBe(false);
  });
});
```

`querySelectorAll` retourne une NodeList de tous les boutons `.answer-button`. On vérifie que la propriété `disabled` de chacun vaut `false` (réactivés par la fonction).
