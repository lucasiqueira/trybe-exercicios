let value = 100;
let index = 0;

for (index = 0; value > 0; index += 1) {
  value = value - 5;
  console.log(value);
}

console.log(index);
console.log(value);