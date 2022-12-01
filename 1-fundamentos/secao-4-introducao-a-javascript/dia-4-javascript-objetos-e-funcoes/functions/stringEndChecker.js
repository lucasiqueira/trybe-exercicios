// Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.
// Valor de teste: 'trybe' e 'be'
// Valor esperado no retorno da função: true
// verificaFimPalavra('trybe', 'be');
// Retorno esperado: true
// verificaFimPalavra('joaofernando', 'fernan');
// Retorno esperado: false

let testWord = 'joaofernando';
let testEnding = 'fernando';

function stringEndChecker (word, ending) {
  let inicialPositionInWord = word.length - ending.length;
  let counter = 0;
  for (let index = inicialPositionInWord; index < word.length; index += 1) {
    if (word[index] === ending [index - inicialPositionInWord]) {
      counter += 1;
    }
  }
  if (counter === ending.length) {
    console.log(true);
  } else {
    console.log(false);
  }
}

stringEndChecker(testWord, testEnding);