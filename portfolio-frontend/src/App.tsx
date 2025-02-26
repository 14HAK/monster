import React from "react";
import SectionCom from "./components/SectionCom";
import Home from "./pages/Home";

import "./index.css";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

const App = (): React.ReactElement => {
  return (
    <>
      <main className="w-screen max-h-screen">
        <SectionCom className="grid max-h-screen w-full grid-cols-12 overflow-hidden text-[#F8F2DE]">
          <SectionCom className="w-full max-h-screen col-span-5 bg-gradient-to-tl from-slate-950 to-green-900">
            <Home />
          </SectionCom>

          <SectionCom className="w-full max-h-screen col-span-7 overflow-y-auto scrollbar-hide bg-gradient-to-tr from-slate-950 to-green-900">
            <About />
            <Experience />
            <Projects />
            <Skills />
          </SectionCom>
        </SectionCom>
      </main>
    </>
  );
};

export default App;
