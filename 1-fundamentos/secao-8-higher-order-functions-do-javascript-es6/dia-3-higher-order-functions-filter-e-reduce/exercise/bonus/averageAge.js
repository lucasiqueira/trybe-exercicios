const books = require('../../../dia-1-introducao-a-higher-order-functions/exercise/library-management/database/books');

// 3 - Calcule a média de idade que os autores tinham quando seus respectivos livros foram lançados.

// const expectedResult = 43;

const averageAge = (data) => {
  const sum = data.reduce((acc, book) => acc + book.releaseYear - book.author.birthYear, 0);
  return sum / data.length;
};

// console.log(averageAge(books));
averageAge(books);
