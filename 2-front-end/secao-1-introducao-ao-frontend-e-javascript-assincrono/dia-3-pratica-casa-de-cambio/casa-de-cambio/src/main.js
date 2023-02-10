import './style.css';

const coinInput = document.getElementById('coin-input');
const searchButton = document.getElementById('search-btn');
const previewResult = document.getElementById('preview-result');

const baseURL = 'https://api.exchangerate.host/latest?base=';

const createCoinElement = (coin, data) => {
  const coinContainer = document.createElement('section');
  const coinDiv = document.createElement('div');
  const coinImg = document.createElement('img');
  const coinTitle = document.createElement('p');
  const coinRate = document.createElement('p');
  coinContainer.classList.add('coin-container');
  coinDiv.className = 'coin-div';
  previewResult.appendChild(coinContainer);
  coinContainer.appendChild(coinDiv);
  coinContainer.appendChild(coinRate);
  coinDiv.appendChild(coinImg);
  coinDiv.appendChild(coinTitle);
  coinTitle.innerHTML = coin;
  coinRate.innerHTML = data.rates[coin].toFixed(2);
  coinImg.src = '.src/assets/imgs/coins.svg';
};

const generateBoard = (data) => {
  const coinArray = Object.keys(data.rates);
  coinArray.forEach((coin) => {
    createCoinElement(coin, data);
  });
};

const runCoin = async () => {
  const selectedCoin = coinInput.value;
  const response = await fetch(`${baseURL}${selectedCoin}`);
  const data = await response.json();
  generateBoard(data);
};

searchButton.addEventListener('click', runCoin);
