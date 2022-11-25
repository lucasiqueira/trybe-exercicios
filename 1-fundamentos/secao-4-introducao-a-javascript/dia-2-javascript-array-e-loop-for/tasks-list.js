let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

tasksList.unshift('Acordar bem');
tasksList.push('Fazer exercícios da Trybe');
tasksList.pop();

console.log(tasksList.length);
console.log(tasksList);

tasksList.shift();

let searchForFirstTask = tasksList[0];
console.log(searchForFirstTask);

let searchForLastTask = tasksList[tasksList.length - 1];
console.log(searchForLastTask);