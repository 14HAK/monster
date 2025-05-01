import React from "react";
import { BsBag } from "react-icons/bs";
import { FaRegUser, FaWhatsapp } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { IoCallOutline, IoNewspaperOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { RiGoogleLine } from "react-icons/ri";
import Section from "./Section";

const TabUp = (): React.ReactElement => {
  return (
    <>
      <Section className="grid grid-cols-2">
        <Section className="flex justify-items-start gap-4 bg-red-200 p-1 text-sm font-bold">
          <Section className="flex items-center justify-center gap-1">
            <span className="text-xl font-light">
              <IoCallOutline />
            </span>
            <span>+880-1640677464</span>
          </Section>

          <Section className="flex items-center justify-center gap-1">
            <span className="text-xl font-light">
              <MdOutlineEmail />
            </span>
            <span>moonlightkg@gmail.com</span>
          </Section>

          <Section className="flex items-center justify-center gap-1">
            <span className="text-xl font-light">
              <BsBag />
            </span>
            <span>Cart</span>
          </Section>
        </Section>

        <Section className="flex items-center justify-center gap-4 bg-red-300 p-1 text-sm font-bold">
          <Section className="flex items-center justify-center gap-4">
            <span className="text-xl font-light">
              <RiGoogleLine />
            </span>
            <span className="text-xl font-light">
              <FiYoutube />
            </span>
            <span className="text-xl font-light">
              <FaWhatsapp />
            </span>
          </Section>

          <Section className="flex items-center justify-center gap-1">
            <span className="text-xl font-light">
              <FaRegUser />
            </span>
            <span>Login/Resister</span>
          </Section>

          <Section className="flex items-center justify-center gap-1">
            <span className="text-xl font-light">
              <IoNewspaperOutline />
            </span>
            <span>Online Admission</span>
          </Section>
        </Section>
      </Section>
    </>
  );
};

export default TabUp;
