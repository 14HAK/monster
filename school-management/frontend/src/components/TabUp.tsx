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
        <Section className="bg-fruity-reddark flex justify-items-start gap-4 px-4 text-sm">
          <Section className="flex items-center justify-center gap-1">
            <Span className="text-md font-light">
              <IoCallOutline />
            </Span>
            <Span>
              <P>+880-1640677464</P>
            </Span>
          </Section>

          <Section className="flex items-center justify-center gap-1">
            <Span className="text-md font-light">
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

          <Section className="flex items-center justify-center gap-1">
            <Span className="text-md font-light">
              <FaRegUser />
            </Span>
            <Span className="flex">
              <Link to={"/login"}>
                <P className="font-light">Login/</P>
              </Link>
              <Link to={"/resister"}>
                <P className="font-light">Resister</P>
              </Link>
            </Span>
          </Section>

          <Section className="flex items-center justify-center gap-1">
            <Span className="text-md font-light">
              <IoNewspaperOutline />
            </Span>
            <Span>
              <Link to={"/"}>
                <P className="text-md font-light">Online Admission</P>
              </Link>
            </Span>
          </Section>
        </Section>
      </Section>
    </>
  );
};

export default TabUp;
