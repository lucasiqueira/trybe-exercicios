require('@babel/register'); // sugestao do ChatGPT para instalar as dependências do Babel

import getAddress from './getAddress';

describe('Quando a requisição é bem sucedida, ela deverá retornar os dados esperados', () => {
  it('Os dados devem ser retornados em um objeto', async () => {
    const address = await getAddress('74315-400');
    expect(typeof address).toBe('object');
  });
  it('O objeto deve, obrigatoriamente, possuir as chaves logradouro, bairro e uf', async () => {
    const address = await getAddress('74315-400');
    expect(address.cep).toBe('74315-400');
    expect(address.logradouro).toBe('Rua Rovigo');
    expect(address.bairro).toBe('Vila Alvorada');
    expect(address.uf).toBe('GO');
  });
});

// Quando a requisição é bem sucedida, ela deverá retornar os dados esperados.
// Os dados devem ser retornados em um objeto;
// O objeto deve, obrigatoriamente, possuir as chaves logradouro, bairro e uf;
// A função deverá aceitar cep com hífen (”30130-010”) ou sem hífen (”30130010”).
// Quando a requisição é rejeitada, ela deverá retornar os erros esperados.
// Ao passar um cep vazio, a aplicação deverá lançar um erro com a seguinte mensagem: “Você precisa passar um CEP”.
// Ao passar um cep inválido, a aplicação deverá lançar um erro genérico.