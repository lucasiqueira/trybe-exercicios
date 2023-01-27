const books = require('../../dia-1-introducao-a-higher-order-functions/exercise/library-management/database/books');

// const expectedResult = [
//   'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
//   'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien',
//   'Fundação - Ficção Científica - Isaac Asimov',
//   'Duna - Ficção Científica - Frank Herbert',
//   'A Coisa - Terror - Stephen King',
//   'O Chamado de Cthulhu - Terror - H. P. Lovecraft',
// ];

const formatedBookNames = (data) => data.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`);

formatedBookNames(books);
