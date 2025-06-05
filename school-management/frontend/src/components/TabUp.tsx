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
      <Section className="xs:hidden md:grid md:grid-cols-2">
        <Section className="bg-fruity-reddark flex justify-items-start gap-4 px-4 text-sm 2xl:text-xl">
          <Section className="items-center justify-center gap-1 md:hidden xl:flex">
            <Span className="text-md font-light 2xl:text-xl">
              <IoCallOutline />
            </Span>
            <Span>
              <P>+880-1640677464</P>
            </Span>
          </Section>

          <Section className="flex items-center justify-center gap-1">
            <Span className="text-md font-light 2xl:text-xl">
              <MdOutlineEmail />
            </Span>
            <Span>
              <P>moonlightkg@gmail.com</P>
            </Span>
          </Section>

          <Section className="flex items-center justify-center gap-1">
            <Span className="text-md font-light 2xl:text-xl">
              <BsBag />
            </Span>
            <Span>
              <P>Cart</P>
            </Span>
          </Section>
        </Section>

        <Section className="bg-fruity-reddark flex items-center justify-center gap-4 p-1 text-sm font-bold">
          <Section className="flex items-center justify-center gap-4">
            <Span className="text-xl font-light 2xl:text-2xl">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                to={"https://mail.google.com/chat/u/0/#chat/home"}
              >
                <RiGoogleLine />
              </Link>
            </Span>
            <Span className="text-xl font-light 2xl:text-2xl">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                to={"https://youtube.com"}
              >
                <FiYoutube />
              </Link>
            </Span>
            <Span className="text-xl font-light 2xl:text-2xl">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                to={"https://wa.me/+881951027002"}
              >
                <FaWhatsapp />
              </Link>
            </Span>
          </Section>

          <Section className="flex items-center justify-center gap-1">
            <Span className="text-md font-light 2xl:text-xl 2xl:font-normal">
              <FaRegUser />
            </Span>
            <Span className="md:hidden xl:flex">
              <Link to={"/login"}>
                <P className="font-light 2xl:font-normal">Login/</P>
              </Link>
              <Link to={"/resister"}>
                <P className="font-light 2xl:font-normal">Resister</P>
              </Link>
            </Span>
          </Section>

          <Section className="flex items-center justify-center gap-1">
            <Span className="text-md font-light 2xl:text-xl">
              <IoNewspaperOutline />
            </Span>
            <Span>
              <Link to={"/"}>
                <P className="text-md font-light 2xl:text-xl">
                  Online Admission
                </P>
              </Link>
            </Span>
          </Section>
        </Section>
      </Section>
    </>
  );
};

export default TabUp;
