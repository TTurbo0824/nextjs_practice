import {usersActionTypes} from './action';

const userInitialState = {
  users: ['John Doe', 'Mary Jane'],
};

export default function reducer(state = userInitialState, action) {
  switch (action.type) {
    case usersActionTypes.ADD_USERS:
      return {...state, users: [...state.users, action.user]};
    default:
      return state;
  }
}
