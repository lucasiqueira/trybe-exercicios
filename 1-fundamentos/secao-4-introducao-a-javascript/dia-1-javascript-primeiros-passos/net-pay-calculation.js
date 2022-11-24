const grossPay = 5204.07;
let inssAliquot;
let inss;
let irAliquot;
let ir;
let netPay;

if (grossPay <= 1556.94) {
  inssAliquot = 0.08;
  inss = inssAliquot * grossPay;
} else if (grossPay <= 2594.92) {
  inssAliquot = 0.09;
  inss = inssAliquot * grossPay;
} else if (grossPay <= 5189.82) {
  inssAliquot = 0.11;
  inss = inssAliquot * grossPay;
} else {
  inss = 570.88;
}

let basePay = grossPay - inss;

if (basePay <= 1903.98) {
  irAliquot = 0;
} else if (basePay <= 2826.65) {
  irAliquot = 0.075;
  deduction = 142.8;
  ir = (irAliquot * basePay) - deduction;
} else if (basePay <= 3751.05) {
  irAliquot = 0.15;
  deduction = 354.8;
  ir = (irAliquot * basePay) - deduction;
} else if (basePay <= 4664,68) {
  irAliquot = 0.225;
  deduction = 636.13;
  ir = (irAliquot * basePay) - deduction;
} else {
  irAliquot = 0.275;
  deduction = 869.36;
  ir = (irAliquot * basePay) - deduction;
}

netPay = grossPay - inss - ir;

console.log('Salário bruto: R$' + grossPay.toFixed(2));
console.log('Salário líquido: R$' + netPay.toFixed(2));
console.log('INSS: R$' + inss.toFixed(2));
console.log('Imposto de Renda: R$' + ir.toFixed(2));