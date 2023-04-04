import { changeDisponibility, changeThemeType } from "./redux/actions";
import store from "./redux/store";

const themeButton = document.getElementById('toggle-theme');
const statusButton = document.getElementById('toggle-status');

const body = document.getElementById('body');
const status = document.getElementById('status');

themeButton.addEventListener('click', () => {
  store.dispatch(changeThemeType());
});

statusButton.addEventListener('click', () => {
  store.dispatch(changeDisponibility());
});

store.subscribe(() => {
  const state = store.getState();
  console.log(state);
  body.style.backgroundColor = (state.theme === 'dark') ? '#333' : 'white';
  body.style.color = (state.theme === 'dark') ? 'white' : '#333';
  const statusString = `${state.status[0].toUpperCase()}${state.status.slice(1)}`
  status.innerHTML = statusString;
})