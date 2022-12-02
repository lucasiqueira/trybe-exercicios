// Exercício 1
// (Bônus) Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.

let romanNumber1 = 'MMMCMXCIX'; // 3999
let romanNumber2 = 'MDCCCXCVI'; // 1896

function romanNumeralConverter (roman) {
  reference = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }
  let naturalNumber = 0;
  for (let index = 0; index < roman.length; index += 1) {
    if (index === roman.length - 1) {
      naturalNumber += reference[roman[index]];
    } else if (reference[roman[index]] >= reference[roman[index + 1]]) {
      naturalNumber += reference[roman[index]];
    } else {
      naturalNumber -= reference[roman[index]];
    }
  }
  console.log(naturalNumber);
}

romanNumeralConverter(romanNumber1);
romanNumeralConverter(romanNumber2);
