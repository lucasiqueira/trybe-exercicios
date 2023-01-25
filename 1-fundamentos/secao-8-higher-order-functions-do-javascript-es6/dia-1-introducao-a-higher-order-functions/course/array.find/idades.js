const idades = [18, 21, 42, 20, 19, 21, 30, 73, 82, 45, 48, 50];

const valor0 = idades.find((idade) => idade < 20); // 18
console.log(valor0);

const valor1 = idades.find((idade) => idade > 50); // 73
console.log(valor1);

const valor2 = idades.find((idade) => idade === 33); // undefined
console.log(valor2);