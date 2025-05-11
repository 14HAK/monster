import Foot from "@/components/Foot";
import Head from "@/components/Head";
import Navbar from "@/components/Navbar";
import TabUp from "@/components/TabUp";
import Footer from "@/components/tags/Footer";
import Header from "@/components/tags/Header";
import Main from "@/components/tags/Main";
import Nav from "@/components/tags/Nav";
import Section from "@/components/tags/Section";
import React from "react";

import { Outlet, useLocation } from "react-router-dom";

const Layout = (): React.ReactElement => {
  //todo: get react router dom url path:
  //todo: dynamic className: className={`px-4 py-2  ${true ? 'bg-blue-600' : 'bg-gray-200'}`}
  const { pathname } = useLocation();

  return (
    <>
      <Section className="">
        {/* header section */}
        <Section className="h-auto w-full">
          <TabUp></TabUp>
          <Header
            className={`${pathname === "/" || pathname === "/home" ? "h-screen" : "h-64"} text-fruity-whitepower relative -z-0 w-full bg-slate-500 bg-[url('https://static.vecteezy.com/system/resources/previews/049/486/575/non_2x/happy-children-smiling-in-classroom-photo.jpg')] bg-cover bg-center transition-all duration-1000 ease-in-out`}
          >
            <div className="absolute inset-0 -z-10 bg-gradient-to-l from-slate-950 to-slate-950 opacity-50"></div>
            <Nav className="mx-32">
              <Navbar />
            </Nav>

            <Head />
          </Header>
        </Section>

        {/* main section */}
        <Section className="min-h-screen w-full">
          <Main>
            <Outlet />
          </Main>
        </Section>

        {/* footer section */}
        <Section className="text-fruity-whitepower py-t-5 h-auto w-full bg-pink-900">
          <Footer className="bg-slate-800 px-6 py-10 text-sm text-white md:px-16">
            <Foot />
          </Footer>
        </Section>
        {/* <Example /> */}
      </Section>
    </>
  );
};

export default Layout;
