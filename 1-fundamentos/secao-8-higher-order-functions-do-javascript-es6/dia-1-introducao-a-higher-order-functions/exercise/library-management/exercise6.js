// Faça uma função que retorne true, caso nenhuma pessoa autora tenha nascido no mesmo ano, e false, caso contrário.
const books = require('./database/books');

const expectedResult = false;

const authorUnique = () => {
  let result = true;
  books.forEach((book) => {
    books.find((book2) => {
      if (book !== book2) {
        if (book.author.birthYear === book2.author.birthYear) {
          result = false;
        }
      }
    })
  })
  return result;
}

console.log(authorUnique());