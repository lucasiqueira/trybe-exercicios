const fizzBuzz = (array) => {
  const arrayResult = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      arrayResult.push('fizzBuzz');
    } else if (array[index] % 3 === 0) {
      arrayResult.push('fizz');
    } else if (array[index] % 5 === 0) {
      arrayResult.push('buzz');
    } else {
      arrayResult.push('bug!');
    }
  }
  return arrayResult;
}

console.log(fizzBuzz([2, 15, 7, 9, 45]));
console.log(fizzBuzz([7,9]));
console.log(fizzBuzz([9,25]));