const books = require('../../dia-1-introducao-a-higher-order-functions/exercise/library-management/database/books');

// 🚀 1 - Filtre todos os objetos do gênero ficção científica ou fantasia.

const getScyFyAndFantasy = (database) => database.filter((book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica');

// console.log(getScyFyAndFantasy(books));
getScyFyAndFantasy(books);

module.exports = getScyFyAndFantasy;
