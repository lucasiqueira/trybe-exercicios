// 4 - Retorne a quantidade de vezes que a letra a maiúscula ou minúscula aparece no array de nomes.

// De olho na dica 👀: faça com que o array de nomes seja um array de letras.

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

// const expectedResult = 20;

const countInString = (string) => {
  const array = string.toLowerCase().split('');
  return array.reduce((acc, curr) => ((curr === 'a') ? acc + 1 : acc), 0);
};

const countA = (data) => data.reduce((acc, curr) => acc + countInString(curr), 0);

// console.log(countA(names));
countA(names);
