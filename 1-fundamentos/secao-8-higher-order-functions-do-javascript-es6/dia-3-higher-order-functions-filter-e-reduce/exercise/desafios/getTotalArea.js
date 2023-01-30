const countries = require('./database/countries');

// const expectedResult = 4311757;

const getTotalArea = (data) => data.reduce((acc, curr) => acc + curr.area, 0);

// console.log(getTotalArea(countries));
getTotalArea(countries);
