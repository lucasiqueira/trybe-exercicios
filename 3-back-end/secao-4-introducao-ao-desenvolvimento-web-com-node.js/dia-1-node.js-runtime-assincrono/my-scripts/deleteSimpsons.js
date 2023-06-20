const fs = require('fs').promises;

async function deleteSimpsons() {
  try {
    const data = await fs.readFile('./simpsons.json', 'utf-8');
    const characters = JSON.parse(data);
    try {
      const filteredSimp = characters.filter((c) => Number(c.id) !== 6 && Number(c.id) !== 10);
      await fs.writeFile('./simpsons.json', JSON.stringify(filteredSimp));
      console.log('Arquivo atualizado com sucesso!');
    } catch (error) {
      console.error(`Erro na exclusão de personagens ${error}`);
    }
  } catch (error) {
    console.error(`Erro na leitura do arquivo ${error}`);
  }
}

// Opção 1:
async function main() {
  await deleteSimpsons();
}

main();