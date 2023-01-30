const countries = require('./database/countries');

// 1 - Calcule a quantidade total da população de todos os países.
// De olho na dica 👀: o valor inicial deve começar com 0, portanto o acumulador é um número.

// const expectedResult = 120797034;

const getPopulation = (data) => data.reduce((acc, curr) => acc + curr.population, 0);

// console.log(getPopulation(countries));
getPopulation(countries);
