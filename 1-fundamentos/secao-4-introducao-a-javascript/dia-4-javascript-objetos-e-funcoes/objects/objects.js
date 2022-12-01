let singer = {
  name: 'Milton',
  lastName: 'Nascimento',
  nickname: 'Bituca',
  age: 77,
  bestAlbuns: ['Travessia', 'Clube da Esquina', 'Minas'],
  birthInfo: {
    city: 'Rio de Janeiro',
    state: 'Rio de Janeiro',
    country: 'Brasil'
  }
};

singer.fullName = singer.name + ' ' + singer.lastName;

console.log(singer);