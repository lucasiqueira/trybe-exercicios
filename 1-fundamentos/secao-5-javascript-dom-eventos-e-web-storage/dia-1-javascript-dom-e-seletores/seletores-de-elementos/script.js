const paragraph = document.getElementById("paragraph");
paragraph.style.color = "red";

document.getElementById('page-title').innerText = 'Harry Potter and the Prisoner of Azkaban';

document.getElementById('second-paragraph').innerText = 'Brasil é HEXA!';

document.getElementById('subtitle').innerText = 'Viva Dom Marcel!!';

const texts = document.getElementsByClassName('texts');
console.log(texts);
texts[0].style.color = 'purple';
texts[0].style.backgroundColor = 'aquamarine';

const subtitle = document.getElementsByTagName('h4');
subtitle[0].style.color = 'green';
console.log(subtitle);