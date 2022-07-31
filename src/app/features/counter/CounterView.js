import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increaseBy5, increment, reset } from "./counterSlice";
const CounterView = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  console.log(count);
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button onClick={() => dispatch(increaseBy5(5))}>IncreaseBy5</button>
    </div>
  );
};

export default CounterView;
