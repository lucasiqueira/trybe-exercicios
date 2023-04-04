import { renderNextColor, renderPreviousColor, renderRandomColor } from "./redux/actions";
import store from "./redux/store";

const previousColorButton = document.getElementById('previous');
const nextColorButton = document.getElementById('next');
const randomColorButton = document.getElementById('random');
const colorValue = document.getElementById('value');
const container = document.getElementById('container');

nextColorButton.addEventListener('click', () => {
  store.dispatch(renderNextColor());
})

previousColorButton.addEventListener('click', () => {
  store.dispatch(renderPreviousColor());
})

randomColorButton.addEventListener('click', () => {
  store.dispatch(renderRandomColor());
})

store.subscribe(() => {
  const {colors, index} = store.getState();
  colorValue.innerHTML = colors[index];
  container.style.backgroundColor = colors[index];
})