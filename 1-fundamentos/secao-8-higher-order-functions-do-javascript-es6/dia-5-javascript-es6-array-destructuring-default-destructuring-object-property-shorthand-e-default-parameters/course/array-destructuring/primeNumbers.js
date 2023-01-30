/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable max-len */
/* Produza o mesmo resultado do código, porém utilizando o array destructuring para recolher a função e a saudação. */

const primeNumbers = [17, 23, 37];

const sum = (a, b) => {
  console.log(a + b);
};

sum(primeNumbers[0], primeNumbers[2]); // 54

// Produza o mesmo resultado acima, porém utilizando array destructuring
const [firstPrime, secondPrime, thirdPrime] = primeNumbers;

sum(firstPrime, thirdPrime);
