let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// PRIMEIRO PONTO
for (let index = 0; index < numbers.length; index += 1) {
  // console.log(numbers[index]);
}

// SEGUNDO PONTO
let sumOfValues = 0;

for (let index = 0; index < numbers.length; index += 1) {
  sumOfValues = sumOfValues + numbers[index];
}

console.log('Soma dos valores:', sumOfValues);

// TERCEIRO PONTO

let arithmeticAverage = sumOfValues / numbers.length;
console.log('Média dos valores:', arithmeticAverage);

// QUARTO PONTO

if (arithmeticAverage > 20) {
  console.log('Valor maior que 20');
} else {
  console.log('Valor menor ou igual a 20');
}

// QUINTO PONTO
let biggerNumber = 0;


for (let j = 0; j < numbers.length; j += 1) {
  if (numbers[j] > biggerNumber) {
    biggerNumber = numbers[j];
  }
}

console.log('Maior número da sequência:', biggerNumber);

// SEXTO PONTO
let smallerNumber = Number.POSITIVE_INFINITY;

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] < smallerNumber) {
    smallerNumber = numbers[i];
  }
}

console.log('Menor número da sequência:', smallerNumber);