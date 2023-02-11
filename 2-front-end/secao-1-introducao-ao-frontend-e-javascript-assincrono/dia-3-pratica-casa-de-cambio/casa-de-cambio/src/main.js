import './style.css';

const coinInput = document.getElementById('coin-input');
const searchButton = document.getElementById('search-btn');
const previewResult = document.getElementById('preview-result');
const previewTitle = document.getElementById('preview-title');
const previewCoinData = document.getElementById('preview-coin-data');

const baseURL = 'https://api.exchangerate.host/latest?base=';

const createCoinElement = (coin, data) => {
  const coinContainer = document.createElement('section');
  const coinDiv = document.createElement('div');
  const coinImg = document.createElement('img');
  const coinTitle = document.createElement('p');
  const coinRate = document.createElement('p');
  coinContainer.classList.add('coin-container');
  coinDiv.className = 'coin-div';
  previewCoinData.appendChild(coinContainer);
  coinContainer.appendChild(coinDiv);
  coinContainer.appendChild(coinRate);
  coinDiv.appendChild(coinImg);
  coinDiv.appendChild(coinTitle);
  coinTitle.innerHTML = coin;
  coinRate.innerHTML = data.rates[coin].toFixed(2);
  coinImg.src = './src/assets/imgs/coins.svg';
};

const generateBoard = (data) => {
  previewResult.style.width = 'auto';
  const coinArray = Object.keys(data.rates);
  previewTitle.innerHTML = `Valores referentes a 1 ${data.base}`;
  coinArray.forEach((coin) => {
    createCoinElement(coin, data);
  });
};

const runCoin = async () => {
  const selectedCoin = coinInput.value;
  const response = await fetch(`${baseURL}${selectedCoin}`);
  const data = await response.json();
  previewCoinData.innerHTML = '';
  generateBoard(data);
};

searchButton.addEventListener('click', runCoin);
