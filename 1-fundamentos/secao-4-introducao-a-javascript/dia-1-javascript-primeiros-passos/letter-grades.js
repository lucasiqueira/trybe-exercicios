// Utilize if/else para escrever um código que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O código deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

let percentage = 95;
let letterGrade;

if (percentage >= 90) {
  letterGrade = 'A';
  console.log(letterGrade);
} else if (percentage >= 80) {
  letterGrade = 'B';
  console.log(letterGrade);
} else if (percentage >= 70) {
  letterGrade = 'C';
  console.log(letterGrade);
} else if (percentage >= 60) {
  letterGrade = 'D';
  console.log(letterGrade);
} else if (percentage >= 50) {
  letterGrade = 'E';
  console.log(letterGrade);
} else {
  letterGrade = 'F';
  console.log(letterGrade);
}