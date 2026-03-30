// ======================================= INSTRUCTION =======================================

/* Write a function named analyze_text that takes a string as argument.

 It will return an object with the following properties:
 - letters: number of alphabetical characters (A–Z, a–z)
 - words: number of words
 - sentences: number of sentences

 A word is defined as a sequence of alphabetical characters.
 A sentence ends with one of the following characters:
 '.', '!' or '?'.

 ⚠️ You are NOT allowed to use:
 - split()
 - Regular expressions (REGEX)

 You must iterate through the string character by character.

 Examples

 This: analyze_text("Hello world.")
 Will return:
 { letters: 10, words: 2, sentences: 1 }

 This: analyze_text("Hello world. How are you?")
 Will return:
 { letters: 21, words: 5, sentences: 2 }

 This: analyze_text("")
 Will return:
 { letters: 0, words: 0, sentences: 0 }
*/

// ======================================= RESOLUTION ========================================

/**
 * takes a string as an argument and returns an object
 * {letters: number, words: number, sentences: number}
 * @param {string} str
 * @returns {object}
 */

export const analyzeText = (str) => {
  let letters = 0;
  let words = 0;
  let sentences = 0;
  let isAWord = false;

  if (str === "") return { letters, words, sentences };

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")) {
      letters += 1;
      if (!isAWord) {
        words += 1;
        isAWord = true;
      }
    } else {
      isAWord = false;
    }
    if (char === "." || char === "!" || char === "?") {
      sentences += 1;
    }
  }
  return { letters, words, sentences };
};
