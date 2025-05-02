import React from "react";
import { BsBag } from "react-icons/bs";
import { FaRegUser, FaWhatsapp } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { IoCallOutline, IoNewspaperOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { RiGoogleLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import P from "./tags/P";
import Section from "./tags/Section";
import Span from "./tags/Span";

const TabUp = (): React.ReactElement => {
  return (
    <>
      <Section className="grid grid-cols-2">
        <Section className="bg-fruity-reddark flex justify-items-start gap-4 p-1 text-sm">
          <Section className="flex items-center justify-center gap-1">
            <Span className="text-xl font-light">
              <IoCallOutline />
            </Span>
            <Span>
              <P>+880-1640677464</P>
            </Span>
          </Section>

          <Section className="flex items-center justify-center gap-1">
            <Span className="text-xl font-light">
              <MdOutlineEmail />
            </Span>
            <Span>
              <P>moonlightkg@gmail.com</P>
            </Span>
          </Section>

          <Section className="flex items-center justify-center gap-1">
            <Span className="text-md font-light">
              <BsBag />
            </Span>
            <Span>
              <P>Cart</P>
            </Span>
          </Section>
        </Section>

        <Section className="bg-fruity-reddark flex items-center justify-center gap-4 p-1 text-sm font-bold">
          <Section className="flex items-center justify-center gap-4">
            <Span className="text-xl font-light">
              <RiGoogleLine />
            </Span>
            <Span className="text-xl font-light">
              <FiYoutube />
            </Span>
            <Span className="text-xl font-light">
              <FaWhatsapp />
            </Span>
          </Section>

          <Section className="flex items-center justify-center gap-1">
            <Span className="text-md font-light">
              <FaRegUser />
            </Span>
            <Span className="flex">
              <Link to={"/login"}>
                <P>Login/</P>
              </Link>
              <Link to={"/resister"}>
                <P>Resister</P>
              </Link>
            </Span>
          </Section>

          <Section className="flex items-center justify-center gap-1">
            <Span className="text-md font-light">
              <IoNewspaperOutline />
            </Span>
            <Span>
              <P>Online Admission</P>
            </Span>
          </Section>
        </Section>
      </Section>
    </>
  );
};

export default TabUp;
