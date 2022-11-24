// Utilize if/else para escrever um código que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda, descontado o custo do produto) a empresa terá ao vender mil desses produtos.
//   Atente que, sobre o custo do produto, incide um imposto de 20%.
//   Seu código também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
//   O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
//     valorCustoTotal = valorCusto + impostoSobreOCusto;
//     lucro = valorVenda - valorCustoTotal (lucro de um produto);

const productCost = 1000;
const productSellingPrice = 1800;
const taxRate = 0.2;

let productCostFull = productCost + (productCost * taxRate);
let profitPerProduct = productSellingPrice - productCostFull;
let unitSold = 1000;

if (productCost < 0 || productSellingPrice < 0) {
  console.log('Valores errados.');
} else {
  console.log(productCost);
  console.log(productSellingPrice);
  console.log(productCostFull);
  console.log(profitPerProduct);
  console.log(unitSold);
  console.log(unitSold * profitPerProduct);
  console.log(unitSold * productSellingPrice);
}