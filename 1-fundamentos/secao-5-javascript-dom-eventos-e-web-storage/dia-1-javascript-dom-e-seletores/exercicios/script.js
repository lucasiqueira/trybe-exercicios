const changeText = () => {
  let paragraph = document.getElementsByTagName('p')[1];
  paragraph.innerText = 'Me vejo trabalhando para uma empresa americana ou europeia e com 5 filhos';
}

const changeColor1 = () => {
  const mainContent = document.getElementsByClassName('main-content');
  mainContent[0].style.backgroundColor = 'rgb(76,164,109)';
}

const changeColor2 = () => {
  const centerContent = document.getElementsByClassName('center-content');
  centerContent[0].style.backgroundColor = 'white';
}

const correctText = () => {
  let title = document.getElementsByTagName('h1')[0];
  title.innerText = 'Desafio - JavaScript';
}

const modifyText = () => {
  let textUpperCase = document.getElementsByTagName('p')[0]
  textUpperCase.innerText = textUpperCase.innerText.toUpperCase();
}

const showTagP = () => {
  const tagP = document.getElementsByTagName('p');
  for (let index = 0; index < tagP.length; index += 1) {
    console.log(tagP[index].innerHTML);
  }
}

changeText();
changeColor1();
changeColor2();
correctText();
modifyText();
showTagP();