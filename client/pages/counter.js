import {incrementCounter} from '../store/counter/action';
import {wrapper} from '../store/store';

const Counter = (props) => {
  return <div>counter</div>;
};
export const getStaticProps = wrapper.getStaticProps((store) => {
  store.dispatch(incrementCounter());
});

export default Counter;
