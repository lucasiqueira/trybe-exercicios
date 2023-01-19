const coolestTvShow = {
  name: 'BoJack Horseman',
  genre: 'adult animation',
  createdBy: 'Raphael Bob-Waksberg',
  favoriteCharacter: 'Princess Carolyn',
  quote: 'Princess Carolyn always lands on her feet.',
  seasons: 6,
};

// console.log(Object.keys(coolestTvShow));

const student1 = {
  html: 'Muito Bom',
  css: 'Bom',
  javascript: 'Ótimo',
  softskills: 'Ótimo',
};

const student2 = {
  html: 'Bom',
  css: 'Ótimo',
  javascript: 'Ruim',
  softskills: 'Ótimo',
  git: 'Bom', // chave adicionada
};

const renderGrades = (object) => {
  const keys = Object.keys(object);
  for (let index = 0; index < keys.length; index += 1) {
    console.log(`${keys[index]}, Nível: ${object[keys[index]]}`);
  }
}

renderGrades(student1);
renderGrades(student2);