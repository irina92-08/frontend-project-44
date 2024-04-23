import { runEngine } from '../index.js';
import { getRandomInRange } from '../utils.js';

const isPrimeNum = (number) => {
  const numMax = Math.ceil(number / 2);
  if (number % 2 === 0 || number < 2) {
    return false;
  }
  for (let i = 3; i <= numMax; i += 2) {
    if (number === 2) {
      return true;
    }
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRoundPrime = () => {
  const randomNum = getRandomInRange();

  const answerPrime = isPrimeNum(randomNum) ? 'yes' : 'no';

  return [`${String(randomNum)}`, `${answerPrime}`];
};

const startPrime = () => {
  const rulesPrime = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  runEngine(rulesPrime, generateRoundPrime);
};

export default startPrime;
