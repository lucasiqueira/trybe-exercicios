const valorItens = [1, 32, 44, 2, 3];

valorItens.reduce((acc, curr) => {
  // console.log('acc:', acc);
  // console.log('curr:', curr);
  // console.log('a soma atual é', acc + curr);
  const counter = acc + curr;
  return counter;
}, 0);

const numbers = [1, 32, 44, 2, 3];

numbers.reduce((acc, curr) => acc + curr, 30);

// console.log(`valor final do acc é ${totalSum}`);
