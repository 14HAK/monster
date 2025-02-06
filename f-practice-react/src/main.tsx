/* eslint-disable react/react-in-jsx-scope */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App3.tsx";
// import App2 from "./App2.tsx";
// import App3 from "./App3.tsx";
import App4 from "./App4.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <App /> */}
    {/* <App2 /> */}
    {/* <App3 /> */}
    <App4 />
  </StrictMode>,
);
