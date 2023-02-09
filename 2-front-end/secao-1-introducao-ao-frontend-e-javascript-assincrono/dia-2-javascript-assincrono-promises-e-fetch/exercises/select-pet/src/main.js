import './style.css';

const catButton = document.getElementById('cat-btn');
const dogButton = document.getElementById('dog-btn');
const surpriseButton = document.getElementById('surprise-btn');
const img = document.getElementById('img');

const fetchCat = () => {
  fetch('https://aws.random.cat/meow')
    .then((response) => response.json())
    .then((data) => {
      img.src = data.file;
    });
};

const fetchDog = () => {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json())
    .then((data) => {
      img.src = data.message;
    });
};

dogButton.addEventListener('click', fetchDog);
catButton.addEventListener('click', fetchCat);
surpriseButton.addEventListener('click', () => {
  Promise.race([
    fetchCat(),
    fetchDog(),
  ]);
});
