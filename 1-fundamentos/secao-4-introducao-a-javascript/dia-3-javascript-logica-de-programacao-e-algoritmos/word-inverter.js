let word = 'trybe';
let invertedWord = '';

for (let index = word.length - 1; index >= 0 ; index -= 1) {
  invertedWord = invertedWord + word[index];
}

console.log(invertedWord);