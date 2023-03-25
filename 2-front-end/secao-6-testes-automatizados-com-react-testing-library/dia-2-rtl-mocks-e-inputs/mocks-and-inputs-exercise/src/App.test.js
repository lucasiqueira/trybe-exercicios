// import { render, screen } from '@testing-library/react';
// import App from './App';

// const retornaNumeroAleatorio = () => Math.floor(Math.random() * 100);

// const divisivelPorDois = () => (retornaNumeroAleatorio() % 2) === 0;

// ...
test("#divisivelPorDois", () => {
  // testando quantas vezes a função foi chamada e qual seu retorno
  let divisivelPorDois = jest
    .fn()
    .mockReturnValue('default value')
    .mockReturnValueOnce('first call')
    .mockReturnValueOnce('second call');

  expect(divisivelPorDois).toHaveBeenCalledTimes(0);

  expect(divisivelPorDois()).toBe("first call");
  expect(divisivelPorDois).toHaveBeenCalledTimes(1);

  expect(divisivelPorDois()).toBe("second call");
  expect(divisivelPorDois).toHaveBeenCalledTimes(2);

  expect(divisivelPorDois()).toBe("default value");
  expect(divisivelPorDois).toHaveBeenCalledTimes(3);
});
