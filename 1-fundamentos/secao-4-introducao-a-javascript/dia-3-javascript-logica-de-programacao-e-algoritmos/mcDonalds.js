let items = ['Big Mac', 'Big Tasty', 'Batata', 'Kinder Ovo', 'Refrigerante', 'Suco'];
let price = [20, 30, 20, 78, 5, 4];


let money = 15;
let cart = [];
let higher = 0;

for(let index = 0; index < price.length; index += 1) {
  if(price[index] <= money) { // verifica se o valor individual de cada item é menor que o valor que o usuário possui.
    cart.push(items[index]); // coloca os itens que pode comprar num array.
  }
  for(let indexVerify = 0; indexVerify < price.length; indexVerify += 1) { // For secundário. Passa por todos os itens fazendo uma combinação com o item do for primário.
    if(index != indexVerify && (price[index] + price[indexVerify] <= money)) { // Verifica que se a combinação não é com o próprio item do for primário e se o valor dos itens somados é menor que o dinheiro possuído.
      cart.push(items[index] + ' + ' + items[indexVerify]); // coloca os itens no array.
    }
  }
  if(price[index] <= money && price[index] > higher) { // verifica o item com valor mais alto e que o dinheiro consiga comprar.
    higher = price[index];
  }
}

console.log(cart);
console.log(higher);