import {applyMiddleware, legacy_createStore as createStore} from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
