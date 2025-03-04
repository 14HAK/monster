"use client";
import React from "react";
import Action from "./Action";
import AnimateCard from "./AnimateCard";
import Context2 from "./Context2";
import Effect from "./Effect";
import HooksTypes from "./HooksTypes";
import Memoize from "./Memoize";

function App1(): React.ReactElement {
  return (
    <>
      <Action />
      <AnimateCard />
      <HooksTypes />
      <Context2 />
      <Effect />
      <Memoize />
    </>
  );
}

export default App1;
