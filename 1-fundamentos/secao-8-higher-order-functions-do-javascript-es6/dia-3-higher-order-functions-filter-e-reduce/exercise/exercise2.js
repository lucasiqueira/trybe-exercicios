const books = require('../../dia-1-introducao-a-higher-order-functions/exercise/library-management/database/books');

/* 🚀 2 - Filtre os livros com mais de 60 anos desde sua
publicação e ordene a partir do livro mais velho para o mais novo. */
const currYear = 2023;

const getAlmostPublicDomainBooks = (data) => data.filter((bk) => (currYear - bk.releaseYear) > 60)
  .sort((a, b) => a.releaseYear - b.releaseYear);

// console.log(getAlmostPublicDomainBooks(books));

getAlmostPublicDomainBooks(books);

module.exports = getAlmostPublicDomainBooks;
