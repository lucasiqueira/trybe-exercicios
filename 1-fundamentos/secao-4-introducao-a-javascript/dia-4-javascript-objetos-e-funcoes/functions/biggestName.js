// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
// Valor esperado no retorno da função: Fernanda.

let testArray = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function findBiggestName (array) {
  biggestName = array[0];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index].length > biggestName.length) {
      biggestName = array[index];
    }
  }
  return biggestName;
}

console.log(findBiggestName(testArray));