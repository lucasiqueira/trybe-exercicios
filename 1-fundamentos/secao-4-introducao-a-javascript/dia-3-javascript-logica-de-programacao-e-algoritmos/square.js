let number = 9;
let accumulator = '';

for (let index = 0; index < number; index += 1) {
  accumulator += '*';
}

for (let index = 0; index < number; index += 1) {
  console.log(accumulator);
}