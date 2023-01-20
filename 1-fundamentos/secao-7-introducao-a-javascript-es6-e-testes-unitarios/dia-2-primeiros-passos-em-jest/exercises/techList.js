const techList = (array, name) => {
  const resultArray = []
  const sortedArray = array.sort();
  if (sortedArray.length === 0) return "Vazio!";
  for (let index = 0; index < sortedArray.length; index += 1) {
    const tech = sortedArray[index];
    const object = { tech: tech, name: name };
    resultArray.push(object);
  }
  return resultArray;
}

module.exports = techList;