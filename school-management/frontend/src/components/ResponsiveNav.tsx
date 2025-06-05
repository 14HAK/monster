import MoonlightLogo from "@/assets/logo/moonlight-logo.svg";
import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { CiBoxList } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { LuContact, LuUserPlus, LuUserRoundCheck } from "react-icons/lu";
import { TbBrandBlogger } from "react-icons/tb";
import { Link } from "react-router-dom";
import H1 from "./tags/H1";
import Image from "./tags/Image";
import P from "./tags/P";
import Section from "./tags/Section";

const ResponsiveNav = (): React.ReactElement => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <Section className="rounded-lg bg-white shadow">
        <nav
          className="max-w-9xl mx-auto flex items-center justify-between p-4 lg:px-8"
          aria-label="Global"
        >
          {/* Logo */}
          <div className="flex lg:flex-1">
            <Section className="xs:w-0 h-auto sm:w-16">
              <Link to={"/"}>
                <Image
                  src={MoonlightLogo}
                  alt="moonlight school logo"
                  className=""
                ></Image>
              </Link>
            </Section>
          </div>
          <Section className="text-fruity-blacksmooth lg:hidden">
            <Link to={"/"} className="hover:text-primary">
              <H1 className="font-extrabold uppercase">moonlight garden</H1>
            </Link>
            <Link to={"/"} className="hover:text-primary">
              <P className="text-sm font-extralight">world class teaching...</P>
            </Link>
          </Section>

          {/* Mobile Menu Button */}
          <div className="flex">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="size-6" />
              ) : (
                <Menu className="size-6" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="px-4 pb-4">
            <div className="space-y-2">
              <ul
                className="text-sm font-medium text-gray-700"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <li className="flex items-center justify-between gap-x-1 rounded-sm p-2 hover:bg-slate-200">
                  <Link to={"/home"} className="hover:text-primary">
                    Home
                  </Link>
                  <IoHomeOutline className="font-bold" />
                </li>
                <li className="flex items-center justify-start gap-x-1 rounded-sm p-2 hover:bg-slate-200">
                  <Link to={"/about"} className="hover:text-primary">
                    About
                  </Link>
                  <CiBoxList className="font-bold" />
                </li>
                <li className="flex items-center justify-start gap-x-1 rounded-sm p-2 hover:bg-slate-200">
                  <Link to={"/contact"} className="hover:text-primary">
                    Contact
                  </Link>
                  <LuContact className="font-bold" />
                </li>
                <li className="flex items-center justify-start gap-x-1 rounded-sm p-2 hover:bg-slate-200">
                  <Link to={"/blog"} className="hover:text-primary">
                    Blog
                  </Link>
                  <TbBrandBlogger className="font-bold" />
                </li>
                <li className="flex items-center justify-start gap-x-1 rounded-sm p-2 hover:bg-slate-200">
                  <Link to={"/login"} className="hover:text-primary">
                    Login
                  </Link>
                  <LuUserRoundCheck className="font-bold" />
                </li>
                <li className="flex items-center justify-start gap-x-1 rounded-sm p-2 hover:bg-slate-200">
                  <Link to={"/resister"} className="hover:text-primary">
                    Resister
                  </Link>
                  <LuUserPlus className="font-bold" />
                </li>
              </ul>
            </div>
          </div>
        )}
      </Section>
    </>
  );
};

export default ResponsiveNav;
