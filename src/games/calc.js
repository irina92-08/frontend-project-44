import makeWelcom from '../cli.js';
import {
  question, answer, right, wrong, finish,
} from '../index.js';
import getRandomInRange from '../utils.js';

const startCalc = () => {
  const player = makeWelcom();
  console.log('What is the result of the expression?');

  const sumOne = getRandomInRange();
  const sumTwo = getRandomInRange();

  const sum = `${sumOne} + ${sumTwo}`;
  const resultSum = sumOne + sumTwo;

  question(sum);
  const answer1 = Number(answer());

  if (answer1 !== resultSum) {
    return wrong(answer1, resultSum, player);
  }
  right();

  const diminutive = getRandomInRange(150, 200);
  const deductible = getRandomInRange();

  const difference = `${diminutive} - ${deductible}`;
  const resultDiff = diminutive - deductible;

  question(difference);
  const answer2 = Number(answer());

  if (answer2 !== resultDiff) {
    return wrong(answer2, resultDiff, player);
  }
  right();

  const oneMulti = getRandomInRange();
  const twoMulti = getRandomInRange();

  const multiplier = `${oneMulti} * ${twoMulti}`;
  const resultMulti = oneMulti * twoMulti;

  question(multiplier);
  const answer3 = Number(answer());

  if (answer3 !== resultMulti) {
    return wrong(answer3, resultMulti, player);
  }
  right();
  return finish(player);
};

export default startCalc;
