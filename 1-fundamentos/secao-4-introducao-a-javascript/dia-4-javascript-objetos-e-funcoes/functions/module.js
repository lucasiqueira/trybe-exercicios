function calculateRemainder (num1, num2) {
  if (num1 >= num2) {
    return num1 % num2;
  } else {
    return 'O primeiro número não deve ser menor que o segundo número.'
  }
}

console.log(calculateRemainder(109, 9));
console.log(calculateRemainder(300, 82));
console.log(calculateRemainder(5, 25));
console.log(calculateRemainder(100, 12));