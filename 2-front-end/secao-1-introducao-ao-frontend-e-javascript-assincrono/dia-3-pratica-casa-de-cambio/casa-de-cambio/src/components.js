const previewCoinData = document.getElementById('preview-coin-data');

export function createCoinElement(coin, rates, path) {
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
  coinRate.innerHTML = rates[coin].toFixed(2);
  coinContainer.appendChild(coinRate);
  coinDiv.appendChild(coinTitle);
}

export default function generateCoinBoard(data) {
  const coinArray = Object.keys(data.rates);
  coinArray.forEach((coin) => {
    createCoinElement(coin, data.rates);
  });
}
