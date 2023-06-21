const readline = require('readline-sync');
const { writeNewMissionData } = require('./utils/fsUtils');

async function main() {
  const name = readline.question('Qual é o nome da missão? ');
  const year = readline.question('Qual foi o ano da missão? ');
  const country = readline.question('Qual foi o país responsável pela missão? ');
  const destination = readline.question('Qual foi o destino da missão? ');
  const newMission = {
    name,
    year,
    country,
    destination,
  };
  writeNewMissionData(newMission);
  console.log('Missão registrada com sucesso!');
}

main();