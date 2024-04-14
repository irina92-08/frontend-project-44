import readlineSync from 'readline-sync';

const makeWelcom = () => {
  console.log('node bin/brain-games.js');
  console.log('Welcome to the Brain Games!');
  const result = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${result}!`);
};

export default makeWelcom;
