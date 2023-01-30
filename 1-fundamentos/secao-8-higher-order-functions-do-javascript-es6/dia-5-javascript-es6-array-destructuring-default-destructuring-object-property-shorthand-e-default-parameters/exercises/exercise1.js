/* eslint-disable max-len */
/* Exercício 1
Escreva a função swap, que, dado um array de 3 elementos, retorna um novo array com o primeiro e terceiro elementos trocados. Detalhe: você precisa fazer essa função gastando apenas 1 linha. O retorno da função utilizando o array myList deve ser [3, 2, 5]. */

const myList = [5, 2, 3];

const swap = ([first, second, third]) => [third, second, first];

// eslint-disable-next-line no-console
console.log(swap(myList));
