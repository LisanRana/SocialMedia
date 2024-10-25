import React, { useState } from "react";

const CounterFunctionalComponent = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <>
      <div className="bg-slate-500 flex justify-center items-center flex-col">
        <h1 className="text-2xl font-bold ">Count: {count}</h1>
        <div>
          <button
            onClick={increment}
            className="border p-2 px-4 hover:bg-blue-950 hover:text-white m-2 bg-slate-200 border-r-2 rounded-2xl"
          >
            Increment
          </button>
          <button
            onClick={decrement}
            className="border p-2 px-4 hover:bg-blue-950 hover:text-white m-2 bg-slate-200 border-r-2 rounded-2xl"
          >
            Decrement
          </button>
        </div>
      </div>
    </>
  );
};

export default CounterFunctionalComponent;