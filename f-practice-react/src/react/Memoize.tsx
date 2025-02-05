/* eslint-disable react/display-name */

import React, { useCallback, useState } from "react";

interface ExpensiveComponentProps {
  onClick: () => void;
  count: number;
}

const ExpensiveComponent = React.memo(
  ({ onClick, count }: ExpensiveComponentProps) => {
    console.log("Rendering ExpensiveComponent");
    return (
      <div>
        <p>Count is: {count}</p>
        <button onClick={onClick}>Increase</button>
      </div>
    );
  },
);

function Memoize(): React.ReactElement {
  const [count, setCount] = useState(0);

  // Memoize the callback so it doesn't get recreated on every render
  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <h2>Optimized Counter</h2>
      <ExpensiveComponent onClick={increment} count={count} />
    </div>
  );
}

export default Memoize;

//-------------------------------------------------
// import React, { useState, useCallback } from "react";

// // A memoized child component to prevent unnecessary re-renders
// const ExpensiveComponent = React.memo(({ onClick, count }) => {
//   console.log("Rendering ExpensiveComponent");
//   return (
//     <div>
//       <p>Count is: {count}</p>
//       <button onClick={onClick}>Increase</button>
//     </div>
//   );
// });

//-------------------------------------------------
// function OptimizedCounter() {
//   const [count, setCount] = useState(0);

//   // Memoize the callback so it doesn't get recreated on every render
//   const increment = useCallback(() => {
//     setCount((prev) => prev + 1);
//   }, []);

//   return (
//     <div>
//       <h2>Optimized Counter</h2>
//       <ExpensiveComponent onClick={increment} count={count} />
//     </div>
//   );
// }

// export default OptimizedCounter;
//-------------------------------------------------
