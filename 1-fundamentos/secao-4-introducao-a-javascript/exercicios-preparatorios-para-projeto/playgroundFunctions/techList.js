// Requisito 10

const techList = (array, string) => {
  const sortedArray = array.sort();
  const arrayOfObjects = [];
  for (let index = 0; index < sortedArray.length; index += 1) {
    if (sortedArray.length === 0) {
      return arrayOfObjects;
    } else {
      arrayOfObjects[index] = {}; // necessário declarar que os itens do array serão um objeto
      arrayOfObjects[index].tech = sortedArray[index];
      arrayOfObjects[index].name = string;
    }
  }
  return arrayOfObjects;
}

console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));
console.log(techList([], 'Emanuel'));