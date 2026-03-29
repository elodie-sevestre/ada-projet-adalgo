// ======================================= INSTRUCTION =======================================

/* This function generates the Fibonacci sequence.

The Fibonacci sequence starts with 0 and 1.
Each next number is the sum of the two previous numbers.

The function takes a number as parameter,
which represents how many elements of the sequence
should be generated.

If the number is 0, the function should return an empty array.
If the number is 1, it should return [0].
If the number is 2, it should return [0, 1].

For example:

const max = 5
fibonacci(max) => return 0, 1, 1, 2, 3

const max = 1
fibonacci(max) => return 0

const max = 0
fibonacci(max) => return []
*/

// ======================================= RESOLUTION ========================================

/**
 * generates the Fibonacci sequence
 * @param {number} number
 * @returns {Array} fibonacci sequence
 */

export const fibonacci = (number) => {
  if (number === 0) {
    return []; // retourne un array vide
  } else if (number === 1) {
    return [0]; // retourne un array avec un élément
  } else if (number === 2) {
    return [0, 1]; // retourne un array avec deux éléments
  } else {
    const result = [0, 1];
    for (let i = 2; i < number; i++) {
      result.push(result[result.length - 1] + result[result.length - 2]);
    }
    return result;
  }
};
