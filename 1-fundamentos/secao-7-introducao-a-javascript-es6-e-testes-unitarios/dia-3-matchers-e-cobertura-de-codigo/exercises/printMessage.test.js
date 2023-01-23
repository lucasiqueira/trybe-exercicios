const { info, printMessage } = require('./printMessage');

describe('Verifica a função printMessage e o objeto info', () => {
  test('Verifica se a função printMessage existe e é uma função', () => {
    expect(typeof printMessage).toBe('function');
  })

  test ('Verifica se o objeto realmente é um objeto', () => {
    expect(typeof info).toBe('object');
  })

  test('Verifica se o objeto possui a propriedade "personagem"', () => {
    expect(info).toHaveProperty('personagem');
  })
})