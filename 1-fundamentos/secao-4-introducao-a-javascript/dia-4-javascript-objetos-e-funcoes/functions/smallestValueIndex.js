// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3];.
// Valor esperado no retorno da função: 6.

testArray = [2, 4, 6, 7, 10, 0, -3];

function smallestValueIndex (array) {
  let smallestIndex = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] < array[smallestIndex]) {
      smallestIndex = index;
    }
  }
  return smallestIndex;
}

console.log(smallestValueIndex(testArray));