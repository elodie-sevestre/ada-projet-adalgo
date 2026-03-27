/**
 * This function re-implement the behavior (comportement) of the .includes() array method
 * without using any existing functions.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
 *
 * @param {string[]} array
 * @param {string} searchElement
 * @returns {boolean}
 * @example
 *      myIncludes(['un', 'deux', 'trois'], 'trois'); // returns true
 *      myIncludes(['un', 'deux', 'trois'], 'quatre'); // returns false
 */
export const myIncludes = (array, searchElement) => {
  for (let index = 0; index < array.length; index++) {
    if (array[index] === searchElement) {
      return true;
    }
  }
  return false;
};

/**
 * This function re-implement the behavior of the .indexOf() array method
 * without using any existing functions.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
 *
 * @param {string[]} array
 * @param {string} searchElement
 * @returns {number}
 * @example
 *      myIndexOf(['un', 'deux', 'trois'], 'trois'); // returns 3
 *      myIndexOf(['un', 'deux', 'trois'], 'quatre'); // returns -1
 */
export const myIndexOf = (array, searchElement) => {
  for (let index = 0; index < array.length; index++) {
    if (array[index] === searchElement) {
      return index;
    }
  }
  return -1;
};

/**
 * This function re-implements the behavior of the .startsWith() string method
 * without using any existing string helper functions.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
 *
 * @param {string} str - The full string to test.
 * @param {string} search - The substring to check for at the start.
 * @returns {boolean} True if the string starts with the given substring, false otherwise.
 * @example
 *      myStartsWith('bonjour', 'bon'); // returns true
 *      myStartsWith('bonjour', 'jour'); // returns false
 */
export const myStartsWith = (str, search) => {
  for (let index = 0; index < search.length; index++) {
    if (str[index] !== search[index]) {
      return false;
    }
  }
  return true;
};

/**
 * This function re-implements the behavior of the .repeat() string method
 * without using any existing string helper functions.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
 *
 * @param {string} str - The string to repeat.
 * @param {number} count - The number of times the string should be repeated.
 * @returns {string} The string repeated 'count' times.
 * @example
 *      myRepeat('ha', 3); // returns 'hahaha'
 *      myRepeat('x', 0); // returns ''
 */
export const myRepeat = (str, count) => {
  let result = "";
  for (let i = 0; i < count; i++) {
    result += str;
  }
  return result;
  // je dois retourner str*count si count !== 0
  // je dois retourner str vide si count === 0
};

/**
 * This function re-implements the behavior of the .join() array method
 * without using any existing array helper functions.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
 *
 * @param {any[]} array - The array whose elements will be joined.
 * @param {string} separator - The separator to insert between elements.
 * @returns {string} A string made by concatenating all array items separated by the given string.
 * @example
 *      myJoin(['a', 'b', 'c'], '-'); // returns 'a-b-c'
 *      myJoin(['hello', 'world'], ' '); // returns 'hello world'
 */
export const myJoin = (array, separator) => {
  let result = "";
  for (let i = 0; i < array.length - 1; i++) {
    result += array[i] + separator;
  }
  if (array.length !== 0) {
    return (result += array[array.length - 1]);
  }
  return "";
};

/**
 * This function re-implements the behavior of Object.keys()
 * without using Object.keys() or any built-in reflection helpers.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
 *
 * @param {Object} obj - The object from which to extract keys.
 * @returns {string[]} An array of the object's own enumerable property names.
 * @example
 *      myObjectKeys({a: 1, b: 2}); // returns ['a', 'b']
 */
export const myObjectKeys = (obj) => {
  // je dois récupérer la clé de la propriété de l'objet
  let string = [];
  for (let key in obj) {
    string[string.length] = key;
  }
  return string;
  // puis je retourne sous forme de tableau contenant des strings
};

/**
 * This function re-implements the behavior of Object.entries()
 * without using Object.entries() or any built-in reflection helpers.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
 *
 * @param {Object} obj - The object from which to extract key/value pairs.
 * @returns {Array[]} An array of [key, value] pairs from the object's own enumerable properties.
 * @example
 *      myObjectEntries({a: 1, b: 2});
 *      // returns [['a', 1], ['b', 2]]
 */
export const myObjectEntries = (obj) => {
  let array = [];
  for (let obj in obj) {
    array[array.length] = obj;
  }
  return array;
  //
};
