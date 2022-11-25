// Jogo do jogador
const studentGame = [13, 22, 29, 7, 58, 35];
console.log('Jogo do jogador', studentGame);

let sortedGame = [];
let numberOfHits = 0;

for (let index = 0; index < 6; index += 1) {
  sortedNumber = Math.floor(Math.random() * 61);
  sortedGame.push(sortedNumber);
}
console.log('Jogo sorteado', sortedGame);

for (let i = 0; i < sortedGame.length; i += 1) {
  verifyingSortedNumber = sortedGame[i];
  for (let cont = 0; cont < studentGame.length; cont +=1){
    verifyingStudentNumber = studentGame[cont];
    if(verifyingSortedNumber === verifyingStudentNumber) {
      numberOfHits +=1;
    }
  }
}

console.log('Acertos:', numberOfHits);