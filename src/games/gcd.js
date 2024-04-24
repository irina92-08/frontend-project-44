import { runEngine } from '../index.js';
import { getRandomInRange } from '../utils.js';

const getDivizor = (x, y) => {
  let num1 = x;
  let num2 = y;

  while (num1 > 0 && num2 > 0) {
    if (num1 >= num2) {
      num1 %= num2;
    } else {
      num2 %= num1;
    }
  }
  return Math.max(num1, num2);
};

const generateRoundGcd = () => {
  const oneNum = getRandomInRange();
  const twoNum = getRandomInRange();

  const answerGcd = getDivizor(oneNum, twoNum);
  const questionGcd = (`${oneNum} ${twoNum}`);

  return [`${String(questionGcd)}`, `${String(answerGcd)}`];
};

const startGcd = () => {
  const rulesGcd = 'Find the greatest common divisor of given numbers.';
  runEngine(rulesGcd, generateRoundGcd);
};
export default startGcd;
