// Requisito 13 (Bônus)

const hydrate = (string) => {
  let counter = 0;
  const array = string.split(' ');
  for (value of array) {
    if (!isNaN(value)) {
      counter += parseInt(value);
    }
  }
  if (counter === 1) {
    return `${counter} copo de água`;
  } else {
    return `${counter} copos de água`;
  }
}

console.log(hydrate('1 cerveja'));
console.log(hydrate('1 cachaça, 5 cervejas, 1 copo de vinho'));
console.log(hydrate('1 cerveja, 30 shots de vodka, 9 doses de whisky'));