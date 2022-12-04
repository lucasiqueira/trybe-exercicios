const concatName = (array) => {
  const string = `${array[array.length - 1]}, ${array[0]}`;
  return string;
}

const testArray1 = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
const testArray2 = ['foguete', 'não', 'tem', 'ré'];
const testArray3 = ['captain', 'my', 'captain'];

console.log(concatName(testArray1));
console.log(concatName(testArray2));
console.log(concatName(testArray3));