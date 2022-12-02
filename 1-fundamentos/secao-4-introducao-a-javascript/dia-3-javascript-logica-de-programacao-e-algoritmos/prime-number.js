let maximumVerified = 50;
let counter = 0;
let array = [];

for (let index = 2; index <= maximumVerified; index += 1) {
  for (let divisor = 2; divisor < index; divisor += 1) {
    if (index % divisor == 0) {
      counter += 1;
    }
  }
  if (counter === 0) {
    array.push(index);
  }
  counter = 0;
}

console.log('Maior número primo entre 2 e', maximumVerified, ':', array[array.length - 1]);