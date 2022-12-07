// Requisito 06

const calcTriangleArea = (base, height) => (base * height) / 2;

const calcRectangleArea = (base, height) => base * height;

const calcAllAreas = (base, height, form) => {
  if (form === 'triângulo') {
    return `O valor da área do triângulo é de: ${(base * height) / 2}`;
  }
  if (form === 'retângulo') {
    return `O valor da área do retângulo é de: ${base * height}`;
  }
  return 'Não foi possível fazer o cálculo, insira uma forma geométrica válida';
};

console.log(calcTriangleArea(10, 50));
console.log(calcRectangleArea(10, 50));
console.log(calcAllAreas(10, 50, 'triângulo'));
console.log(calcAllAreas(10, 50, 'retângulo'));
console.log(calcAllAreas(10, 50, 'quadrado'));