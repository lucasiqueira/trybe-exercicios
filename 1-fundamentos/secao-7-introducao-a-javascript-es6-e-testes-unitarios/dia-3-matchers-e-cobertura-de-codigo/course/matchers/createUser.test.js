const createUser = (firstName, lastName) => {
  const user = {
    email: (firstName + '_' + lastName + '@example.com').toLowerCase(),
    password: Math.floor(Math.random() * 100000000),
  };
  return user;
}

test('Cria email e senha', () => {
  const user = createUser('Mona', 'Lisa');
  expect(user).toHaveProperty('email', 'mona_lisa@example.com');
  expect(user).toHaveProperty('password');
});