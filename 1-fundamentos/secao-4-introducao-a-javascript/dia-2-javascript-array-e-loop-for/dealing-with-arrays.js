let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// PRIMEIRO PONTO
for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index]);
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
let higherNumber = 0;


for (let j = 0; j < numbers.length; j += 1) {
  if (numbers[j] > higherNumber) {
    higherNumber = numbers[j];
  }
}

console.log('Maior número da sequência:', higherNumber);

// SEXTO PONTO
let oddNumbers = 0;

for (let u = 0; u < numbers.length; u += 1) {
  if (numbers[u] % 2 === 1) {
    oddNumbers += 1;
  }
}

console.log('Quantidade de números ímpares:', oddNumbers);

// SÉTIMO PONTO
let smallerNumber = Number.POSITIVE_INFINITY;

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] < smallerNumber) {
    smallerNumber = numbers[i];
  }
}

console.log('Menor número da sequência:', smallerNumber);

// OITAVO PONTO
let array25 = [];

for (let q = 1; q <= 25; q++) {
  array25.push(q);
}

console.log(array25);

// NONO PONTO
let divisionByTwo = [];

for (let r = 0; r < array25.length; r += 1) {
  divisionByTwo.push(array25[r] / 2);
}

console.log(divisionByTwo);