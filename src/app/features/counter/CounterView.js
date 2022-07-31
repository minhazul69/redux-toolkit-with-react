import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, decrement5, increment, reset } from "./counterSlice";
const CounterView = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  console.log(count);
  return (
    <div>
      <h2>Counter</h2>
      <h3>Count: {count}</h3>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button onClick={() => dispatch(decrement5(5))}>Decrement With 5</button>
    </div>
  );
};

export default CounterView;
