/* eslint-disable react/react-in-jsx-scope */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// import App0 from "./ES6/App0";
import "./index.css";
import App4 from "./react-router6/App4";
// import App3 from "./tic-tac-toe/App3";
// import App2 from "./react-hooks/App2";
// import App1 from "./react/App1";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <App /> */}
    {/* <App0 /> */}
    {/* <App1 /> */}
    {/* <App2 /> */}
    {/* <App3 /> */}
    <App4 />
  </StrictMode>,
);
