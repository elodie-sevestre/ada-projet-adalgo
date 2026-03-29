// ======================================= INSTRUCTION =======================================

/* Write a function named passwd_validator that takes a string as argument.

 It will return True if the string is a valid password; False otherwise.
 A valid password has the following characteristics:

 it has between 6 and 12 characters (included)
 it has at least one lowercase character
  it has at least one uppercase character
 it has at least one decimal number
 it has at least one special character: $, # or @
 Examples
 This: passwd_validator("l#H1@")
 Will return: False (because there are less than 6 characters)
 This: passwd_validator("el3H1@f")
 Will return: True

 This: passwd_validator("fwjifewJ#")
 Will return: False (because there's no decimal numbers) */

// ======================================= RESOLUTION ========================================

/**
 * check if the string is a valid password
 * @param {string} str
 * @returns boolean
 */
export const passwd_validator = (str) => {
  // SI longueur < 6 OU longueur > 12 : retourner FAUX
  if (str.length < 6 || str.length > 12) return false;

  // déclaration variable pour caractère à valider
  let hasLowerChar = false;
  let hasUpperChar = false;
  let hasNumberChar = false;
  let hasSpecialChar = false;

  // boucle pour vérifier si les conditions d'écriture du passwd sont validées
  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    // ASCII : les caractères ont des codes numériques ordonnés
    // 'a'(97) à 'z'(122) → minuscules
    // console.log("x".charCodeAt(0));

    if (char >= "a" && char <= "z") hasLowerChar = true;
    if (char >= "A" && char <= "Z") hasUpperChar = true;
    if (char >= "0" && char <= "9") hasNumberChar = true;
    if (char === "$" || char === "#" || char === "@") hasSpecialChar = true;

    // Retourner VRAI seulement si les 4 conditions sont vraies}
    return hasLowerChar && hasUpperChar && hasNumberChar && hasSpecialChar;
  }
};
