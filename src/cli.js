import readlineSync from 'readline-sync';
export const name = () => {
const result = readlineSync.question('May I have your name? ');
console.log(`Hello, ${result}!`);
};

