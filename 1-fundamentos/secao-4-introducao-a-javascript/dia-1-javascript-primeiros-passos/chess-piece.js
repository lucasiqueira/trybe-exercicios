// Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// - Como desafio, escreva um código para funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// - Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
// - Se a peça passada for inválida, o código deve retornar uma mensagem de erro.
// - Exemplo: bishop (bispo) -> diagonals (diagonais)

let chessPiece = 'knight';

switch (chessPiece) {
  case 'pawn':
    console.log('Move-se uma casa para a frente, ou duas se estiver na origem. Come uma casa para a diagonal.');
    break;
  case 'tower':
    console.log('Horizontal e vertical, sem limite de casas');
    break;
  case 'bishop':
    console.log('Diagonal, sem limite de casas');
    break;
  case 'knight':
    console.log('Em formato da letra L');
    break;
  case 'queen':
    console.log('Todas as direções, sem limite de casas');
    break;
  case 'king':
    console.log('Todas as direções, com limite de uma casa');
    break;
  default:
    console.log('Peça inválida');
}