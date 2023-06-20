const readline = require('readline-sync');

function handleFibonacci(number) {
  let before = 0;
  let current = 1;
  
  for (let index = 0; index < number; index += 1) {
    console.log(current);
    const temp = current;
    current += before;
    before = temp;
  }
}

function main() {
  const number = readline.questionInt('Quantos elementos gostaria que fossem exibidos? ');
  if (number <= 0) {
    console.log('Insira um número inteiro maior que zero.');
    return;
  }
  handleFibonacci(number); 
}

main();
