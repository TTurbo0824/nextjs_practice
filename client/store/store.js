import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {createWrapper} from 'next-redux-wrapper';
import counter from './counterSlice';
import users from './usersSlice';

const combinedReducers = combineReducers({
  counter,
  users,
});

export const makeStore = () => {
  configureStore({
    reducer: combinedReducers,
  });
};

export const wrapper = createWrapper(makeStore);
