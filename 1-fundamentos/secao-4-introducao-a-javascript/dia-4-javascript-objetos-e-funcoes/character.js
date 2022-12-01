let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
}

console.log('Bem vinda, ' + info.personagem);
console.log();

info['recorrente'] = 'Sim';

// console.log(info);

for (key in info) {
  console.log(key);
}

console.log();

for (key in info) {
  console.log(info[key]);
}
console.log();

for (key in info) {
  if (key === 'recorrente' && info[key] === info2[key]){
    console.log('Ambos recorrentes');(key != 'recorrente')
  } else {
    console.log(info[key] + ' e ' + info2[key]);
  }
}