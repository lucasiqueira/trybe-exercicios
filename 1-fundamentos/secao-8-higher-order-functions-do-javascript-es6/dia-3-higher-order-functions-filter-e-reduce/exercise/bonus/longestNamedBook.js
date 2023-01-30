const books = require('../../../dia-1-introducao-a-higher-order-functions/exercise/library-management/database/books');

// const expectedResult = {
//   id: 1,
//   name: 'As Crônicas de Gelo e Fogo',
//   genre: 'Fantasia',
//   author: {
//     name: 'George R. R. Martin',
//     birthYear: 1948,
//   },
//   releaseYear: 1991,
// };

const longestNamedBook = (data) => data
  .reduce((acc, book) => ((acc.name.length < book.name.length) ? book.name.length : acc));

// console.log(longestNamedBook(books));
longestNamedBook(books);
