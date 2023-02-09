import Swal from 'sweetalert2'

const heroImg = document.getElementById('hero-img');
const heroName = document.getElementById('hero-name');
const sortButton = document.getElementById('sort-btn');

const maxHeroes = 731;
const randomId = () => Math.floor(Math.random() * maxHeroes);
const baseURL = 'https://superheroapi.com/api/6050490281681001';

sortButton.addEventListener('click', () => {
  const id = randomId();
  fetch(`${baseURL}/${id}`)
    .then((response) => response.json())
    .then((data) => {
      heroName.innerHTML = data.name;
      heroImg.src = data.image.url;
    })
    .catch((error) => {
      console.log(error);
      Swal.fire({
        title: 'Herói não encontrado',
        text: error.message,
        icon: 'error',
        confirmButtonText: 'Tentar novamente',
      })
    });
})