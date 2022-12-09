/* Imagine que você trabalha em uma agência de viagens e a sua liderança informou que você será a pessoa responsável por dar início a nova página inicial (landing page) da empresa.

Seu objetivo nesse novo desafio é criar tags HTML usando a manipulação do DOM com JavaScript.  

Para dar início a página, você deve criar algumas tags:*/

// Adicione a tag h1 com o texto TrybeTrip - Agência de Viagens como filho da tag body;
const body = document.getElementById('body');
const title = document.createElement('h1');
title.innerHTML = 'TrybeTrip - Agência de Viagens';
body.appendChild(title);

// Adicione a tag main com a classe main-content como filho da tag body;
const mainContent = document.createElement('main');
mainContent.className = 'main-content';
body.appendChild(mainContent);

// Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
const centerContent = document.createElement('section');
centerContent.className = 'center-content';
mainContent.appendChild(centerContent);

// Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
const paragraph = document.createElement('p');
paragraph.innerHTML = 'Uma bela mensagem sobre uma ótima agência de viagem. Te leva e te traz, a não ser que você não queira mais voltar.';
centerContent.appendChild(paragraph);

// Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
const leftContent = document.createElement('section');
leftContent.className = 'left-content';
mainContent.appendChild(leftContent);

// Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
const rightContent = document.createElement('section');
rightContent.className = 'right-content';
mainContent.appendChild(rightContent);

// Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;
const smallImage = document.createElement('img');
smallImage.src = 'https://picsum.photos/200';
smallImage.className = 'small-image';
leftContent.appendChild(smallImage);

// Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, … como valores da lista. Essa lista deve ser filha do section criado no passo 6;
const numbers = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];
const numberList = document.createElement('ul');
numberList.className = 'number-list';
rightContent.appendChild(numberList);

for (let index = 0; index < numbers.length; index += 1) {
  const listItem = document.createElement('li');
  listItem.className = 'number';
  listItem.id = numbers[index];
  listItem.innerHTML = numbers[index];
  numberList.appendChild(listItem);
}

// Adicione 3 tags h3, todas sendo filhas do main criado no passo 2.
for (let index = 0; index < 3; index += 1) {
  const h3 = document.createElement('h3');
  mainContent.appendChild(h3);
}

/* Após criar as tags anteriores, você mostrou para a sua liderança como estava a estrutura inicial da página. Sua liderança então pediu para que você fizesse algumas alterações: */

// Adicione a classe title na tag h1 criada;
title.className = 'title';

// Adicione a classe description nas 3 tags h3 criadas;
const h3 = document.getElementsByTagName('h3');
for (let index = 0; index < h3.length; index += 1) {
  h3[index].className = 'description';
}

// Remova a section criada no passo 5 (aquele que possui a classe left-content). Utilize a função .removeChild();
mainContent.removeChild(leftContent);

/* Centralize a section criada no passo 6 (aquele que possui a classe right-content).
De olho na dica 👀:: Para centralizar a section, basta configurar o margin-right: auto da section; */
rightContent.style.marginRight = 'auto';

// Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content) para a cor verde;
mainContent.style.backgroundColor = 'green';

// Remova os dois últimos elementos (nove e dez) da lista criada no passo 8.
numberList.removeChild(document.getElementById('nove'));
numberList.removeChild(document.getElementById('dez'));