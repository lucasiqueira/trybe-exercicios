const fs = require('fs').promises;

async function simpsonsFamily() {
  try {
    const data = await fs.readFile('./simpsons.json', 'utf-8');
    const characters = JSON.parse(data);
    try {
      const family = characters.filter((c) => Number(c.id) <= 4);
      await fs.writeFile('./simpsonsFamily.json', JSON.stringify(family));
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
  await simpsonsFamily();
}

main();