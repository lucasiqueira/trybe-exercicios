// Requisito 07

const catAndMouse = (mouse, cat1, cat2) => {
  const distMcat1 = Math.abs(cat1 - mouse);
  const distMcat2 = Math.abs(cat2 - mouse);
  if (distMcat1 < distMcat2) {
    return 'cat1';
  } else if (distMcat2 < distMcat1) {
    return 'cat2';
  } else if (distMcat1 === distMcat2) {
    return 'os gatos trombam e o rato foge';
  }
}

console.log(catAndMouse(0, -1, 1)); // igual
console.log(catAndMouse(2, 6, 10)); // cat1
console.log(catAndMouse(-5, 0, -10)); // igual
console.log(catAndMouse(0, 0, 0)); // igual
console.log(catAndMouse(0, 10, 2)); // cat2