import {
  createStore,
  applyMiddleware,
  combineReducers,
  combineReducers,
} from 'redux';
import {createWrapper} from 'next-redux-wrapper';
import {composWithDevTools} from 'redux-devtools-extension';
import users from './users/reducer';
import counter from './counter/reducer';

const combinedReducers = combineReducers({
  counter,
  users,
});

const initStore = () => {
  return createStore(combinedReducers, composWithDevTools(applyMiddleware()));
};

export const wrapper = createWrapper(initStore);
