import Swal from 'sweetalert2'

const heroImg = document.getElementById('hero-img');
const heroName = document.getElementById('hero-name');
const sortButton = document.getElementById('sort-btn');

const maxHeroes = 731;
const randomId = () => Math.floor(Math.random() * maxHeroes);

sortButton.addEventListener('click', () => {
  const id = randomId();
  fetch(`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${id}.json`)
    .then((response) => response.json())
    .then((data) => {
      heroName.innerHTML = data.name;
      heroImg.src = data.images.md;
    })
    .catch((error) => Swal.fire({
      title: 'Herói não encontrado',
      text: error.message,
      icon: 'error',
      confirmButtonText: 'Tentar novamente',
    }));
})


