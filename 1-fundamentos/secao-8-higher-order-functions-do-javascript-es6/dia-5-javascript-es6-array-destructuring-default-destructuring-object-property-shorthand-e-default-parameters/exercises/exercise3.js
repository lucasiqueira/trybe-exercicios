/* eslint-disable no-console */
/* Exercício 3
Escreva uma função greet que, dado o nome de uma pessoa, retorna uma mensagem de cumprimento.
Um parâmetro adicional pode ser passado para alterar o cumprimento utilizado: */

// escreva greet abaixo
const greet = (user = 'user', greeting = 'Hi') => `${greeting} ${user}`;

// Retornos esperados:
console.log(greet('John')); // 'Hi John'
console.log(greet('John', 'Good morning')); // 'Good morning John'
console.log(greet('Isabela', 'Oi')); // 'Oi Isabela'
console.log(greet());
