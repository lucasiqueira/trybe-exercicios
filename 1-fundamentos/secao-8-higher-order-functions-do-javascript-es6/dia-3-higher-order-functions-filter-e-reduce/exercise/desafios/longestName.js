/* 🚀 3 - Encontre o país com o maior nome.

De olho na dica 👀: o reduce consegue comparar o valor do primeiro com o segundo parâmetro.
Compare o tamanho da string name do primeiro parâmetro com a do
segundo parâmetro e retorne aquele que for maior. */

const countries = require('./database/countries');

// const expectedResult = {
//   name: 'American Samoa',
//   region: 'Oceania',
//   currencies: [{ code: 'USD', name: 'United States Dollar' }],
//   capital: 'Pago Pago',
//   population: 55197,
//   area: 199
// }

const longestName = (data) => data
  .reduce((acc, curr) => ((acc.name.length < curr.name.length) ? curr : acc));

// console.log(longestName(countries));
longestName(countries);
