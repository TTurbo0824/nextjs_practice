import {incrementCounter} from '../store/counter/action';
import {wrapper} from '../store/store';
import Page from '../components/Page';

const Static = (props) => {
  return <Page title="Static Page" linkTo="/server" />;
};

export const getStaticProps = wrapper.getStaticProps((store) => {
  store.dispatch(incrementCounter());
});

export default Static;
