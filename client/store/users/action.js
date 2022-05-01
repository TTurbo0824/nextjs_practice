export const usersActionTypes = {
  ADD_USERS: 'ADD_USERS',
};

export const addUser = (newUser) => {
  return {type: usersActionTypes.ADD_USERS, user: newUser};
};
