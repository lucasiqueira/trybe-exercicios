// Faça um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.

const number1 = 1000;
const number2 = 1000;
const number3 = 10000;

function biggestNumberIn3 (num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return 'O primeiro número informado (' + num1 + ') é maior que os outros.';
  } else if (num2 > num3) {
    return 'O segundo número informado (' + num2 + ') é maior que os outros.';
  } else if (num3 > num2) {
    return 'O terceiro número informado (' + num3 + ') é maior que os outros.';
  } else {
    return 'Os número são iguais.'
  }
}

console.log(biggestNumberIn3(number1, number2, number3));