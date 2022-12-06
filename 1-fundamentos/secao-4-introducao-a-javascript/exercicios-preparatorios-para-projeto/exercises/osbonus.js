// Requisito Bonus 01

function validateCPF(cpf) {
  for (let index = 0; index < cpf.length; index += 1) {
    if (typeof cpf[index] === 'string' || cpf[index] > 9 || cpf[index] < 0) {
      return 'CPF Inválido';
    }
  }
  return `CPF: ${cpf[0]}${cpf[1]}${cpf[2]}.${cpf[3]}${cpf[4]}${cpf[5]}.${cpf[6]}${cpf[7]}${cpf[8]}-${cpf[9]}${cpf[10]}`;
}

// Requisito Bonus 02

function salaryAdjustment(salary) {
  const years = 5;
  let adjustedSalary = salary;
  for (let index = 0; index < years; index += 1) {
    adjustedSalary *= 1.05;
  }
  return `Novo salário em ${years} anos: R$ ${adjustedSalary.toFixed(2)}`;
}

// Requisito Bonus 03

function highestNumber(array) {
  let highest = array[0];
  let counter = 1;
  for (let index = 1; index < array.length; index += 1) {
    if (array[index] > highest) {
      highest = array[index];
      counter = 1;
    } else if (array[index] === highest) {
      counter += 1;
    }
  }
  return counter;
}

function lowestNumber(array) {
  let lowest = array[0];
  let counter = 1;
  for (let index = 1; index < array.length; index += 1) {
    if (array[index] < lowest) {
      lowest = array[index];
      counter = 1;
    } else if (array[index] === lowest) {
      counter += 1;
    }
  }
  return counter;
}

module.exports = {
  validateCPF,
  salaryAdjustment,
  highestNumber,
  lowestNumber,
};
