import {
    start, randomaizer, question, name, answer, right, wrong, finish,
  } from '../index.js';

const isPrimeNum = (number) => {
    let numMax = Math.ceil(number / 2);
    if (number % 2 === 0 && number < 2) {
        return false;
    }
    for (let i = 3; i <= numMax; i += 2) {
        if (number % i === 0) {
            return false;
        }
    }   
    return true;
};

const startPrime = () => {
    start();
    const player = name();
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

    for (let i = 0; i < 3; i += 1) {
        const randomNum = randomaizer();
        const resultPrime = isPrimeNum(randomNum) ? 'yes' : 'no';
        
        question(`${randomNum}`);
        const answerPlayer = answer();

        if (answerPlayer !== resultPrime) {
            return wrong(answerPlayer, resultPrime, player);
        }
        right();
    }
    return finish(player);
};

export default startPrime;