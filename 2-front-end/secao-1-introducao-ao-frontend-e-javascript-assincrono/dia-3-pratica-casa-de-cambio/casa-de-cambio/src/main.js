import './style.css';

const coinInput = document.getElementById('coin-input');
const searchButton = document.getElementById('search-btn');
const previewTitle = document.getElementById('preview-title');
const previewCoinData = document.getElementById('preview-coin-data');

const baseURL = 'https://api.exchangerate.host/latest?base=';

const createCoinElement = (coin, data) => {
  const coinContainer = document.createElement('section');
  coinContainer.className = 'coin-container';
  previewCoinData.appendChild(coinContainer);
  const coinDiv = document.createElement('div');
  coinDiv.className = 'coin-div';
  coinContainer.appendChild(coinDiv);
  const coinImg = document.createElement('img');
  coinImg.src = './src/assets/imgs/coins.svg';
  coinDiv.appendChild(coinImg);
  const coinTitle = document.createElement('p');
  coinTitle.innerHTML = coin;
  const coinRate = document.createElement('p');
  coinRate.innerHTML = data.rates[coin].toFixed(2);
  coinContainer.appendChild(coinRate);
  coinDiv.appendChild(coinTitle);
};

const generateBoard = (data) => {
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
