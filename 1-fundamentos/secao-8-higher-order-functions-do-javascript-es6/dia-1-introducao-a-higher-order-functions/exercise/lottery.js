/* Sorteador de loteria
Desenvolva uma HOF que retorne o resultado de um sorteio. Essa HOF irá gerar um número aleatório entre 1 e 5, recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: “Tente novamente” ou “Parabéns, você ganhou”). */

const lotteryResult = (bid, callback) => {
  const number = Math.ceil(Math.random() * 5);
  return callback(bid, number);
  
}

const checkResult = (bid, sorted) => {
  if (bid === sorted) {
    return 'Parabéns, você ganhou'
  }
  return 'Tente novamente'
}

const array = [];

console.log(lotteryResult(3, checkResult));