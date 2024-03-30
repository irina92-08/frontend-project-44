import {
  start, randomaizer, question, name, answer, right, wrong, finish,
} from '../index.js';

const resultGcd = (num1, num2) => {
  const minNum = num1 < num2 ? num1 : num2;
  const maxNum = num1 > num2 ? num1 : num2;
  if (maxNum % minNum === 0) {
    return minNum;
  }
  const halfMinNum = Math.round(minNum / 2);
  for (let i = halfMinNum; i > 0; i -= 1) {
    if (minNum % i === 0 && maxNum % i === 0) {
      return i;
    }
  }
};

const startGcd = () => {
  start();
  const player = name();
  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 1; i < 4; i += 1) {
    const oneNum = randomaizer();
    const twoNum = randomaizer();
    const result = resultGcd(oneNum, twoNum);

    question(`${oneNum} ${twoNum}`);
    const answerGcd = Number(answer());

    if (answerGcd !== result) {
      return wrong(answerGcd, result, player);
    }

    right();
  }
  return finish(player);
};
export default startGcd;
