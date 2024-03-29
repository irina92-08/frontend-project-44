import {
  start, randomaizer, question, name, answer, right, wrong, finish,
} from '../index.js';

const startCalc = () => {
  start();

  const player = name();
  console.log('What is the result of the expression?');

  const sumOne = randomaizer();
  const sumTwo = randomaizer();

  const sum = `${sumOne} + ${sumTwo}`;
  const resultSum = sumOne + sumTwo;

  question(sum);
  const answer1 = Number(answer());

  if (answer1 !== resultSum) {
    return wrong(answer1, resultSum, player);
  }
  right();

  const diminutive = randomaizer() * 10;
  const deductible = randomaizer();

  const difference = `${diminutive} - ${deductible}`;
  const resultDiff = diminutive - deductible;

  question(difference);
  const answer2 = Number(answer());

  if (answer2 !== resultDiff) {
    return wrong(answer2, resultDiff, player);
  }
  right();

  const oneMulti = randomaizer();
  const twoMulti = randomaizer();

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
