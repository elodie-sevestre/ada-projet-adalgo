// ======================================= INSTRUCTION =======================================

/*
This function should return the result of an addition, subtraction, multiplication, or division.
For example:
const x = 2
const y = 3
const operator = '+'
calculator(x, y, operator) => return 5
*/

// ======================================= RESOLUTION ========================================

/**
 * Function for calculate
 * @param {number} x
 * @param {number} y
 * @param {string} operator
 * @returns result
 */

export const calculator = (x, y, operator) => {
  if (isNaN(x) || isNaN(y)) {
    return "is empty";
  }
  if (operator === "+") {
    return x + y;
  } else if (operator === "-") {
    return x - y;
  } else if (operator === "/") {
    return x / y;
  } else if (operator === "*") {
    return x * y;
  } else {
    return "no operators";
  }
};
