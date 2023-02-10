import getAddress from './getAddress';
import './style.css';
import Swal from 'sweetalert2';

const inputCEP = document.getElementById('input-cep');
const consultButton = document.getElementById('consult-btn');
const dataPreview = document.getElementById('data-preview');

consultButton.addEventListener('click', async () => {
  try {
    const cep = inputCEP.value;
    console.log(cep);
    const data = await getAddress(cep);
    dataPreview.innerHTML = `${data.logradouro}, Bairro: ${data.bairro}, ${data.localidade} - ${data.uf}`;
  } catch (error) {
    Swal.fire({
      title: 'Erro!',
      text: error.message,
      icon: 'error',
      confirmButtonText: 'Sair',
    });
  }
});
