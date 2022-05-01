import {increment} from '../store/counterSlice';
import {wrapper} from '../store/store';
import Page from '../components/Page';

const Static = (props) => {
  return <Page title="Static Page" linkTo="/server" />;
};

export const getStaticProps = wrapper.getStaticProps((store) => {
  store.dispatch(increment());
});

export default Static;
