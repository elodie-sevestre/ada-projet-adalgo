/**
 * This function tries to use french inclusive notation instead of masculine or feminine gender in sentences.
 * *This is a simplified version that focuses on simple pronouns replacement.*
 * The function should :
 * - replace il, elle by iel
 * - replace ils, elles by iels
 * - replace ceux, celle by celleux
 * Be carreful to properly handle edge cases from tests.
 *
 */

/**
 * @param {string} text
 * @returns {string} an updated text with every
 * "il/elle" ou "Il/Elle" replaced by "iel ou Iel"
 * "ils/elles ou "Ils/Elles" replaced by "iels ou Iels"
 * "ceux/celle ou Ceux/Celle" replaced by "celleux ou Celleux"
 */

export const inclusify = (text) => {
  return text
    .replace(/\b(ils|elles)\b/gi, (match) =>
      match[0] === "I" || match[0] === "E" ? "Iels" : "iels",
    )
    .replace(/\b(il|elle)\b/gi, (match) =>
      match[0] === "I" || match[0] === "E" ? "Iel" : "iel",
    )
    .replace(/\b(ceux|celle)\b/gi, (match) =>
      match[0] === "C" ? "Celleux" : "celleux",
    );
};

/**
 * \b -> en regex signifie "frontière de mot"
 *   - c'est une position entre :
 *     - un caractère de mot (lettre, chiffre)
 *     - et un non-mot (espace, ponctuation, début/fin de phrase).
 *   Exemple : /\bil\b/ matche "il" seul, mais pas "cils" ni "ville"
 *
 * Flag /g -> "global" : remplace toutes les occurrences dans le texte,
 *   pas seulement la première.
 *
 * Flag /i -> "insensitive" : ignore la casse (majuscule/minuscule).
 *   Exemple : /\bil\b/i matche "il", "Il", "IL"...
 *
 * (il|elle) -> le | signifie "ou" en regex.
 *   Les parenthèses groupent les alternatives.
 *   Exemple : /(il|elle)/ matche "il" ou "elle"
 *
 * (match) => ... -> fonction de remplacement passée à replace().
 *   "match" contient le texte qui a été matché.
 *   On vérifie match[0] (la première lettre) pour détecter
 *   une majuscule et préserver la casse dans le remplacement.
 *
 * Ordre important : les pluriels (ils/elles) sont traités AVANT
 *   les singuliers (il/elle) pour éviter que "ils" soit d'abord
 *   partiellement matché par /\bil\b/.
 */
