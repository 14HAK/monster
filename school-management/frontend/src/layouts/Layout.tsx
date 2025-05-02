import Navbar from "@/components/Navbar";
import TabUp from "@/components/TabUp";
import Footer from "@/components/tags/Footer";
import Header from "@/components/tags/Header";
import Main from "@/components/tags/Main";
import Nav from "@/components/tags/Nav";
import Section from "@/components/tags/Section";
import React from "react";
import { Outlet } from "react-router-dom";

const Layout = (): React.ReactElement => {
  return (
    <>
      <Section className="">
        <Section className="mx-16">
          {/* header section */}
          <Section className="py-b-5 h-auto w-full">
            <Header className="text-fruity-whitepower bg-slate-500">
              <TabUp></TabUp>
              <Nav className="">
                <Navbar />
              </Nav>
            </Header>
          </Section>

          {/* main section */}
          <Section className="min-h-screen w-full bg-red-100 py-5">
            <Main>
              <Outlet />
            </Main>
          </Section>

          {/* footer section */}
          <Section className="text-fruity-whitepower py-t-5 h-auto w-full bg-pink-900">
            <Footer>
              <h1>this is @footer</h1>
            </Footer>
          </Section>
        </Section>
      </Section>
    </>
  );
};

export default Layout;
