const fs = require('fs').promises;

async function showSimpsonWithId(id) {
  try {
    const data = await fs.readFile('./simpsons.json', 'utf-8');
    const characters = JSON.parse(data);
    const simpsonSelected = characters.find((c) => Number(c.id) === id);
    if (!simpsonSelected) throw new Error('ID não localizado!');
    return simpsonSelected;
  } catch (error) {
    console.log(`Erro na leitura do arquivo ${error}`);
  }
}

// Opção 1:
async function main() {
  const simpson = await showSimpsonWithId(10);
  console.log(simpson);
}

main();
