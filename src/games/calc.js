import { runEngine } from '../index.js';
import { getRandomInRange } from '../utils.js';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const indexOperator = getRandomInRange(0, operators.length - 1);
  return operators[indexOperator];
};

const calculation = (x, y, operator) => {
  switch (operator) {
    case '+':
      return x + y;
    case '-':
      return x - y;
    case '*':
      return x * y;
    default: throw new Error(`Invalid operator - ${operator}`);
  }
};

const generateRoundCalc = () => {
  const oneNum = getRandomInRange(50, 100);
  const twoNum = getRandomInRange(0, 50);

  const operatorCalc = getRandomOperator();
  const questionCalc = `${oneNum} ${operatorCalc} ${twoNum}`;
  const answerCalc = `${calculation(oneNum, twoNum, operatorCalc)}`;

  return [questionCalc, answerCalc];
};

const startCalc = () => {
  const rulesCalc = 'What is the result of the expression?';

  runEngine(rulesCalc, generateRoundCalc);
};

export default startCalc;
