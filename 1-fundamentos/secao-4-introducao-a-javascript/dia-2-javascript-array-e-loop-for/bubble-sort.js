let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Ordem decrescente
for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] > numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}

// console.log(numbers);

numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Ordem crescente
for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] < numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}

// console.log(numbers);

numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let newArray = [];

for (let index = 0; index < numbers.length; index++) {
  if (index == numbers.length - 1) {
    newArray.push(2 * numbers[index]);
  } else {
    newArray.push(numbers[index] * numbers [index + 1]);
  }
}

console.log(newArray);