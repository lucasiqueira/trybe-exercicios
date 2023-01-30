/* Para fixar
Vamos fazer uma salada de frutas com os itens adicionais que você desejar.

Faça uma função chamada fruitSalad, passando como parâmetro specialFruit e additionalItens;
Faça a função retornar uma lista única, contendo todos os itens da nossa salada de frutas,
usando o spread. */

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Banana prata', 'Maçã', 'Manga'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Mamão', 'Abacate', 'Pêra'];

const fruitSalad = (fruit, additional) => [...fruit, ...additional];

// eslint-disable-next-line no-console
console.log(fruitSalad(specialFruit, additionalItens));
