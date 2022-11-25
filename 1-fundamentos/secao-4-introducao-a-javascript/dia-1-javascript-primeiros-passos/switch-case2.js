let statusStudent = 'aprovada';

switch (statusStudent) {
  case 'aprovada':
    console.log('Parabéns, você foi aprovado(a)!');
    break;
  case 'lista':
    console.log('Você está na nossa lista de espera');
    break;
  case 'reprovada':
    console.log('Você foi reprovada(o)');
    break;
  default:
    console.log('Informação incorreta');
}