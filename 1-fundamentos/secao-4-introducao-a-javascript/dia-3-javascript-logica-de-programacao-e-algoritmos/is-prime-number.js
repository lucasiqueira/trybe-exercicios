let number = 99992;
let counter = 0;;

for (index = 2; index < number; index += 1) {
  if (number % index === 0) {
    counter += 1;
  }
}

if (counter === 0) {
  console.log('O número', number, 'é um número primo.');
} else {
  console.log('O número', number, 'não é um número primo.');
}