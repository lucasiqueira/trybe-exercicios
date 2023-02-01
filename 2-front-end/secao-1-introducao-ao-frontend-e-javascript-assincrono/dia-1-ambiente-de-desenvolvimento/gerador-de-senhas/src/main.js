/* eslint-disable import/no-extraneous-dependencies */
import { nanoid } from 'nanoid';
import './style.css';
import copy from 'clipboard-copy';

const passwordButton = document.querySelector('button');
const passwordDisplay = document.querySelector('h2');

passwordButton.addEventListener('click', () => {
  passwordDisplay.innerHTML = nanoid();
});

passwordDisplay.addEventListener('click', () => {
  copy(passwordDisplay.innerHTML);
});
