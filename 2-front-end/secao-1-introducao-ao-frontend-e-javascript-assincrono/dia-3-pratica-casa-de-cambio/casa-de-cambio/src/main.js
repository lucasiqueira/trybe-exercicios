import generateCoinBoard from './components';
import './style.css';

const coinInput = document.getElementById('coin-input');
const searchButton = document.getElementById('search-btn');
const previewTitle = document.getElementById('preview-title');
const previewCoinData = document.getElementById('preview-coin-data');

const baseURL = 'https://api.exchangerate.host/latest?base=';

const runCoin = async () => {
  const selectedCoin = coinInput.value;
  const response = await fetch(`${baseURL}${selectedCoin}`);
  const data = await response.json();
  previewCoinData.innerHTML = '';
  previewTitle.innerHTML = `Valores referentes a 1 ${data.base}`;
  generateCoinBoard(data);
};

searchButton.addEventListener('click', runCoin);
