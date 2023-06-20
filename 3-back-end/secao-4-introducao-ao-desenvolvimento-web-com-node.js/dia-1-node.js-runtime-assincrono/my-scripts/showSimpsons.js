const fs = require('fs');

try {
  const data = JSON.parse(fs.readFileSync('./simpsons.json', 'utf-8'));
  data.forEach((character) => console.log(`${character.id} - ${character.name}`));
} catch (error) {
  console.log(`Erro na leitura do arquivo ${error}`);
}
