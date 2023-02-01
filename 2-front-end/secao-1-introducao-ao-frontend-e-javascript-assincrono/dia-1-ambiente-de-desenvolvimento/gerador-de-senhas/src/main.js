/* eslint-disable import/no-extraneous-dependencies */
import { nanoid } from 'nanoid';

const passwordButton = document.querySelector('button');
const passwordDisplay = document.querySelector('h2');

passwordButton.addEventListener('click', () => {
  passwordDisplay.innerHTML = nanoid();
});
