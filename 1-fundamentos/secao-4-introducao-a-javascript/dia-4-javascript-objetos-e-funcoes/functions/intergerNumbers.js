// Faça um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.

let number = 500;

function positiveOrNegative (num) {
  if (num > 0) {
    return 'Positive';
  } else if (num < 0) {
    return 'Negative';
  } else {
    return 'Zero'
  }
}

console.log(positiveOrNegative(number));