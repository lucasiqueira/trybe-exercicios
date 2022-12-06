const generatePhoneNumber = (array) => {
  let counter = 1;
  const errorMessage1 = 'não é possível gerar um número de telefone com esses valores';
  const errorMessage2 = 'Array com tamanho incorreto.'
  if (array.length != 11) {
    return errorMessage2;
  }
  for (let index = 0; index < array.length; index += 1) {
    for (let secondIndex = 0; secondIndex < array.length; secondIndex += 1) {
      if (array[index] === array[secondIndex] && index != secondIndex) {
        counter += 1;
      }
    }
    if (counter >= 3 || array[index] < 0 || array[index] > 9) {
      return errorMessage1;
    }
    counter = 1;
  }
  return `(${array.slice(0, 2).join('')}) ${array.slice(2, 7).join('')}-${array.slice(7, 11).join('')}`
}

const testArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1];
const testArray2 = [1, -2, 3, 4, 5, 6, 7, 8, 9, 0, 1];
const testArray3 = [1, 20, 3, 4, 5, 6, 7, 8, 9, 0, 1];
const testArray4 = [1, 2, 3, 3, 3, 6, 7, 8, 9, 0, 1];
const testArray5 = [6, 1, 9, 8, 2, 9, 4, 2, 1, 6, 5];
const testArray6 = [1, 9, 8, 2, 9, 4, 2, 1, 6, 5];
const testArray7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2];
const testArray8 = [1, 1, 1, 2, 2, 2, 2, 8, 9, 0, 1];



console.log(generatePhoneNumber(testArray1));
console.log(generatePhoneNumber(testArray2));
console.log(generatePhoneNumber(testArray3));
console.log(generatePhoneNumber(testArray4));
console.log(generatePhoneNumber(testArray5));
console.log(generatePhoneNumber(testArray6));
console.log(generatePhoneNumber(testArray7));
console.log(generatePhoneNumber(testArray8));