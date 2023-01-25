const sum = require('./sum');

describe('Verifica a função sum', () => {
  it('Verifica se o retorno de sum (4, 5) é 9.', () => {
    expect(sum(4, 5)).toBe(9);
  });

  it('Verifica se o retorno de sum (0, 0) é 0.', () => {
    expect(sum(0, 0)).toBe(0);
  });

  it('Verifica se o retorno de sum (4, "5") retornará um erro.', () => {
    expect(() => { sum(4, '5'); }).toThrow();
  });

  it('Verifica se a mensagem de erro do retorno de sum (4, "5") será "parameters must be numbers".', () => {
    expect(() => { sum(4, '5'); }).toThrow(new Error('parameters must be numbers'));
  });
})