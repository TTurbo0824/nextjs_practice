import {addUser} from '../store/users/action';
import {incrementCounter} from '../store/counter/action';
import {wrapper} from '../store/store';

const User = () => {};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    store.dispatch(incrementCounter());
    const res = await fetch(
      `https://reqres.in/api/users/${Math.floor(Math.random() * 10 + 1)}`
    );
    const {data} = await res.json();
    store.dispatch(addUser(`${data.first_name} ${data.last_name}`));
  }
);
export default User;
