// ======================================= INSTRUCTION =======================================

/* This function checks whether a given argument is a letter or not.
The function takes three parameters:
- arg: the value to check
- call: a callback function executed if the argument is a letter
- call2: a callback function executed if the argument is NOT a letter

If the argument is not a number, the function should execute the first callback.
If the argument is a number, the function should execute the second callback.

The function should return the result of the executed callback.

For example:
filterLetter("a", callback1, callback2)
should execute callback1

filterLetter("8", callback1, callback2)
should execute callback2
*/

// ======================================= RESOLUTION ========================================

/**
 * checks that the character is a letter
 * @param {string} arg
 * @param {function} call
 * @param {function} call2
 * @returns {string} sentence
 */
export const filterLetter = (arg, call, call2) => {
  if (isNaN(arg)) {
    return call(arg);
  }
  return call2(arg);
};
