// Requisito 05

const highestCount = (array) => {
  let highestNumber = array[0];
  let counter = 1;
  for (let index = 1; index < array.length; index += 1) {
    if (array[index] > highestNumber) {
      highestNumber = array[index];
      counter = 1;
    } else if (array[index] === highestNumber) {
      counter += 1;
    }
  }
  return counter;
}

const testArray1 = [9, 1, 2, 3, 9, 5, 7];
const testArray2 = [0, 4, 4, 4, 9, 2, 1];
const testArray3 = [0, 0, 0];

console.log(highestCount(testArray1));
console.log(highestCount(testArray2));
console.log(highestCount(testArray3));