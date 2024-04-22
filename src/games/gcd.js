import makeWelcom from '../cli.js';
import {
  COUNT_ROUNDS, question, answer, right, wrong, finish,
} from '../index.js';
import { getRandomInRange } from '../utils.js';

const resultGcd = (num1, num2) => {
  const minNum = num1 < num2 ? num1 : num2;
  const maxNum = num1 > num2 ? num1 : num2;
  if (maxNum % minNum === 0) {
    return minNum;
  }
  const halfMinNum = Math.round(minNum / 2);
  for (let i = halfMinNum; i > 0; i -= 1) {
    if (minNum % i === 0 && maxNum % i === 0) {
      return i;
    }
  }
  return num1;
};

const startGcd = () => {
  const player = makeWelcom();
  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 1; i <= COUNT_ROUNDS; i += 1) {
    const oneNum = getRandomInRange();
    const twoNum = getRandomInRange();
    const result = resultGcd(oneNum, twoNum);

    question(`${oneNum} ${twoNum}`);
    const answerPlayer = Number(answer());

    if (answerPlayer !== result) {
      return wrong(answerPlayer, result, player);
    }

    right();
  }
  return finish(player);
};
export default startGcd;
