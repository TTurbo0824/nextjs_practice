import {addUser} from '../store/usersSlice';
import {increment} from '../store/counterSlice';
import {wrapper} from '../store/store';
import Page from '../components/Page';

const Server = (props) => {
  return <Page title="Server Page" linkTo="/static" />;
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    store.dispatch(increment());
    const res = await fetch(
      `https://reqres.in/api/users/${Math.floor(Math.random() * 10 + 1)}`
    );
    const {data} = await res.json();
    store.dispatch(addUser(`${data.first_name} ${data.last_name}`));
  }
);

export default Server;
