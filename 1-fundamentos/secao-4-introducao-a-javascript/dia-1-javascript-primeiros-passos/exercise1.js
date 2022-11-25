const a = 3;
const b = 5;
const c = 4;
const d = 0;
const a1 = 30;
const a2 = 45;
const a3 = 105;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

// Utilize if/else para escrever um código que retorne o maior de dois números. Defina, no começo do seu código, duas constantes com os valores que serão comparados.

if (a > b) {
  console.log('O valor a é maior que o valor b.');
} else {
  console.log('O valor b é maior que o valor a.');
}

// Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três constantes com os valores que serão comparados.

if (a > b && a > c) {
  console.log('O valor a é maior que os valores de b e c.');
} else if (b > a && b > c) {
  console.log('O valor b é maior que os valores de a e c.');
} else {
  console.log('O valor c é maior que os valores de a e b.');
}

// Utilize if/else para escrever um código que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.

if (d > 0) {
  console.log('positive');
} else if (d < 0) {
  console.log('negative');
} else {
  console.log('zero');
}

// 🚀 Utilize if/else para escrever um código que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.

if (a1 < 0 || a2 < 0 || a3 < 0) {
  console.log('Algum(ns) dos valores de ângulo informado(s) são inválido(s)');
} else if (a1 + a2 + a3 == 180) {
  console.log(true);
} else {
  console.log(false);
}