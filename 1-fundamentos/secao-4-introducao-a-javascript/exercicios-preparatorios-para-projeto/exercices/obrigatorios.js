// Requisito 01

function sameValues(val1, val2) {
  let bool = false;
  if (val1 >= 6 && val2 >= 6) {
    bool = true;
  } else {
    bool = false;
  }
  return bool;
}

// Requisito 02

function convertToCm(meters) {
  return meters * 100;
}

// Requisito 03

function dobroTriploRaiz(numero) {
  return `O dobro de ${numero} é ${numero * 2}, o triplo é ${numero * 3} e a raiz quadrada é ${Math.sqrt(numero)}`;
}

// Requisito 04

function createEmail(fullName) {
  const array = fullName.split(' ');
  let email = '';
  for (let index = 0; index < array.length; index += 1) {
    email += `${array[index].toLowerCase()}`;
    if (index !== array.length - 1) {
      email += '_';
    }
  }
  email += '@aulao.com';
  return email;
}

// Requisito 05

function getPoints(wins, ties) {
  return wins * 7 + ties * 3;
}

// Requisito 06

function sumMinMax(numbers) {
  let max = numbers[0];
  let min = numbers[0];
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > max) {
      max = numbers[index];
    }
    if (numbers[index] < min) {
      min = numbers[index];
    }
  }
  return max + min;
}

// Requisito 07

function polarEncoder(sentence) {
  const sentenceLowerCase = sentence.toLowerCase();
  const array = sentenceLowerCase.split('');
  for (let index = 0; index < array.length; index += 1) {
    switch (array[index]) {
      case 'z': array[index] = 'p';
        break;
      case 'e': array[index] = 'o';
        break;
      case 'n': array[index] = 'l';
        break;
      case 'i': array[index] = 'a';
        break;
      case 't': array[index] = 'r';
        break;
      case 'p': array[index] = 'z';
        break;
      case 'o': array[index] = 'e';
        break;
      case 'l': array[index] = 'n';
        break;
      case 'a': array[index] = 'i';
        break;
      case 'r': array[index] = 't';
        break;
      default:
        break;
    }
  }
  return array.join('');
}

// Requisito 08

function encodeLetter(letter) {
  const sentenceLowerCase = letter.toLowerCase();
  const array = sentenceLowerCase.split('');
  for (let index = 0; index < array.length; index += 1) {
    switch (array[index]) {
      case 'a': array[index] = '@';
        break;
      case 'e': array[index] = '3';
        break;
      case 'i': array[index] = '!';
        break;
      case 'o': array[index] = '0';
        break;
      case 'u': array[index] = 'Ʉ';
        break;
      default:
        break;
    }
  }
  return array.join('');
}

function decodeLetter(letter) {
  const array = letter.split('');
  for (let index = 0; index < array.length; index += 1) {
    switch (array[index]) {
      case '@': array[index] = 'a';
        break;
      case '3': array[index] = 'e';
        break;
      case '!': array[index] = 'i';
        break;
      case '0': array[index] = 'o';
        break;
      case 'Ʉ': array[index] = 'u';
        break;
      default:
        break;
    }
  }
  return array.join('');
}

// Requisito 09

function sumAndMultiplyBy2(numbers) {
  let sum = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    sum += numbers[index];
  }
  return sum * 2;
}

// Requisito 10

function sumEvenNumbers(numbers) {
  let result = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 === 0) {
      result += numbers[index];
    }
  }
  return result;
}

function sumOddNumbers(numbers) {
  let result = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 === 1) {
      result += numbers[index];
    }
  }
  return result;
}

module.exports = {
  sameValues,
  convertToCm,
  dobroTriploRaiz,
  createEmail,
  getPoints,
  sumMinMax,
  polarEncoder,
  encodeLetter,
  decodeLetter,
  sumAndMultiplyBy2,
  sumEvenNumbers,
  sumOddNumbers,
};
