import React, { Context, useContext } from "react";
import { ContextProvider } from "./Context";

interface ContextType {
  count: number;
}

export default function Context2(): React.ReactElement {
  const { count } = useContext(
    ContextProvider as unknown as Context<ContextType>,
  );
  return (
    <>
      <h1 className="text-5xl">{count as number}</h1>
    </>
  );
}
