const { searchEmployee, professionalBoard } = require("./searchEmployee");

/* Considere os dados abaixo. 
Você deve criar uma função que receba dois parâmetros: o id do funcionário e a informação disponível sobre ele (firstName, lastName, specialities). 
Você também deverá criar os testes para essa função. 
Sua função deverá então retornar os resultados da busca pelo id para aquele funcionário e a informação consultada. 
Caso o id não conste no quadro de funcionários, sua função deve retornar o erro "ID não identificada". 
Se a informação que se quer acessar não existir, a função deve retornar o erro "Informação indisponível". */

describe('Testes na função searchEmployee', () => {
  test('Verifica se a função searchEmployee existe', () => {
    expect(searchEmployee).toBeDefined();
  });

  test('Verifica se a função searchEmployee é uma função', () => {
    expect(typeof searchEmployee).toBe('function');
  });

  test('Verifica se o retorno da função é adequado considerando um id informado existente na base de dados', () => {
    expect(searchEmployee('8579-6', 'firstName')).toBe('Ana');
    expect(searchEmployee('8579-6', 'lastName')).toBe('Gates');
    expect(searchEmployee('8579-6', 'specialities')).toEqual(['UX', 'Design']);
    expect(searchEmployee('4678-2', 'firstName')).toBe('Paul');
    expect(searchEmployee('4678-2', 'lastName')).toBe('Dodds');
    expect(searchEmployee('4678-2', 'specialities')).toEqual(['Backend']);
  });

  test('Verifica se caso o id não conste no quadro de funcionários, retorna o erro "ID não identificada"', () => {
    expect(() => {searchEmployee('8578-6', 'firstName')}).toThrow(); // verifica se o erro é lançado
    expect(() => {searchEmployee('8578-6', 'firstName')}).toThrow(new Error('ID não identificada')); // verifica a mensagem de erro
  });

  test('Verifica se a informação que se quer acessar não existir, retorna o erro "Informação indisponível"', () => {
    expect(() => {searchEmployee('8579-6', 'birthDate')}).toThrow(); // verifica se o erro é lançado
    expect(() => {searchEmployee('8579-6', 'birthDate')}).toThrow(new Error('Informação indisponível')); // verifica a mensagem de erro
  })
})