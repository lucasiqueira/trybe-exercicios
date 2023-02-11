export default function createCoinElement(coin, rates) {
  const coinContainer = document.createElement('section');
  const coinDiv = document.createElement('div');
  const coinImg = document.createElement('img');
  const coinTitle = document.createElement('p');
  const coinRate = document.createElement('p');
  coinContainer.classList.add('coin-container');
  coinDiv.className = 'coin-div';
  coinContainer.appendChild(coinDiv);
  coinContainer.appendChild(coinRate);
  coinDiv.appendChild(coinImg);
  coinDiv.appendChild(coinTitle);
  coinTitle.innerHTML = coin;
  coinRate.innerHTML = rates[coin].toFixed(2);
  coinImg.src = './src/assets/imgs/coins.svg';
  return coinContainer;
}
