// Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário.
const books = require('./database/books');

const expectedResult = true;

const someBookWasReleaseOnThe80s = () => {
  return books.some((book) => book.releaseYear >= 1980 && book.releaseYear < 1990)
}

console.log(someBookWasReleaseOnThe80s());