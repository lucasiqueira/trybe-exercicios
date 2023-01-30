/* eslint-disable no-console */
/* A seguir, temos alguns valores que estão descritos em variáveis incoerentes.
Através da desestruturação de arrays, corrija os valores das variáveis. */

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

console.log(comida, animal, bebida); // arroz gato água

// eslint-disable-next-line max-len
// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo.

[animal, bebida, comida] = [comida, animal, bebida];

console.log(comida, animal, bebida); // arroz gato água
