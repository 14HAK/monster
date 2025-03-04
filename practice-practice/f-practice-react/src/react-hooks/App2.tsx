"use client";

import React from "react";
import CallbackCashed from "./CallbackCashed";
import { Context } from "./Context2";
import DeferredValue from "./DeferredValue";
import Effect from "./Effect";
import MemoCashed from "./MemoCashed";
import Reference from "./Reference";
import State from "./State";
import Store from "./Store";
import Transition from "./Transition";
import UniqueId from "./UniqueId";

function App2(): React.ReactElement {
  return (
    <>
      <State />
      <Effect />
      <Reference />
      <Context />
      <MemoCashed />
      <CallbackCashed />
      <Transition />
      <DeferredValue />
      <UniqueId />
      <Store />
    </>
  );
}

export default App2;
