import readlineSync from 'readline-sync';

export const whoIsIt = () => {
  const result = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${result}!`);
};

const isItEvenNumber = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const opposite = (str) => {
  if (str === 'yes') {
    return 'no';
  } if (str === 'no') {
    return 'yes';
  }
  return "'yes' or 'no'";
};

const wrong = (answer, isName) => {
  const result = `${answer} is wrong answer ;(. Correct answer was ${opposite(answer)}.
    Let's try again, ${isName}!`;
  return result;
};

export const game = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let result;
  for (let i = 0; i < 3; i += 1) {
    result = Math.floor(Math.random() * 1000);
    const isItEvenOneNum = isItEvenNumber(result);
    console.log(`Question: ${result}`);
    const firstQuestion = readlineSync.question('Your answer: ');

    if (firstQuestion !== isItEvenOneNum) {
      return console.log(wrong(firstQuestion, name));
    }
    const right = 'Correct!';
    console.log(right);
  }
  return console.log(`Congratulations, ${name}!`);
};
