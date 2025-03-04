import React, { useState } from "react";

const State = (): React.ReactElement => {
  const [count, setCount] = useState<number>(0);
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };
  return (
    <>
      <h1 className="ml-5 text-4xl text-red-600">{count}</h1>
      <br />
      <button
        className="cursor-pointer rounded-full bg-amber-400 px-3 py-0.5 text-slate-900"
        onClick={() => handleIncrement()}
      >
        Increment
      </button>
      <br />
      <button
        className="mt-2 cursor-pointer rounded-full bg-amber-400 px-3 py-0.5 text-slate-900"
        onClick={() => handleDecrement()}
      >
        Decrement
      </button>
    </>
  );
};

export default State;
