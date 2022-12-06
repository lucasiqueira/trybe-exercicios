// Requisito 12 (Bônus)

const triangleCheck = (lineA, lineB, lineC) => {
  if ((lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) || (lineA < lineB + lineC && lineB < lineA + lineC && lineC < lineA + lineB)) {
    return true;
  } else {
    return false;
  }
}

console.log(triangleCheck(10, 14, 8));