import { runEngine } from '../index.js';
import { getRandomInRange } from '../utils.js';

const generateProgression = (start, step, length = 10) => {
  const progressionArr = [];
  for (let i = 0; i < length; i += 1) {
    const numberProgression = start + step * i;
    progressionArr.push(numberProgression);
  }
  return progressionArr;
};

const generateRoundProgress = () => {
  const startNum = getRandomInRange();
  const stepProgress = getRandomInRange(4, 9);

  const progression = generateProgression(startNum, stepProgress);

  const hiddenIndex = getRandomInRange(0, progression.length - 1);
  const answerProgress = `${progression[hiddenIndex]}`;
  progression[hiddenIndex] = '..';
  const questionProgress = progression.join(' ');

  return [questionProgress, answerProgress];
};

const startProgress = () => {
  const rulesProgress = 'What number is missing in the progression?';
  runEngine(rulesProgress, generateRoundProgress);
};
export default startProgress;
