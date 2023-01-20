const hydrate = (string) => {
  const array = string.split(' ');
  let counter = 0;
  for (let index = 0; index < array.length; index += 1) {
    const number = Number(array[index]);
    if (number) {
      counter += number;
    }
  }
  if (counter === 1) return `${counter} copo de água`;
  return `${counter} copos de água`;
};

module.exports = hydrate;