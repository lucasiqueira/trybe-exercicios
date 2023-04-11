import { combineReducers } from 'redux';
import { REQUEST_FAILED, REQUEST_STARTED, REQUEST_SUCCESSFUL } from '../actions';

const INITIAL_STATE = {
  isLoading: false,
  errorMessage: '',
  characterData: {},
};

const characterReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case REQUEST_STARTED:
      return {
        ...state,
        isLoading: true,
        errorMessage: '',
        characterData: {},
      }
    case REQUEST_FAILED:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
        characterData: {},
      }
    case REQUEST_SUCCESSFUL:
      return {
        ...state,
        isLoading: false,
        errorMessage: '',
        characterData: action.payload,
      }
    default:
      return state;
 }
}

const rootReducer = combineReducers({ characterReducer })

export default rootReducer;