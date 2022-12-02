// Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.

const number1 = 1000;
const number2 = 100;

function biggestNumberIn2 (num1, num2) {
  if (num1 > num2) {
    return 'O primeiro número informado (' + num1 + ') é maior que o segundo (' + num2 + ').'; 
  } else if (num1 < num2) {
    return 'O segundo número informado (' + num2 + ') é maior que o primeiro (' + num1 + ').'; 
  } else {
    return 'Os números são iguais.';
  }
}

console.log(biggestNumberIn2(number1, number2));