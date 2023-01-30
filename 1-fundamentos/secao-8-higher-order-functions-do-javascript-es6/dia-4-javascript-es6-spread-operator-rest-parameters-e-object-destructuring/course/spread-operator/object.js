const product = {
  id: 1,
  name: 'Camiseta',
};

const newProduct = { ...product, price: 23 };

// eslint-disable-next-line no-console
console.log(newProduct);
