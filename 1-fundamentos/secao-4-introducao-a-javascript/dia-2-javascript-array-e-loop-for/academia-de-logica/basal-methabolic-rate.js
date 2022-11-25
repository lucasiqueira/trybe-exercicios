let age = 28;
let sex = 'M';
let weight = 95;
let height = 180;
let bmr;

if (sex = 'M') {
  bmr = (height * 6.25) + (weight * 9.99) - (age * 4.92) + 5;
} else if (sex = 'F') {
  bmr = (height * 6.25) + (weight * 9.99) - (age * 4.92) - 161;
} else {
  console.log('Sexo informado incorretamente.');
}

console.log('A taxa metabólica basal é:', bmr, 'kcal.')