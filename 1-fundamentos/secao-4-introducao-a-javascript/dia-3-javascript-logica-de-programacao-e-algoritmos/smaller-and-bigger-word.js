let array = ['java', 'javascript', 'python', 'html', 'css'];
let biggerSize = 0;
let biggerWord;
let smallerSize = Number.POSITIVE_INFINITY;
let smallerWord;

// Verificando a maior palavra do array:
for (let index = 0; index < array.length; index += 1) {
  if (array[index].length > biggerSize) {
    biggerSize = array[index].length;
    biggerWord = array[index];
  }
}

console.log(biggerSize);
console.log(biggerWord);

// Verificando a menor palavra do array:
for (let index = 0; index < array.length; index += 1) {
  if (array[index].length < smallerSize) {
    smallerSize = array[index].length;
    smallerWord = array[index];
  }
}

console.log(smallerSize);
console.log(smallerWord);