import React, { useEffect, useState } from "react";

export default function Effect(): React.ReactElement {
  const [second, setSecond] = useState(0);

  useEffect(() => {
    const setIntervalId = setInterval(() => {
      setSecond((prevSecond) => prevSecond + 1);
    }, 1000);

    return () => clearInterval(setIntervalId);
  }, []);
  return (
    <>
      <h1 className="bg-slate-600 text-2xl text-amber-400">{`Elapsed Time: ${second} seconds`}</h1>
    </>
  );
}
