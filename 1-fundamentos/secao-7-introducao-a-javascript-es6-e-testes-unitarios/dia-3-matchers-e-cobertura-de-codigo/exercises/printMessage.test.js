const { info, printMessage } = require('./printMessage');

describe('Verifica a função printMessage e o objeto info.', () => {
  const string = printMessage(info);

  test('Verifica se a função printMessage existe e é uma função.', () => {
    expect(typeof printMessage).toBe('function');
  })

  test ('Verifica se o objeto realmente é um objeto.', () => {
    expect(typeof info).toBe('object');
  })

  test('Verifica se o objeto possui a propriedade "personagem".', () => {
    expect(info).toHaveProperty('personagem');
  })

  test('Verifica se a resposta contém a informação "Boas vindas, " antes de chamar o nome do personagem.', () => {
    expect(string).toMatch(/Boas vindas, /);
    expect(string.slice(0, 13)).toBe('Boas vindas, ');
  })

  test('Verifica se a resposta contém o nome correto da personagem.', () => {
    expect(string).toMatch(info.personagem);
    expect(string.slice(13, string.length)).toBe(info.personagem);
  })

  test('Verifica se a mensagem de erro é lançada caso a função seja chamada com um objeto inválido.', () => {
    expect(() => { printMessage(); }).toThrow();
    expect(() => { printMessage(); }).toThrow(new Error('objeto inválido'));
    expect(() => { printMessage('x'); }).toThrow(new Error('objeto inválido'));
    expect(() => { printMessage([]); }).toThrow(new Error('objeto inválido'));
    expect(() => { printMessage(0); }).toThrow(new Error('objeto inválido'));
    expect(() => { printMessage({}); }).toThrow(new Error('objeto inválido'));
  })
})