// Requisito 09

const encode = (sentence) => { // função que irá codificar a frase com os símbolos substitutivos
  const alteredSentence = [];
  for (let index = 0; index < sentence.length; index += 1) {
    switch (sentence[index]) {
      case 'a':
        alteredSentence.push('1');
        break;
      case 'e':
        alteredSentence.push('2');
        break;
      case 'i':
        alteredSentence.push('3');
        break;
      case 'o':
        alteredSentence.push('4');
        break;
      case 'u':
        alteredSentence.push('5');
        break;
      default:
        alteredSentence.push(sentence[index])
    }
  }
  return alteredSentence.join('');
}

const decode = (sentence) => { // função que irá decodificar a frase, retornando ao seu valor original

}

const test1 = 'hello';
const test2 = 'How are you today?';
const test3 = 'hi there!';
const test4 = 'This is an encoding test.';
const test5 = 'go Trybe!';

console.log(encode(test1));
console.log(encode(test2));
console.log(encode(test3));
console.log(encode(test4));
console.log(encode(test5));