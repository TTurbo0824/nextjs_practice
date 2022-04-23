import {
  createStore,
  applyMiddleware,
  combineReducers,
} from 'redux';
import {createWrapper} from 'next-redux-wrapper';
import {composeWithDevTools} from 'redux-devtools-extension';
import users from './users/reducer';
import counter from './counter/reducer';

const combinedReducers = combineReducers({
  counter,
  users,
});

const initStore = () => {
  return createStore(combinedReducers, composeWithDevTools(applyMiddleware()));
};

export const wrapper = createWrapper(initStore);
