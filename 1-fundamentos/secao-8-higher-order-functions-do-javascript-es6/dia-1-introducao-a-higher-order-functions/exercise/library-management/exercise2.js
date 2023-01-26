// Retorne o nome do livro com menor número de caracteres (menor nome).
const books = require('./database/books');

const expectedResult = 'Duna';
const smallerName = () => {
  let nameBook;
  // escreva aqui o seu código
  books.forEach((book) => {
    if (!nameBook || book.name.length < nameBook.length) {
      nameBook = book.name;
    }
  })
  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}

console.log(smallerName());