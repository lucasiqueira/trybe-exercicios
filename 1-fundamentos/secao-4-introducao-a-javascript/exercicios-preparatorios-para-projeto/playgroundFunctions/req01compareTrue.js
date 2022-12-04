// Requisito 01 - Projeto Playgroud Functions

const compareTrue = (bool1, bool2) => {
  if (bool1 === true && bool2 === true) {
    return true;
  } else {
    return false;
  }
}

const girafa = true;
const elefante = true;
const macaco = false;

console.log(compareTrue(girafa, elefante));
console.log(compareTrue(macaco, elefante));