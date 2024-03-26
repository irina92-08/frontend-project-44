import readlineSync from 'readline-sync';

const name = () => {
  const result = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${result}!`);
};

export default name;
