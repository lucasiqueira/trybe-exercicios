const app = require('./app');
const connection = require('./db/connection');

const PORT = 3003;

app.listen(PORT, async () => {
  const [result] = await connection.execute('SELECT 1');

  console.log(`Back-end rodando na porta ${PORT}.`);

  if (result) console.log('MySQL conectado.');
});