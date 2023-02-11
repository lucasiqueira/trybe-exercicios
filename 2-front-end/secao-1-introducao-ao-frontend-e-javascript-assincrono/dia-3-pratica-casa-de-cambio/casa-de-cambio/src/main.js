import generateCoinBoard from './components';
import './style.css';
import Swal from 'sweetalert2';

const coinInput = document.getElementById('coin-input');
const searchButton = document.getElementById('search-btn');
const previewTitle = document.getElementById('preview-title');
const previewCoinData = document.getElementById('preview-coin-data');

const baseURL = 'https://api.exchangerate.host/latest?base=';

const validateNullInput = (input) => {
  if (!input) throw new Error('Você precisa passar uma moeda')
};

const validateCorrectInput = (input, data) => {
  if (data.base !== input) {
    previewCoinData.innerHTML = '';
    previewTitle.innerHTML = '';
    throw new Error('Moeda não existente');
  } 
}

const runCoin = async () => {
  try {
    const selectedCoin = coinInput.value;
    validateNullInput(selectedCoin);
    const response = await fetch(`${baseURL}${selectedCoin}`);
    const data = await response.json();
    validateCorrectInput(selectedCoin, data);
    if (!data) throw new Error('Moeda não existente');
    previewCoinData.innerHTML = '';
    previewTitle.innerHTML = `Valores referentes a 1 ${data.base}`;
    generateCoinBoard(data);
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Ops...',
      text: error.message,
    });
  }
};

searchButton.addEventListener('click', runCoin);
