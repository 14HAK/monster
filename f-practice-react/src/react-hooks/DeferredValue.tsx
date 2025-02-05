/* eslint-disable react/react-in-jsx-scope */
import { useDeferredValue } from "react";

export default function DeferredValue() {
  console.log("first");

  const text = "manage";
  const deferredText = useDeferredValue(text); // 🔄 Defers value update

  console.log("third");

  const items = Array(10000)
    .fill(null)
    .map((_, i) => `Item ${i} - ${deferredText}`);

  console.log("second");

  return (
    <div className="p-4">
      <ul>{items?.map((item, index) => <li key={index}>{item}</li>)}</ul>
    </div>
  );
}

// 1.useDeferredValue() is NOT a delay or debounce.
// 2.It defers rendering until the browser is idle.
// 3.Use it when rendering large lists or expensive computations.
// 4.Not useful for API calls (use debounce instead).
// 5.Would you like a comparison with useTransition()? 🚀
