// ======================================= INSTRUCTION =======================================

/* This function modifies a given word based on its ending.

If the word does not end with "ing",
the function should add "ing" to the end of the word.

If the word already ends with "ing",
the function should add "ly" instead.

The function should return the updated word.

For example:

ingly("play") => return "playing"

ingly("playing") => return "playingly"

ingly("swim") => return "swiming"
*/

/* Fonctionnalités à utiliser en JavaScript :

String.endsWith("ing") — pour vérifier la fin du mot
La concaténation de chaînes + — pour ajouter le suffixe
Une condition if / else
return — pour retourner le résultat
*/

// ======================================= RESOLUTION ========================================

/**
 * modifies a given word based on its ending
 * @param {string} word
 * @returns {string}
 */

export const ingly = (word) => {
  if (word.toLowerCase().endsWith("ing")) {
    return word.toUpperCase() === word ? word + "LY" : word + "ly";
  } else {
    return word.toUpperCase() === word && word !== ""
      ? word + "ING"
      : word + "ing";
  }
};
