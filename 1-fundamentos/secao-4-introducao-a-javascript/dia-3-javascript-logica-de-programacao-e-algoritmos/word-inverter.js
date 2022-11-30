let word = 'trybe';
let invertedWord = '';

for (let index = word.length - 1; index >= 0 ; index -= 1) {
  invertedWord += word[index];
}

console.log(invertedWord);

// Outra maneira de resolver apresentada no Gabarito

let word2 = 'money';
let reverseWord2 = '';

reverseWord2 = word2.split('').reverse().join('');

console.log(reverseWord2);