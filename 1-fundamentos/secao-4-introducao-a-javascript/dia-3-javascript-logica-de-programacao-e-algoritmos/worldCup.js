const groupA = ['Qatar', 'Ecuador', 'Senegal', 'Netherlands'];
const groupB = ['England', 'IR Iran', 'EUA', 'Wales'];
const groupC = ['Argentina', 'Saudi Arabia', 'Mexico', 'Poland'];
const groupD = ['France', 'Australia', 'Denmark', 'Tunisia'];
const groupE = ['Spain', 'Costa Rica', 'Germany', 'Japan'];
const groupF = ['Belgium', 'Canada', 'Morocco', 'Croatia'];
const groupG = ['Brazil', 'Serbia', 'Switzerland', 'Cameroon'];
const groupH = ['Portugal', 'Ghana', 'Uruguay', 'Korea Republic'];
const groups = [groupA, groupB, groupC, groupD, groupE, groupF, groupG, groupH];

const games = [];

for(let indexGroup = 0; indexGroup < groups.length; indexGroup += 1) {
  for (let index = 0; index < groups[indexGroup].length; index += 1) {
    for (let indexMatch = 1; indexMatch < groups[indexGroup].length; indexMatch += 1) {
      if ((index != indexMatch) && (!games.includes(groups[indexGroup][indexMatch] + ' vs. ' + groups[indexGroup][index]))) {
        games.push(groups[indexGroup][index] + ' vs. ' + groups[indexGroup][indexMatch]);
      }
    }
  }
}


console.log(games.length);
console.table(games);