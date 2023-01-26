const pessoas = [
  { nome: 'Joana', idade: 37 },
  { nome: 'Ana', idade: 25 },
  { nome: 'João', idade: 32 },
  { nome: 'Aline', idade: 28 },
];

pessoas.forEach((pessoa) => console.log(`${pessoa.nome} tem ${pessoa.idade} anos.`));

const letterJ = pessoas.find((pessoa) => pessoa.nome[0] === 'J');
console.log(letterJ);
const letterA = pessoas.find((pessoa) => pessoa.nome[0] === 'A');
console.log(letterA);

const anyoneOver40 = pessoas.some((pessoa) => pessoa.idade > 40);
const anyoneOver30 = pessoas.some((pessoa) => pessoa.idade > 30);
console.log(anyoneOver40);
console.log(anyoneOver30);

const everyoneOver40 = pessoas.every((pessoa) => pessoa.idade > 40);
const everyoneOver20 = pessoas.every((pessoa) => pessoa.idade > 20);
console.log(everyoneOver40);
console.log(everyoneOver20);