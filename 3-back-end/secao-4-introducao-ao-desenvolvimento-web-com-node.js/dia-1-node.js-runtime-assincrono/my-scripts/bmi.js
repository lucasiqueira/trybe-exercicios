const readline = require('readline-sync');

const weightInKilograms = readline.questionFloat('What\'s your weight? ');
const heightInMeters = readline.questionFloat('What\'s your height? ');

const imc = weightInKilograms / (heightInMeters ** 2);

let result;

if (imc < 18.5) {
  result = 'Abaixo do peso (magreza)';
} else if (imc < 24.9) {
  result = 'Peso normal';
} else if (imc < 29.9) {
  result = 'Acima do peso (sobrepeso)';
} else if (imc < 34.5) {
  result = 'Obesidade grau I';
} else if (imc < 39.9) {
  result = 'Obesidade grau II';
} else {
  result = 'Obesidade graus III e IV';
}

console.log(`\nYour BMI is ${imc.toFixed(2)}. \n${result}`);