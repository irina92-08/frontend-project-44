/* eslint-disable import/prefer-default-export */
import readlineSync from 'readline-sync';
import makeWelcom from './cli.js';

export const runEngine = (rules, generateRound) => {
  const userName = makeWelcom();
  console.log(rules);
  const roundsCount = 3;
  for (let i = 0; i < roundsCount; i += 1) {
    const [question, answer] = generateRound();

    console.log(`Question: ${question}`);
    const answerUser = readlineSync.question('Your answer: ');

    if (answerUser !== answer) {
      const finishGame = `'${answerUser}' is wrong answer ;(. Correct answer was '${answer}'.
      Let's try again, ${userName}!`;
      console.log(finishGame);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
