import React, { useEffect, useState } from "react";

//useState && useEffect counter.
export default function HooksTypes(): React.ReactElement {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    console.log("ami execute hoyechi!");
  }, [count]);

  const handleSubmit = (hint: string) => {
    switch (true) {
      case hint === "inc":
        setCount(count + 1);
        break;
      case hint === "dec" && count > 0:
        setCount(count - 1);
        break;

      default:
        return "something went wrong!";
    }
  };

  return (
    <>
      <div className="mt-10 flex justify-center gap-2">
        <button
          onClick={() => handleSubmit("dec")}
          className="bg-red-500 px-5 py-1 font-bold text-slate-900"
        >
          Decrement
        </button>
        <h1 className="mx-7 my-2 text-5xl">{count || 0}</h1>
        <button
          onClick={() => handleSubmit("inc")}
          className="bg-green-500 px-5 py-1 font-bold text-slate-900"
        >
          Increment
        </button>
      </div>
    </>
  );
}
