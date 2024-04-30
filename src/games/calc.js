import { runEngine } from '../index.js';
import { getRandomInRange } from '../utils.js';

let ROUND;

const getMathAction = () => {
  if (ROUND === 0) {
    ROUND += 1;
    return '+';
  }

  if (ROUND === 1) {
    ROUND += 1;
    return '-';
  }

  ROUND += 1;
  return '*';
};

const getMathAnswer = (x, y, znak) => {
  let math = 0;

  switch (znak) {
    case '+':
      math = x + y;
      break;
    case '-':
      math = x - y;
      break;
    default:
      math = x * y;
  }
  return math;
};

const generateRoundCalc = () => {
  const oneNum = getRandomInRange(50, 100);
  const twoNum = getRandomInRange(0, 50);

  const mathematicalAction = getMathAction();
  const questionCalc = `${oneNum} ${mathematicalAction} ${twoNum}`;
  const answerCalc = `${getMathAnswer(oneNum, twoNum, mathematicalAction)}`;

  return [questionCalc, answerCalc];
};

const startCalc = () => {
  const rulesCalc = 'What is the result of the expression?';

  ROUND = 0;

  runEngine(rulesCalc, generateRoundCalc);
};

export default startCalc;
