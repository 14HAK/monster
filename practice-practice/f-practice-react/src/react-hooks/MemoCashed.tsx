import React, { useMemo, useState } from "react";

const MemoCashed = (): React.ReactElement => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // Memoizing the result to avoid unnecessary recomputation
  const computedValue = useMemo(() => {
    console.log("Expensive computation running...");
    return count * 2;
  }, [count]); // Only runs when "count" changes

  return (
    <div>
      <h2>Computed Value: {computedValue}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <input value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  );
};

export default MemoCashed;
