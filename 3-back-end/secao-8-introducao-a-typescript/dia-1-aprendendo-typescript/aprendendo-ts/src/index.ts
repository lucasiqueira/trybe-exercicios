// ./index.ts

import * as Functions from './myFunctions';
import users from './data';

console.log(`Lista de pessoas usuárias do Github: ${Functions.returnName(users)}.`);

console.log(
  `Pessoas com pelo menos 20 repositórios: ${Functions.checkRepositories(users, 20)}.`,
);

console.log(
  `Essa é a conta mais ativa da lista? ${Functions.isMostActiveUser('João Paulo Aramuni', users)}.`,
);