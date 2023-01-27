const books = require('../../dia-1-introducao-a-higher-order-functions/exercise/library-management/database/books');

// const expectedResult = [ 'Fundação', 'Duna' ];

const booksByAuthorBirthYear = (birthYear) => {
  const arr = books.filter((book) => (book.author.birthYear === birthYear));
  return arr.map((book) => book.name);
};

booksByAuthorBirthYear(1920);

// console.log(result);
