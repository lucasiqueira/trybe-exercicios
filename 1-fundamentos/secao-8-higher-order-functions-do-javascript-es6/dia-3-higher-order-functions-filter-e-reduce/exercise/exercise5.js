const books = require('../../dia-1-introducao-a-higher-order-functions/exercise/library-management/database/books');
const getScyFyAndFantasy = require('./exercise2');

// 🚀 5 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.

// const expectedResult = [
//   'O Senhor dos Anéis',
//   'Fundação',
//   'O Chamado de Cthulhu',
// ];

const oldBooks = (data) => getScyFyAndFantasy(data).map((book) => book.name);

// console.log(oldBooks(books));

oldBooks(books);
