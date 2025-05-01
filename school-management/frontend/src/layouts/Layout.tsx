import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Nav from "@/components/Nav";
import Section from "@/components/Section";
import TabUp from "@/components/TabUp";
import React from "react";
import { Outlet } from "react-router-dom";

const Layout = (): React.ReactElement => {
  return (
    <>
      <Section className="mx-20">
        <Section className="">
          <Header className="bg-slate-500">
            <TabUp></TabUp>
            <Nav className="text-2xl text-white">this is header section</Nav>
          </Header>
        </Section>

        <Section className="">
          <Main className="">
            <Outlet />
          </Main>
        </Section>

        <Section className="bg-pink-300">
          <Footer className="">
            <h1>this is @footer</h1>
          </Footer>
        </Section>
      </Section>
    </>
  );
};

export default Layout;
