let word = 'omissíssimo';

function palindromeChecker(word) {
  let invertedWord = '';
  for (let index = word.length - 1; index >= 0 ; index -= 1) {
    invertedWord += word[index];
  }
  if (invertedWord == word) {
    return true;
  } else {
    return false;
  }
}

console.log(palindromeChecker(word));