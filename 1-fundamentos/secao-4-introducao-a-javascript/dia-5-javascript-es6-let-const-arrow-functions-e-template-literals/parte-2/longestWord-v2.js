const longestWord = text => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0];

// (???) Dúvida no funcionamento da função sort

console.log(longestWord("Antonio foi ao banheiro e não sabemos o que aconteceu"));