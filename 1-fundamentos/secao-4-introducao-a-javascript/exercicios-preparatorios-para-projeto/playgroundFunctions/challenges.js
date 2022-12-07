// Desafio 1 - Crie a função compareTrue
const compareTrue = (bool1, bool2) => (bool1 === true && bool2 === true);

// Desafio 2 - Crie a função splitSentence
const splitSentence = (sentence) => sentence.split(' ');

// Desafio 3 - Crie a função concatName
const concatName = (array) => `${array[array.length - 1]}, ${array[0]}`;

// Desafio 4 - Crie a função footballPoints
const footballPoints = (wins, ties) => 3 * wins + ties;

// Desafio 5 - Crie a função highestCount
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
};

// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas
const calcTriangleArea = (base, height) => (base * height) / 2;

const calcRectangleArea = (base, height) => base * height;

const calcAllAreas = (base, height, form) => {
  let result = '';
  if (form === 'triângulo') {
    result = `O valor da área do triângulo é de: ${(base * height) / 2}`;
  } else if (form === 'retângulo') {
    result = `O valor da área do retângulo é de: ${base * height}`;
  } else {
    result = 'Não foi possível fazer o cálculo, insira uma forma geométrica válida';
  }
  return result;
};

// Desafio 7 - Crie a função catAndMouse
const catAndMouse = (mouse, cat1, cat2) => {
  const distMcat1 = Math.abs(cat1 - mouse);
  const distMcat2 = Math.abs(cat2 - mouse);
  let result = '';
  if (distMcat1 < distMcat2) {
    result = 'cat1';
  } else if (distMcat2 < distMcat1) {
    result = 'cat2';
  } else if (distMcat1 === distMcat2) {
    result = 'os gatos trombam e o rato foge';
  }
  return result;
};

// Desafio 8 - Crie a função fizzBuzz
const fizzBuzz = (array) => {
  const arrayResult = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      arrayResult.push('fizzBuzz');
    } else if (array[index] % 3 === 0) {
      arrayResult.push('fizz');
    } else if (array[index] % 5 === 0) {
      arrayResult.push('buzz');
    } else {
      arrayResult.push('bug!');
    }
  }
  return arrayResult;
};

// Desafio 9 - Crie a função encode e a função decode
const encode = (sentence) => { // função que irá codificar a frase com os símbolos substitutivos
  const alteredSentence = [];
  let modify = '';
  const encoder = { a: '1', e: '2', i: '3', o: '4', u: '5' };
  for (let index = 0; index < sentence.length; index += 1) {
    for (key in encoder) {
      if (sentence[index] === key) {
        modify = encoder[key];
      }
    }
    if (modify !== '') {
      alteredSentence.push(modify);
    } else {
      alteredSentence.push(sentence[index]);
    }
    modify = '';
  }
  return alteredSentence.join('');
};

const decode = (sentence) => { // função que irá decodificar a frase, retornando ao seu valor original
  const restoredSentece = [];
  let modify = '';
  const decoder = { 1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u' };
  for (let index = 0; index < sentence.length; index += 1) {
    for (key in decoder) {
      if (sentence[index] === key) {
        modify = decoder[key];
      }
    }
    if (modify !== '') {
      restoredSentece.push(modify);
    } else {
      restoredSentece.push(sentence[index]);
    }
    modify = '';
  }
  return restoredSentece.join('');
};

// Desafio 10 - Crie a função techList
const techList = (array, string) => {
  const sortedArray = array.sort();
  const arrayOfObjects = [];
  for (let index = 0; index < sortedArray.length; index += 1) {
    if (sortedArray.length === 0) {
      return arrayOfObjects;
    }
    arrayOfObjects[index] = {}; // necessário declarar que os itens do array serão um objeto
    arrayOfObjects[index].tech = sortedArray[index];
    arrayOfObjects[index].name = string;
  }
  return arrayOfObjects;
};

// Não modifique essas linhas
module.exports = {
  calcTriangleArea: typeof calcTriangleArea === 'function' ? calcTriangleArea : (() => {}),
  calcRectangleArea: typeof calcRectangleArea === 'function' ? calcRectangleArea : (() => {}),
  calcAllAreas: typeof calcAllAreas === 'function' ? calcAllAreas : (() => {}),
  catAndMouse: typeof catAndMouse === 'function' ? catAndMouse : (() => {}),
  compareTrue: typeof compareTrue === 'function' ? compareTrue : (() => {}),
  concatName: typeof concatName === 'function' ? concatName : (() => {}),
  decode: typeof decode === 'function' ? decode : (() => {}),
  encode: typeof encode === 'function' ? encode : (() => {}),
  fizzBuzz: typeof fizzBuzz === 'function' ? fizzBuzz : (() => {}),
  footballPoints: typeof footballPoints === 'function' ? footballPoints : (() => {}),
  highestCount: typeof highestCount === 'function' ? highestCount : (() => {}),
  splitSentence: typeof splitSentence === 'function' ? splitSentence : (() => {}),
  techList: typeof techList === 'function' ? techList : (() => {}),
};
