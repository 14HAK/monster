/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useTransition } from "react";

function Transition(): React.ReactElement {
  const [data, setData] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [isPending, startTransition] = useTransition();

  const fetchData = async () => {
    setLoading(true);
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const result = await response.json();
    setLoading(false);

    await new Promise<void>((resolve) => {
      startTransition(() => {
        setData(result.map((post: any) => post.title));
        resolve();
      });
    });
  };

  return (
    <div className="p-6">
      <button
        onClick={fetchData}
        disabled={loading}
        className="rounded bg-blue-500 px-4 py-2 text-white"
      >
        {loading ? "Fetching..." : "Fetch Data"}
      </button>

      {isPending && <p className="text-gray-500">Updating UI...</p>}

      <ul className="mt-4">
        {data.slice(0, 10).map((title, index) => (
          <li key={index} className="border-b p-1">
            {title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Transition;
