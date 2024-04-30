import { runEngine } from '../index.js';
import { getRandomInRange } from '../utils.js';

const isItEvenNumber = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

const generateRoundEven = () => {
  const randomEven = getRandomInRange();
  const EvenNum = isItEvenNumber(randomEven) ? 'yes' : 'no';
  const questionEven = `${randomEven}`;
  const answer = EvenNum;

  return [questionEven, answer];
};

const startEvenGame = () => {
  const rulesEven = 'Answer "yes" if the number is even, otherwise answer "no".';

  runEngine(rulesEven, generateRoundEven);
};

export default startEvenGame;
