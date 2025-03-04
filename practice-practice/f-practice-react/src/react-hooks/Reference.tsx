import React, { useRef } from "react";

const Reference = (): React.ReactElement => {
  const elementReferenced = useRef(null);

  const handleClick = () => {
    console.log(elementReferenced.current);
  };

  return (
    <>
      <div className="mx-10 my-5">
        <h1 ref={elementReferenced}>useRef Hook</h1>
        <p>page of Reference</p>
        <button
          onClick={() => handleClick()}
          className="cursor-pointer rounded-2xl border border-amber-400 px-2 py-0.5"
        >
          see reference
        </button>
      </div>
    </>
  );
};

export default Reference;
