import { CHANGE_DISPONIBILITY, CHANGE_THEME } from "../actions";

const INITIAL_STATE = {
  status: 'offline',
  theme: 'dark',
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        status: state.status,
        theme: (state.theme === 'dark') ? 'light' : 'dark',
      }
    case CHANGE_DISPONIBILITY:
      return {
        status: (state.status === 'offline') ? 'online' : 'offline',
        theme: state.theme,
      }
    default:
      return state;
  }
}

export default reducer;