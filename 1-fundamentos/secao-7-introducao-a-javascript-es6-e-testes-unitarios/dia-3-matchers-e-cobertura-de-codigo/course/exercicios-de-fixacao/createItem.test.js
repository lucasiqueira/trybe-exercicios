const createItem = require('./createItem');
describe('a função createItem', () => {
  it('cria um item válido', () => {
    expect(createItem('banana', 'unidade', 6.99, 100)).not.toBeNull();    
  });

  it('utiliza zero como quantidade padrão', () => {
    const item = createItem('banana', 'unidade', 6.99);
    expect(item.quantity).toBe(0);
  });

  it('Lança um erro quando não recebe parâmetros', () => {
    expect(() => { createItem(); }).toThrow(new Error('O nome do item deve ser uma string'));
  });

  it('Lança um erro se o nome do item não é uma string', () => {
    expect(() => { createItem(true, 'unidade', 6.99, 3); }).toThrow(Error('O nome do item deve ser uma string'));
  });

  it('Lança um erro se o preço é negativo', () => {
    expect(() => { createItem('banana', 'unidade', -6.99, 3); }).toThrow(new Error('O preço do item deve ser maior que zero'));
  });

  it('Lança um erro se o preço é zero', () => {
    expect(() => { createItem('banana', 'unidade', 0, 3); }).toThrow(new Error('O preço do item deve ser maior que zero'));
  });
  
});