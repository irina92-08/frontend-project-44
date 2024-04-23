import { runEngine } from '../index.js';
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

const generateRoundProgress = () => {
  const numsProgression = progressionArrs();
  const [answerPro, questionPro] = resultQuestion(numsProgression);

  return [questionPro, `${String(answerPro)}`];
};

const startProgress = () => {
  const rulesProgress = 'What number is missing in the progression?';
  runEngine(rulesProgress, generateRoundProgress);
};
export default startProgress;
