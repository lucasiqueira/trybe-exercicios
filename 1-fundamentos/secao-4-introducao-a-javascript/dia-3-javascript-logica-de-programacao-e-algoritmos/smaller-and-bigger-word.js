let array = ['java', 'javascript', 'python', 'html', 'css'];
let biggerWord = array[0];
let smallerWord = array[0];

// Verificando a maior palavra do array:
for (let index = 0; index < array.length; index += 1) {
  if (array[index].length > biggerWord.length) {
    biggerWord = array[index];
  }
}

console.log(biggerWord.length);
console.log(biggerWord);

// Verificando a menor palavra do array:
for (let index = 0; index < array.length; index += 1) {
  if (array[index].length < smallerWord.length) {
    smallerWord = array[index];
  }
}

console.log(smallerWord.length);
console.log(smallerWord);