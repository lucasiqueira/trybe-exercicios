let number = 10;
let accumulator = '';

for (let index = number; index >= 0; index -= 1) {
  for (let secondIndex = 0; secondIndex < number; secondIndex += 1){
    if (index > secondIndex) {
      accumulator += ' ';
    } else {
      accumulator += '*';
    }
  }
  console.log(accumulator);
  accumulator = '';
}