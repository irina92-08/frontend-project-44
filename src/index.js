import readlineSync from 'readline-sync';

export const start = () => console.log('Welcome to the Brain Games!');

export const name = () => {
  const result = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${result}!`);
  return result;
};
export const randomaizer = () => Math.floor(Math.random() * 100) + 1;

export const question = (example) => console.log(`Question: ${example}`);
export const answer = () => {
  const answerPlay = readlineSync.question('Your answer: ');
  return answerPlay;
};

export const right = () => console.log('Correct!');
export const wrong = (answerPlayer, result, namePlayer) => {
  const finishGame = `'${answerPlayer}' is wrong answer ;(. Correct answer was '${result}'.
      Let's try again, ${namePlayer}!`;
  return console.log(finishGame);
};

export const finish = (namePlay) => console.log(`Congratulations, ${namePlay}!`);
