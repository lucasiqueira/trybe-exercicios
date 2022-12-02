// Exercício 2
// Crie uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro.
// Através de um loop for, percorra essa variável, busque os números pares e os adicione a um novo array, que deverá ser retornado ao final pela função.

let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

const arrayOfNumbers = (array) => {
  evenNumbers = [];
  for (let index = 0; index < array.length; index += 1) {
    if ((typeof array[index]) == 'object') {
      for (let secondIndex = 0; secondIndex < array[index].length; secondIndex += 1) {
        if (array[index][secondIndex] % 2 === 0) {
          evenNumbers.push(array[index][secondIndex])
        }
      }
    }
  }
  console.log(evenNumbers);
}

arrayOfNumbers(vector);