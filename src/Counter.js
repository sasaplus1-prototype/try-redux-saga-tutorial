import React from 'react';
import PropTypes from 'prop-types';

const Counter = function Counter(props) {
  const {
    onDecrement,
    onIncrement,
    onIncrementAsync,
    value,
  } = props;

  return (
    <div>
      <button onClick={onIncrementAsync}>Increment Async</button>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
      <div>{value}</div>
    </div>
  );
};

Counter.propTypes = {
  onDecrement: PropTypes.func.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onIncrementAsync: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};

export default Counter;
