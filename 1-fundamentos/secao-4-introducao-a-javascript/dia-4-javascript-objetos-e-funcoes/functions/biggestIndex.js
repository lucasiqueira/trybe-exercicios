// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1];.
// Valor esperado no retorno da função: 4.

let testArray = [2, 3, 6, 7, 10, 1];

function biggestValueIndex (array) {
  biggestValue = array[0];
  biggestIndex = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > biggestValue) {
      biggestValue = array[index];
      biggestIndex = index;
    }
  }
  return biggestIndex;
}

console.log(biggestValueIndex(testArray));
