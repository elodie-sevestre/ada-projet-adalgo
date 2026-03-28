// ======================================= INSTRUCTION =======================================

/*
This function simulates an elevator system.

The elevator starts at floor 0.
Based on the starting floor and the destination floor,
it should move up or down accordingly.

The function should determine the direction of movement
and simulate the elevator reaching the desired floor.

For example: 
const start = 0
const end = 3
goToLevel(startFloor, FinalPosition) => return 3

const start = 3
const end = 0
goToLevel(startFloor, FinalPosition) => return -3
*/

// ======================================= RESOLUTION ========================================

/**
 * simulates an elevator system
 * @param {number} startFloor
 * @param {number} finalPosition
 * @returns {number} number of level(s)
 */

export const goToLevel = (startFloor, finalPosition) => {
  if (startFloor === finalPosition || startFloor < 0 || finalPosition > 5) {
    return 0;
  } else if (startFloor > finalPosition || startFloor < finalPosition) {
    return finalPosition - startFloor;
  }
};
