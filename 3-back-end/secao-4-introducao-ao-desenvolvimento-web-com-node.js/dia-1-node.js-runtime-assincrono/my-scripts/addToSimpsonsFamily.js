const fs = require('fs').promises;

async function addToSimpsonsFamily() {
  try {
    const data = await fs.readFile('./simpsonsFamily.json', 'utf-8');
    const family = JSON.parse(data);
    try {
      const familyPlusNelson = [...family, { id: '8', name: 'Nelson Muntz' }];
      await fs.writeFile('./simpsonsFamily.json', JSON.stringify(familyPlusNelson));
      console.log('Nelson Muntz adicionado com sucesso');
    } catch (error) {
      console.error(`Erro na exclusão de personagens ${error}`);
    }
  } catch (error) {
    console.error(`Erro na leitura do arquivo ${error}`);
  }
}

// Opção 1:
async function main() {
  await addToSimpsonsFamily();
}

main();
