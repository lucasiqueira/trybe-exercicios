const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

const flatten = (data) => data.reduce((acc, curr) => acc.concat(curr), []);
// Ao verificar a documentação sobre o método reduce, encontrei um exemplo que
// mostrava exatamente o método concat, e após acessar a documentação para este segundo
// método, percebi que seria ideal para resolver este problema.

// console.log(flatten(arrays));
flatten(arrays);
