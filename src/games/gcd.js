import { runEngine } from '../index.js';
import { getRandomInRange } from '../utils.js';

const resultGcd = (num1, num2) => {
  const minNum = num1 < num2 ? num1 : num2;
  const maxNum = !minNum;
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

const generateRoundGcd = () => {
  const oneNum = getRandomInRange(1, 100);
  const twoNum = getRandomInRange(1, 100);

  const answerGcd = resultGcd(oneNum, twoNum);
  const questionGcd = (`${oneNum} ${twoNum}`);

  return [`${String(questionGcd)}`, `${String(answerGcd)}`];
};

const startGcd = () => {
  const rulesGcd = 'Find the greatest common divisor of given numbers.';
  runEngine(rulesGcd, generateRoundGcd);
};
export default startGcd;
