// Crie um irmão para elementoOndeVoceEsta.
const father = document.getElementById('pai');
let fifthChildItem = document.createElement('section')
father.appendChild(fifthChildItem);
fifthChildItem.innerText = 'Quinto irmão';

// Crie um filho para elementoOndeVoceEsta.
const elementWhereYouAre = document.getElementById('elementoOndeVoceEsta');
let youChild = document.createElement('section');
elementWhereYouAre.appendChild(youChild);
youChild.innerText = 'Eu sou o seu filho'

// Crie um filho para primeiroFilhoDoFilho.
const firstChildOfChild = document.getElementById('primeiroFilhoDoFilho');
let childOfFirstChildOfChild = document.createElement('div');
firstChildOfChild.appendChild(childOfFirstChildOfChild);
childOfFirstChildOfChild.innerText = 'Filho do primeiro filho do filho';

// A partir desse filho criado, acesse terceiroFilho.
const thirdChild = childOfFirstChildOfChild.parentElement.parentElement.parentElement.lastElementChild.previousElementSibling.previousElementSibling;
console.log(thirdChild);