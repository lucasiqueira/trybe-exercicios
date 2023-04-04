import createColor from "../../helpers/createColor";
import { NEXT_COLOR, PREVIOUS_COLOR, RANDOM_COLOR } from "../actions";

const INITIAL_STATE = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NEXT_COLOR: {
      return {
        index: (state.index === state.colors.length - 1) ? 0 : state.index + 1,
        colors: state.colors,
      };
    }
    case PREVIOUS_COLOR:
      return {
        index: (state.index === 0) ? state.colors.length - 1 : state.index - 1,
        colors: state.colors,
      };
    case RANDOM_COLOR: {
      const color = createColor();
      return {
        index: state.colors.length,
        colors: [...state.colors, color],
      }
    }
    default:
      return state;
  }
}

export default reducer;