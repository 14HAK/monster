import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";

const App = (): React.ReactElement => {
  return (
    <RouterProvider future={{ v7_startTransition: true }} router={router} />
  );
};

export default App;
