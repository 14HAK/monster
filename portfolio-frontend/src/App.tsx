import React from "react";
import SectionCom from "./components/SectionCom";
import About from "./pages/About";
import Home from "./pages/Home";

import "./index.css";

const App = (): React.ReactElement => {
  return (
    <>
      <main className="max-h-screen w-screen">
        <SectionCom className="relative grid max-h-screen w-screen grid-cols-12 overflow-hidden text-[#ccd6f6]">
          <SectionCom className="col-span-5 max-h-screen w-full bg-gradient-to-tr from-slate-950 to-green-900">
            <Home />
          </SectionCom>

          <SectionCom className="scrollbar-hide col-span-7 max-h-screen w-full overflow-auto bg-gradient-to-tl from-slate-950 to-green-900">
            <About />
          </SectionCom>
        </SectionCom>
      </main>
    </>
  );
};

export default App;
