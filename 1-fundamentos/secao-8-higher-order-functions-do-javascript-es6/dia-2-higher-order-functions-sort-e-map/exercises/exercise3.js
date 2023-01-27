const books = require('../../dia-1-introducao-a-higher-order-functions/exercise/library-management/database/books');

// const expectedResult = [
//   {
//     author: 'Isaac Asimov',
//     age: 31,
//   },
//   {
//     author: 'H. P. Lovecraft',
//     age: 38,
//   },
//   {
//     author: 'Stephen King',
//     age: 39,
//   },
//   {
//     author: 'George R. R. Martin',
//     age: 43,
//   },
//   {
//     author: 'Frank Herbert',
//     age: 45,
//   },
//   {
//     author: 'J. R. R. Tolkien',
//     age: 62,
//   },
// ];

const nameAndAge = (data) => {
  const authorData = data.map((book) => ({ author: `${book.author.name}`, age: `${book.releaseYear - book.author.birthYear}` }));
  return authorData.sort((a, b) => a.age - b.age);
};

nameAndAge(books);
