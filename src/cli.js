import readlineSync from 'readline-sync';

const makeWelcom = () => {
  console.log('Welcome to the Brain Games!');
  const result = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${result}!`);
  return result;
};

export default makeWelcom;
