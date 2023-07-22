const express = require('express');
const { booksController } = require('./controllers');
const app = express();
const PORT = process.env.PORT || 3006;
// const db = require('./models');

// Sincronize o modelo com o banco de dados
// db.sequelize.sync()
//   .then(() => {
//     console.log('Tabela sincronizada com o banco de dados.');
//   })
//   .catch((err) => {
//     console.error('Erro ao sincronizar a tabela:', err);
//   });

// const portfinder = require('portfinder');

// portfinder.getPortPromise()
//   .then((port) => {
//     app.listen(port, () => {
//       console.log(`Servidor rodando na porta ${port}`);
//     });
//   })
//   .catch((err) => {
//     console.error('Erro ao encontrar porta disponível:', err);
//   });

app.use(express.json());

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));

app.get('/books', booksController.getAll);
app.get('/books/:id', booksController.getById);
app.post('/books', booksController.create);
app.put('/books/:id', booksController.update);
app.delete('/books/:id', booksController.remove);