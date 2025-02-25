import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub, FaSquareWhatsapp } from "react-icons/fa6";
import Heading from "../components/Heading";
import Navbar from "../components/Navbar";
import SectionCom from "../components/SectionCom";
import Social from "../components/Social";
import Text from "../components/Text";

const Home = (): React.ReactElement => {
  return (
    <>
      <SectionCom className="mx-8 my-14">
        <SectionCom className="mb-16">
          <Heading className="mb-2 text-6xl font-extrabold text-[#ccd6f6]">
            Dulon Mahadi
          </Heading>
          <Heading className="mb-4 text-4xl font-semibold text-[#ccd6f6]">
            MERN Stack Developer
          </Heading>
          <Text className="w-96 text-xl font-normal">
            I build accessible, pixel-perfect digital experiences for the web.
          </Text>
        </SectionCom>

        <SectionCom className="mb-14">
          <Navbar />
        </SectionCom>
        <SectionCom className="flex content-start justify-items-start gap-4">
          <Social
            className="cursor-pointer text-3xl"
            link="https://github.com/14HAK"
          >
            <FaSquareGithub />
          </Social>
          <Social
            className="cursor-pointer text-3xl"
            link="https://www.linkedin.com/in/dulon-mahadi-mern/"
          >
            <FaLinkedin />
          </Social>
          <Social
            className="cursor-pointer text-3xl"
            link="https://wa.me/+8801640677464"
          >
            <FaSquareWhatsapp />
          </Social>
        </SectionCom>
      </SectionCom>
    </>
  );
};

export default Home;
