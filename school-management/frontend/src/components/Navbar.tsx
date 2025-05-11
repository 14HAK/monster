import { Input } from "@/components/ui/input";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Search } from "lucide-react";
import React, { useState } from "react";
import { CiBoxList } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { LuContact, LuUserPlus, LuUserRoundCheck } from "react-icons/lu";
import { TbBrandBlogger } from "react-icons/tb";
import { Link, useLocation } from "react-router-dom";
import Section from "./tags/Section";

import MoonlightLogo from "@/assets/logo/moonlight-logo.svg";

import { FaArrowAltCircleDown } from "react-icons/fa";
import H1 from "./tags/H1";
import Image from "./tags/Image";
import P from "./tags/P";
import { Button } from "./ui/button";

const Navbar = (): React.ReactElement => {
  //todo: get react router dom url path:
  const { pathname } = useLocation();

  //todo: form data: navbar input search take.
  const [query, setQuery] = useState("");
  console.log(query);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted query:", query);
    // You can use this value to filter, search, navigate, etc.
  };

  return (
    <>
      <Section
        className={` ${pathname === "/" || pathname === "/home" ? "pt-8" : "pt-4"} z-20 transition-all duration-1000 ease-in-out`}
      >
        <Section
          className={` ${pathname === "/" || pathname === "/home" ? "py-4" : "py-2"} bg-fruity-whitepower mx-auto grid w-full grid-cols-12 grid-rows-1 items-center justify-between rounded-xl px-8 shadow-md transition-all duration-1000 ease-in-out`}
        >
          <Section className="col-span-3 grid cursor-pointer grid-cols-12 items-center justify-center">
            <Section className="col-span-12 h-auto w-8">
              <Link to={"/"}>
                <Image
                  src={MoonlightLogo}
                  alt="moonlight school logo"
                  className=""
                ></Image>
              </Link>
            </Section>
            <Section className="text-fruity-blacksmooth col-span-12">
              <Link to={"/"} className="hover:text-primary">
                <H1 className="font-extrabold uppercase">moonlight garden</H1>
              </Link>
              <Link to={"/"} className="hover:text-primary">
                <P className="text-sm font-extralight">
                  world class teaching...
                </P>
              </Link>
            </Section>
          </Section>

          <Section className="col-span-6">
            <ul className="hidden items-center space-x-8 text-sm font-medium text-gray-700 md:flex">
              <li className="flex items-center justify-center gap-x-1">
                <Link to={"/home"} className="hover:text-primary">
                  Home
                </Link>
                <IoHomeOutline className="font-bold" />
              </li>
              <li className="flex items-center justify-center gap-x-1">
                <Link to={"/about"} className="hover:text-primary">
                  About
                </Link>
                <CiBoxList className="font-bold" />
              </li>
              <li className="flex items-center justify-center gap-x-1">
                <Link to={"/contact"} className="hover:text-primary">
                  Contact
                </Link>
                <LuContact className="font-bold" />
              </li>
              <li className="flex items-center justify-center gap-x-1">
                <Link to={"/blog"} className="hover:text-primary">
                  Blog
                </Link>
                <TbBrandBlogger className="font-bold" />
              </li>
              <li className="flex items-center justify-center gap-x-1 pt-1 font-medium">
                <Menubar className="">
                  <MenubarMenu>
                    <MenubarTrigger className="">
                      <FaArrowAltCircleDown className="cursor-pointer place-self-center text-xl" />
                    </MenubarTrigger>
                    <MenubarContent>
                      <MenubarItem>
                        <li className="flex items-center justify-between gap-x-1">
                          <Link to={"/resister"} className="hover:text-primary">
                            Resister
                          </Link>
                          <LuUserPlus className="font-bold" />
                        </li>
                      </MenubarItem>
                      <MenubarItem>
                        <li className="flex items-center justify-between gap-x-1">
                          <Link to={"/login"} className="hover:text-primary">
                            Login
                          </Link>
                          <LuUserRoundCheck className="font-bold" />
                        </li>
                      </MenubarItem>
                    </MenubarContent>
                  </MenubarMenu>
                </Menubar>
              </li>
            </ul>
          </Section>

          <Section className="col-span-3">
            <form action="" onSubmit={handleSubmit}>
              <Input
                type="text"
                placeholder="Search for Course..."
                // value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="relative rounded-lg py-2 pr-10 pl-4 text-sm font-semibold text-red-700"
              />
              <Button
                type="submit"
                className={`${pathname === "/" || pathname === "/home" ? "top-17" : "top-11"} absolute right-40 cursor-pointer bg-transparent text-gray-700 transition-all duration-1000 ease-in-out hover:bg-transparent`}
              >
                <Search />
              </Button>
            </form>
          </Section>
        </Section>
      </Section>
    </>
  );
};

export default Navbar;
