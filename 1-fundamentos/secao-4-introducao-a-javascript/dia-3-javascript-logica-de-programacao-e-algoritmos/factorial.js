// O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:

// O fatorial é representado pelo sinal !
// 4! = 4 x 3 x 2 x 1 = 24

// Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10.

let number = 10;
let factorial = 1;

// Maneira 1: Utilizando uma variável de apoio.

for (let index = 1; index <= number; index += 1) {
  factorial *= index;
}

// Maneira 2: Utilizando somente a variável number já criada, sem variável de apoio. Problema: perco o valor da variável number.

// for (number; number >=1; number -= 1) {
//   factorial *= number;
// }

console.log(number + '! = ' + factorial);