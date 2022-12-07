// Desafio 11 - Crie a função generatePhoneNumber
const generatePhoneNumber = (array) => {
  let counter = 1;
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < array.length; index += 1) {
    for (let secondIndex = 0; secondIndex < array.length; secondIndex += 1) {
      if (array[index] === array[secondIndex] && index !== secondIndex) {
        counter += 1;
      }
    }
    if (counter >= 3 || array[index] < 0 || array[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    counter = 1;
  }
  const ddd = array.slice(0, 2).join('');
  return `(${ddd}) ${array.slice(2, 7).join('')}-${array.slice(7, 11).join('')}`;
};

// Desafio 12 -  Crie a função triangleCheck
const triangleCheck = (lineA, lineB, lineC) => {
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
    return true;
  }
  return false;
};

// Desafio 13 - Crie a função hydrate
const hydrate = (string) => {
  let counter = 0;
  const array = string.split(' ');
  for (value of array) {
    if (!(isNaN(value))) {
      counter += Number(value);
    }
  }
  if (counter === 1) {
    return `${counter} copo de água`;
  }
  return `${counter} copos de água`;
};

/* eslint no-undef: 0 */

// Não modifique essas linhas
module.exports = {
  generatePhoneNumber: typeof generatePhoneNumber === 'function' ? generatePhoneNumber : (() => {}),
  triangleCheck: typeof triangleCheck === 'function' ? triangleCheck : (() => {}),
  hydrate: typeof hydrate === 'function' ? hydrate : (() => {}),
};
