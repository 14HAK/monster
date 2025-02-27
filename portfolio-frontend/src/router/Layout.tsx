import React from "react";
import { Outlet } from "react-router-dom";
import SectionCom from "../components/SectionCom";
import "../index.css";
import Home from "../pages/Home";

const Layout = (): React.ReactElement => {
  return (
    <>
      <main className="max-h-screen w-screen">
        <SectionCom className="grid max-h-screen w-full grid-cols-12 overflow-hidden text-[#F8F2DE]">
          <SectionCom className="col-span-5 max-h-screen w-full bg-gradient-to-tl from-slate-950 to-green-900">
            <Home />
          </SectionCom>

          <SectionCom className="scrollbar-hide col-span-7 max-h-screen w-full overflow-y-auto bg-gradient-to-tr from-slate-950 to-green-900">
            <Outlet />
          </SectionCom>
        </SectionCom>
      </main>
    </>
  );
};

export default Layout;
