import React from "react";
import { Outlet } from "react-router-dom";
import SectionCom from "../components/SectionCom";
import "../index.css";
import Home from "../pages/Home";

const Layout = (): React.ReactElement => {
  return (
    <>
      <main className="w-screen max-h-screen font-serif">
        <SectionCom className="grid max-h-screen w-full grid-cols-12 overflow-hidden text-[#F8F2DE]">
          <SectionCom className="w-full max-h-screen col-span-5 bg-gradient-to-tl from-slate-950 to-green-900">
            <Home />
          </SectionCom>

          <SectionCom className="w-full max-h-screen col-span-7 overflow-y-auto scrollbar-hide bg-gradient-to-tr from-slate-950 to-green-900">
            <Outlet />
          </SectionCom>
        </SectionCom>
      </main>
    </>
  );
};

export default Layout;
