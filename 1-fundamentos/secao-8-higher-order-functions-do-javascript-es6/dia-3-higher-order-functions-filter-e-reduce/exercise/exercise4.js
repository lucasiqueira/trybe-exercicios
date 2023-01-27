const books = require('../../dia-1-introducao-a-higher-order-functions/exercise/library-management/database/books');
const getScyFyAndFantasy = require('./exercise1');

/* 4 - Crie um array que possua apenas os nomes de todas as pessoas autoras
 de ficção científica ou fantasia e ordene por ordem alfabética. */

const fantasyOrScienceFictionAuthors = (data) => getScyFyAndFantasy(data)
  .map((book) => book.name).sort();

// console.log(fantasyOrScienceFictionAuthors(books));

fantasyOrScienceFictionAuthors(books);
