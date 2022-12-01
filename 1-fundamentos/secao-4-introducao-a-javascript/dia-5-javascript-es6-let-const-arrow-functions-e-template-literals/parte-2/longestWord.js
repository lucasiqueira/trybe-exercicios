// 🚀 Crie uma função que receba uma frase como parâmetro e retorne a maior palavra da frase.

const longestWord = (sentence) => {
  const array = sentence.split(' ');
  let longest = array[0];
  for (word of array) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  console.log(longest);
}

longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'); // retorna 'aconteceu'

