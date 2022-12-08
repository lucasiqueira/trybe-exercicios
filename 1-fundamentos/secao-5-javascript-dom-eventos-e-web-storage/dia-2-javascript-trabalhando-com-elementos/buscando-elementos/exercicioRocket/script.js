// Acesse o elemento elementoOndeVoceEsta.

const elementWhereAreYou = document.getElementById('elementoOndeVoceEsta');
// console.log(elementWhereAreYou);

// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
const parentElement = elementWhereAreYou.parentElement;
// console.log(parentElement);
parentElement.style.color ='purple';

// Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
const firstChildOfChild = elementWhereAreYou.firstElementChild;
firstChildOfChild.innerText = "Eu o primogênito do meu pai e da minha mãe";

// Acesse o primeiroFilho a partir de pai.
const parent = document.querySelector("#pai");
console.log(parent.firstElementChild);

// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
const firstChild = elementWhereAreYou.children;
console.log(firstChild);

// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
const attention = elementWhereAreYou.nextSibling;
console.log(attention);

// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
const thirdChild = elementWhereAreYou.nextElementSibling;

// Agora acesse o terceiroFilho a partir de pai.
const thirdChild2 = parent.lastElementChild.previousElementSibling;
console.log(thirdChild2);