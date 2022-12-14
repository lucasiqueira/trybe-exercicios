// Requisito 09

const encode = (sentence) => { // função que irá codificar a frase com os símbolos substitutivos
  const alteredSentence = [];
  let modify = '';
  const encoder = {a: '1', e: '2', i: '3', o: '4', u: '5'}
  for (let index = 0; index < sentence.length; index += 1) {
    for (key in encoder) {
      if (sentence[index] === key) {
        modify = encoder[key];
      }
    }
    if (modify != '') {
      alteredSentence.push(modify);
    } else {
      alteredSentence.push(sentence[index]);
    }
    modify = '';
  }
  return alteredSentence.join('');
}

const decode = (sentence) => { // função que irá decodificar a frase, retornando ao seu valor original
  const restoredSentece = [];
  let modify = '';
  const decoder = {'1': 'a', '2': 'e', '3': 'i', '4': 'o', '5': 'u'};
  for (let index = 0; index < sentence.length; index += 1) {
    for (key in decoder) {
      if (sentence[index] === key) {
        modify = decoder[key];
      }
    }
    if (modify != '') {
      restoredSentece.push(modify);
    } else {
      restoredSentece.push(sentence[index])
    }
    modify = '';
  }
  return restoredSentece.join('');
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

console.log();

console.log(decode(encode(test1)));
console.log(decode(encode(test2)));
console.log(decode(encode(test3)));
console.log(decode(encode(test4)));
console.log(decode(encode(test5)));

const encodeOld = (sentence) => { // função que irá codificar a frase com os símbolos substitutivos
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
      alteredSentence.push(sentence[index]);
    }
  }
  return alteredSentence.join('');
};

const decodeOld = (sentence) => { // função que irá decodificar a frase, retornando ao seu valor original
  const restoredSentece = [];
  for (let index = 0; index < sentence.length; index += 1) {
    switch (sentence[index]) {
    case '1':
      restoredSentece.push('a');
      break;
    case '2':
      restoredSentece.push('e');
      break;
    case '3':
      restoredSentece.push('i');
      break;
    case '4':
      restoredSentece.push('o');
      break;
    case '5':
      restoredSentece.push('u');
      break;
    default:
      restoredSentece.push(sentence[index]);
    }
  }
  return restoredSentece.join('');
};