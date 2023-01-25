const pessoas = [
  { nome: 'Ana', cargo: 'Analista' },
  { nome: 'João', cargo: 'Gerência' },
  { nome: 'Aline', cargo: 'Analista' },
  { nome: 'Joana', cargo: 'Gerência' },
];

const management = pessoas.some((pessoa) => pessoa.cargo === 'Gerência');
console.log(management);

const productOwner = pessoas.some((pessoa) => pessoa.cargo === 'Product Owner');
console.log(productOwner);