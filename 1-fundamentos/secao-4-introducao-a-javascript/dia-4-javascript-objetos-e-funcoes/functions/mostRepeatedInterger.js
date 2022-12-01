// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3];.
// Valor esperado no retorno da função: 2.

testArray = [2, 3, 2, 5, 8, 2, 3];

function mostRepeatedInterger(array) {
  let mostRepeatedNumber = array[0];
  let quantityOfMostRepeatedNumber = 0;
  for (let index = 0; index < array.length; index += 1) {
    let counter = 0;
    for (let secondIndex = 0; secondIndex < array.length; secondIndex += 1) {
      if (array[index] === array[secondIndex]) {
        counter += 1
      }
    }
    if (counter > quantityOfMostRepeatedNumber) {
      quantityOfMostRepeatedNumber = counter;
      mostRepeatedNumber = array[index];
    }
  }
  console.log(quantityOfMostRepeatedNumber, mostRepeatedNumber);
}

mostRepeatedInterger(testArray);