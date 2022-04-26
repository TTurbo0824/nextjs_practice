import {useSelector, useDispatch} from 'react-redux';

const IncrementCounter = () => {
  const dispatch = useDispatch();

  const counter = useSelector((state) => state.counter.count);
  return (
    <div>
      <h1>
        Counter: <span>{counter}</span>
      </h1>
      <button onClick={() => dispatch({type: 'INCREMENT'})}>Add to Count</button>
    </div>
  );
};

export default IncrementCounter;
