import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "./store/reducers/counterSlice";

const App = () => {
  const { value } = useSelector((state) => state.counter);
  const dispatch = useDispatch()
  return (
    <div className="max-w-screen-xl mx-auto bg-red-100 pb-5">
      <h1 className="text-5xl font-semibold  text-center my-5 py-3 font-mono">
        Counter : {value}
      </h1>
      <div className="flex justify-center items-center gap-5">
        <button onClick={() => dispatch(increment())}  className="px-5 py-2 bg-red-400 text-white rounded-sm">
          Increment
        </button>
        <button  onClick={() => dispatch(decrement())}  className="px-5 py-2 bg-red-400 text-white rounded-sm">
          Decrement
        </button>
        <button onClick={() => dispatch(incrementByAmount(5))} className="px-5 py-2 bg-red-400 text-white rounded-sm">
          Increment By 5
        </button>
      </div>
    </div>
  );
};

export default App;
