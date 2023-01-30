const books = require('../../../dia-1-introducao-a-higher-order-functions/exercise/library-management/database/books');

// 2 - Crie uma string com os nomes de todos os autores.

// eslint-disable-next-line max-len
// const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

const reduceNames = (data) => data.reduce((acc, curr, index) => {
  if (index === 0) {
    return `${curr.author.name},`;
  }
  if (index === data.length - 1) {
    return `${acc} ${curr.author.name}.`;
  }
  return `${acc} ${curr.author.name},`;
}, '');

// console.log(reduceNames(books));
reduceNames(books);
