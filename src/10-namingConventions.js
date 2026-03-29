// ======================================= RESOLUTION ========================================

/**
 * takes a input name formatted in snakecase and return the same name in camelcase.
 *
 * @param {string} str the input name
 * @returns {string} the new output name
 */

export const toCamelCase = (str) => {
  if (!str.includes("_")) {
    return str;
  }
  const words = str.toLowerCase().split("_");

  const first = words.shift(); // first word stays the same
  let result = first;

  for (const word of words) {
    const capitalized = word[0].toUpperCase() + word.slice(1);
    result += capitalized;
  }

  return result;
};

// ======================================= RESOLUTION ========================================

/**
 * takes a input name formatted in camelcase and return the same name in snakecase.
 *
 * @param {string} str the input name
 * @returns {string} the new output name
 */

export const toSnakeCase = (str) => {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char !== char.toLowerCase()) {
      result += "_" + char.toLowerCase();
    } else {
      result += char.split("_");
    }
  }
  return result;
};
