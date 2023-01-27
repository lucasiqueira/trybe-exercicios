const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const getEvenSumWithFilterAndReduce = (arr) => {
  const evenArray = arr.filter((number) => number % 2 === 0);
  return evenArray.reduce((acc, curr) => acc + curr);
};

const getEvenSum = (arr) => arr.reduce((acc, curr) => ((curr % 2 === 0) ? acc + curr : acc));

getEvenSumWithFilterAndReduce(numbers);
getEvenSum(numbers);
