// Faça um programa que receba três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.

// Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.

// Um ângulo será considerado inválido se não tiver um valor positivo.

const angle1 = 30;
const angle2 = 90;
const angle3 = 60;

function triangleTest (num1, num2, num3) {
  if (num1 > 0 && num2 > 0 && num3 >0) {
    if (num1 + num2 + num3 === 180) {
      return true;
    } else {
      return false;
    }
  } else {
    return 'Erro.'
  }
}

console.log(triangleTest(angle1, angle2, angle3));