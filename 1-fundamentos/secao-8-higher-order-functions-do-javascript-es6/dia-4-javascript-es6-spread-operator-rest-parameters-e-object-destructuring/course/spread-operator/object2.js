const product = {
  id: 1,
  name: 'Camiseta',
};

const productPrice = {
  price: 23,
  sizes: 'M, G e XG',
};

// espalha o objeto `product` e espalha o objeto `productPrice`
const newProduct = { ...product, ...productPrice };

// eslint-disable-next-line no-console
console.log(newProduct); // {id: 1, name: 'Camiseta', price: 23}
