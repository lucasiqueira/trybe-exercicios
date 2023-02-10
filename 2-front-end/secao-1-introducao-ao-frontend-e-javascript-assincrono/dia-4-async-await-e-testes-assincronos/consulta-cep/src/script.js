import './style.css';
import Swal from 'sweetalert2';

const inputCEP = document.getElementById('input-cep');
const consultButton = document.getElementById('consult-btn');
const dataPreview = document.getElementById('data-preview');

consultButton.addEventListener('click', async () => {
  try {
    const response = await fetch(`https://viacep.com.br/ws/${inputCEP.value}/json/`);
    const data = await response.json();
    dataPreview.innerHTML = `${data.logradouro}, Bairro: ${data.bairro}, ${data.localidade} - ${data.uf}`;
  } catch (error) {
    Swal.fire({
      title: 'Erro!',
      text: 'CEP inválido',
      icon: 'error',
      confirmButtonText: 'Sair',
    });
  }
});
