const generate = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}

const array = [];
const min = 1;
const max = 8;

for (let index = 0; index < 1000; index += 1) {
  array.push(generate(min, max));
}

console.log(array);

for (let index = min - 1; index < (max + 1); index += 1) {
  const repetitions = array.filter((number) => number === index).length;
  console.log(`${index} repete ${repetitions} vezes.`);
}