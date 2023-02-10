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
  it('A função deverá aceitar cep com hífen (”74315-400”) ou sem hífen (”74315400”)', async () => {
    const address1 = await getAddress('74315-400');
    expect(address1.cep).toBe('74315-400');
    const address2 = await getAddress('74315400');
    expect(address2.cep).toBe('74315-400');
  })
});

describe('Quando a requisição é rejeitada, ela deverá retornar os erros esperados', () => {
  it('Ao passar um cep vazio, a aplicação deverá lançar um erro com a seguinte mensagem: “CEP não foi digitado”', async () => {
    const expectedError = new Error('CEP não foi digitado');
    await expect(getAddress('')).rejects.toThrow(expectedError);
  })
  it('Ao passar um cep inválido, a aplicação deverá lançar um erro genérico', async () => {
    await expect(getAddress('00000-00')).rejects.toThrow();
    await expect(getAddress('00000-0000')).rejects.toThrow();
    await expect(getAddress('CEP da minha casa')).rejects.toThrow();
  })
})