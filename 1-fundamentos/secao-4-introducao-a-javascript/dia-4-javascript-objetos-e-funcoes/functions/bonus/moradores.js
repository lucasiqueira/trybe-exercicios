// Exercício 4
// Usando o objeto abaixo, faça o que for pedido a seguir:
// Acesse as chaves nome, sobrenome, andar e apartamento do último morador do blocoDois e faça um console.log no seguinte formato: “O morador do bloco 2 de nome Zoey Brooks mora no 1° andar, apartamento 101”.
// Utilize o for para imprimir o nome completo de todos os moradores do bloco 1, acessando suas chaves nome e sobrenome. Depois faça o mesmo para os moradores do bloco 2.

let moradores = {
  blocoUm: [
    {
      nome: 'Luiza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
  ],
  blocoDois: [
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ],
};

const infoZoey = (object) => {
  console.log(`O morador do bloco 2 de nome ${moradores.blocoDois[1].nome} ${moradores.blocoDois[1].sobrenome} mora no ${moradores.blocoDois[1].andar}° andar, apartamento ${moradores.blocoDois[1].apartamento}.`);
}
const nomesMoradores = (object) => {
  for (key in object) {
    console.log(`${key}:`);
    for (dadosMorador of object[key]){
      console.log(`${dadosMorador.nome} ${dadosMorador.sobrenome}`);
    }
    console.log();
  }
}

infoZoey(moradores);
nomesMoradores(moradores);