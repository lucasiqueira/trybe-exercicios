let fruits = [3, 4, 10, 1, 12];

let result = 0;

for (item of fruits) {
  result += item;
}

if (result > 15) {
  console.log(result);
} else if (result <= 15) {
  console.log('Valor menor que 16.')
}