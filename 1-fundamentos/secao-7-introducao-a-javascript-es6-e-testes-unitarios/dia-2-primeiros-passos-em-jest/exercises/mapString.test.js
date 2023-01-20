const { mapString, encode, decode } = require('./mapString');

describe('1 - Testa se encode e decode são funções', () => {
  test('Testa se encode é uma função.', () => {
    expect(typeof encode).toBe('function');
  })

  test('Testa se decode é uma função.', () => {
    expect(typeof decode).toBe('function');
  })
})

describe('2 - Para a função encode, teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
  test('Testa se "a" é convertida em "1".', () => {
    expect(encode('a')).toBe('1');
  })

  test('Testa se "e" é convertida em "2".', () => {
    expect(encode('e')).toBe('2');
  })

  test('Testa se "i" é convertida em "3".', () => {
    expect(encode('i')).toBe('3');
  })

  test('Testa se "o" é convertida em "4".', () => {
    expect(encode('o')).toBe('4');
  })

  test('Testa se "u" é convertida em "5".', () => {
    expect(encode('u')).toBe('5');
  })

  test('Testa se "aeiou" é convertida em "12345".', () => {
    expect(encode('aeiou')).toBe('12345');
  })

  test('Testa se "uoiea" é convertida em "54321".', () => {
    expect(encode('uoiea')).toBe('54321');
  })
})

describe('3 - Para a função decode, teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u, respectivamente', () => {
  test('Testa se "1" é convertida em "a".', () => {
    expect(decode('1')).toBe('a');
  })

  test('Testa se "2" é convertida em "e".', () => {
    expect(decode('2')).toBe('e');
  })

  test('Testa se "3" é convertida em "i".', () => {
    expect(decode('3')).toBe('i');
  })

  test('Testa se "4" é convertida em "o".', () => {
    expect(decode('4')).toBe('o');
  })

  test('Testa se "5" é convertida em "u".', () => {
    expect(decode('5')).toBe('u');
  })

  test('Testa se "12345" é convertida em "aeiou".', () => {
    expect(decode('12345')).toBe('aeiou');
  })
  
  test('Testa se "54321" é convertida em "uoiea".', () => {
    expect(decode('54321')).toBe('uoiea');
  })
})

describe('Teste se as demais letras/números não são convertidos para cada caso.', () => {
  test('Testa se "b" não é alterado na função encode.', () => {
    expect(encode('b')).toBe('b');
  })

  test('Testa se "bcdfghijklmnpqrstvwxyz" não é alterado na função encode.', () => {
    expect(encode('bcdfghjklmnpqrstvwxyz')).toBe('bcdfghjklmnpqrstvwxyz')
  })

  test('Testa se 6 não é alterado na função decode.', () => {
    expect(decode('6')).toBe('6');
  })

  test('Testa se "67890" não é alterado na função decode.', () => {
    expect(decode('67890')).toBe('67890')
  })
})

describe('Teste se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro.', () => {
  test('Testa se "abcdefghij" mantem-se com 10 caracteres após a função encode.', () => {
    expect(decode('abcdefghij').length).toBe(10);
  })

  test('Testa se "L5c1s S3q523r4" mantem-se com 14 caracteres após a função decode.', () => {
    expect(decode('L5c1s S3q523r4').length).toBe(14);
  })
})