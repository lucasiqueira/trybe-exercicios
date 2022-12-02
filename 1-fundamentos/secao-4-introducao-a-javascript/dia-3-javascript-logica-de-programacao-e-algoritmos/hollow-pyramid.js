let number = 15;
let accumulator = '';

for (let index = 1; index <= number; index += 1) {
  if (index % 2 === 1 && index != number) {
    for (let secondIndex = 0; secondIndex < ((number - index) / 2); secondIndex += 1){
      accumulator += " ";
    }
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (secondIndex === 0 || secondIndex === index - 1) {
        accumulator += "*";
      } else {
        accumulator += " ";
      }
    }
    console.log(accumulator);
  } else if (index % 2 === 1 && index === number) {
    for (let secondIndex = 0; secondIndex < number; secondIndex += 1) {
      accumulator += "*";
    }
    console.log(accumulator);
  }
  accumulator = '';
}