// Encontre o primeiro livro cujo nome possua 26 caracteres.
const books = require('./database/books');

const expectedResult = {
  author: {
    birthYear: 1948,
    name: 'George R. R. Martin',
  },
  genre: 'Fantasia',
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  releaseYear: 1991,
};

const getNamedBook = () => {
  return books.find((book) => book.name.length === 26)
}

console.log(getNamedBook());