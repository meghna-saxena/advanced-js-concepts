const initialPosition = { x: 0, y: 0 };
const finalPosition = { x: 0, y: 4 };
let steps = [];

function getStepsToReachDestination(initialPosition, finalPosition) {
  if (
    initialPosition.x === finalPosition.x &&
    initialPosition.y === finalPosition.y
  ) {
    const result = { steps: steps, numberOfSteps: steps.length };
    return result;
  }

  const nextStep = getNextStep(initialPosition, finalPosition);

  steps.push(nextStep);

  return getStepsToReachDestination(nextStep, finalPosition);
}

/**
 * execute/return one step at a time
 * first keep incrementing on x-axis
 * next keep incrementing on y-axis
 */

function getNextStep(initial, final) {
  if (initial.x !== final.x) {
    const currentPosition = {
      ...initial,
      x: initial.x + 1,
    };
    return currentPosition;
  }

  if (initial.y !== final.y) {
    const currentPosition = {
      ...initial,
      y: initial.y + 1,
    };
    return currentPosition;
  }
}

getStepsToReachDestination(initialPosition, finalPosition);
