import MoonlightLogo from "@/assets/logo/moonlight-logo.svg";
import { Separator } from "@/components/ui/separator";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { RiGoogleLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import H1 from "./tags/H1";
import Image from "./tags/Image";
import P from "./tags/P";
import Section from "./tags/Section";
import Span from "./tags/Span";

const Foot = (): React.ReactElement => {
  return (
    <>
      <Section className="grid grid-cols-1 gap-8 md:grid-cols-5">
        {/* Logo and Description */}
        <Section className="grid space-y-1 md:col-span-2">
          <Link to={"/"}>
            <Image
              src={MoonlightLogo}
              alt="moonlight school logo"
              className="flex !w-40 self-start invert-100"
            ></Image>
          </Link>
          <Link to={"/"} className="">
            <H1 className="text-xl font-extrabold uppercase">
              moonlight garden
            </H1>
          </Link>
          <Link to={"/"} className="">
            <P className="text-md font-extralight">world class teaching...</P>
          </Link>
        </Section>

        {/* Company */}
        <Section>
          <H1 className="mb-3 font-semibold">COMPANY</H1>
          <ul className="flex flex-col flex-wrap space-y-2">
            <Link to={"/"} className="">
              <li>About Us</li>
            </Link>
            <Link to={"/"} className="">
              <li>Career</li>
            </Link>
            <Link to={"/"} className="">
              <li>Resource Center</li>
            </Link>
            <Link to={"/"} className="">
              <li>Guides</li>
            </Link>
          </ul>
        </Section>

        {/* Categories */}
        <Section>
          <H1 className="mb-3 font-semibold">CATEGORIES</H1>
          <ul className="flex flex-col flex-wrap space-y-2">
            <Link to={"/"} className="">
              <li>PhD Course</li>
            </Link>
            <Link to={"/"} className="">
              <li>Undergraduation</li>
            </Link>
            <Link to={"/"} className="">
              <li>Postgraduation</li>
            </Link>
            <Link to={"/"} className="">
              <li>Research</li>
            </Link>
          </ul>
        </Section>

        {/* Get in Touch */}
        <Section>
          <h4 className="mb-3 font-semibold">GET IN TOUCH</h4>
          <ul className="flex flex-col flex-wrap space-y-2">
            <Link to={"/"} className="">
              <li>Privacy Policy</li>
            </Link>
            <Link to={"/"} className="">
              <li>Cookie Policy</li>
            </Link>
            <Link to={"/"} className="">
              <li>Terms & Condition</li>
            </Link>
            <Link to={"/"} className="">
              <li>Site Map</li>
            </Link>
          </ul>
        </Section>
      </Section>

      <Separator className="my-6 bg-white/30" />

      {/* Bottom Section */}
      <Section className="flex flex-col items-center justify-between gap-4 text-white/90 md:flex-row">
        <P className="text-xs">
          © 2025 <Span className="font-semibold text-white"> copy</Span>. All
          rights reserved. Made By{" Dulon Mahadi"}
          <Span className="font-semibold text-white"> {"(-Stranger-)"}</Span>.
        </P>
        <Section className="flex gap-4 text-lg">
          <Span className="text-xl font-light">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              to={"https://mail.google.com/chat/u/0/#chat/home"}
            >
              <RiGoogleLine />
            </Link>
          </Span>
          <Span className="text-xl font-light">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              to={"https://youtube.com"}
            >
              <FiYoutube />
            </Link>
          </Span>
          <Span className="text-xl font-light">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              to={"https://wa.me/+881951027002"}
            >
              <FaWhatsapp />
            </Link>
          </Span>
        </Section>
      </Section>
    </>
  );
};

export default Foot;
