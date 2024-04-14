import {
  COUNT_ROUNDS, start, question, name, answer, right, wrong, finish,
} from '../index.js';
import getRandomInRange from '../utils.js';

const isItEvenNumber = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const startEvenGame = () => {
  start();
  const player = name();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let result;
  for (let i = 0; i < COUNT_ROUNDS; i += 1) {
    result = getRandomInRange();
    const isItEvenNum = isItEvenNumber(result);
    question(result);
    const answerPlayer = answer();

    if (answerPlayer !== isItEvenNum) {
      return wrong(answerPlayer, isItEvenNum, player);
    }
    right();
  }
  return finish(player);
};

export default startEvenGame;
