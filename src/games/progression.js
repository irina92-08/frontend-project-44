import makeWelcom from '../cli.js';
import {
  COUNT_ROUNDS, question, answer, right, wrong, finish,
} from '../index.js';
import { getRandomInRange } from '../utils.js';

const progressionArrs = () => {
  let one = getRandomInRange();
  const result = [one];
  const countNumbersInProgression = 10;
  for (let i = 0; i < countNumbersInProgression; i += 1) {
    one += 4;
    result.push(one);
  }
  return result;
};
const resultQuestion = (arrs) => {
  const arrsNew = arrs;
  const result = [];
  const item = getRandomInRange(0, 10);
  result.push(arrsNew[item]);
  arrsNew[item] = '..';
  const arrsStr = arrsNew.join(' ');
  result.push(arrsStr);
  return result;
};

const startProgress = () => {
  const player = makeWelcom();
  console.log('What number is missing in the progression?');

  for (let i = 0; i < COUNT_ROUNDS; i += 1) {
    const resultProgression = progressionArrs();
    const resultQuestionForPlayer = resultQuestion(resultProgression);
    question(`${resultQuestionForPlayer[1]}`);

    const answerProgress = Number(answer());

    if (answerProgress !== resultQuestionForPlayer[0]) {
      return wrong(answerProgress, resultQuestionForPlayer[0], player);
    }

    right();
  }
  return finish(player);
};
export default startProgress;
