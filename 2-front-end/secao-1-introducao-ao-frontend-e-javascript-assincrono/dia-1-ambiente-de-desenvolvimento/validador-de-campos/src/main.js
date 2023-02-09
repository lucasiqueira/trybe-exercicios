/* eslint-disable import/no-extraneous-dependencies */
import validator from 'validator';
import './style.css';

const btn = document.querySelector('button');
const combo = document.getElementById('combo');
const input = document.querySelector('input');
const result = document.querySelector('p');

const validateEmail = () => {
  const validation = validator.isEmail(input.value);
  result.innerHTML = `O retorno do validador foi ${validation}`;
};

const validateCpf = () => {
  const validation = validator.isTaxID(input.value, 'pt-BR');
  result.innerHTML = `O retorno do validador foi ${validation}`;
};

const validateDate = () => {
  const validation = validator.isDate(input.value, {
    format: 'DD/MM/YYYY',
    strictMode: true,
  });
  result.innerHTML = `O retorno do validador foi ${validation}`;
};

const validateHex = () => {
  const validation = validator.isHexadecimal(input.value);
  result.innerHTML = `O retorno do validador foi ${validation}`;
};

const validateStrongPassword = () => {
  const validation = validator.isStrongPassword(input.value);
  result.innerHTML = `O retorno do validador foi ${validation}`;
};

const validate = () => {
  if (combo.value === 'email') return validateEmail();
  if (combo.value === 'cpf') return validateCpf();
  if (combo.value === 'date') return validateDate();
  if (combo.value === 'hex') return validateHex();
  return validateStrongPassword();
};

btn.addEventListener('click', () => {
  validate();
});
