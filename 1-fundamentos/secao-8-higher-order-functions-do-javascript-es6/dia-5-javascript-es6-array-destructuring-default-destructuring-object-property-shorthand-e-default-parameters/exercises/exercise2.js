/* eslint-disable no-console */
/* eslint-disable max-len */
/* Exercício 2
Suponha que você esteja trabalhando em projeto de um site de carros, onde cada carro é representado dentro de um array. Então sua liderança pede que seja mudado o formato de array para objeto. Para isso, crie uma função chamada toObject que, dada uma lista, retorna um objeto representando o carro: */

const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// escreva toObject abaixo
const toObject = (car) => {
  const [model, marca, ano] = car;
  return { model, marca, ano };
};

console.log(toObject(palio));
console.log(toObject(shelbyCobra));
console.log(toObject(chiron));
