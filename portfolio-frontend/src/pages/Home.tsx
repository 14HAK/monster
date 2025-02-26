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
          <Heading className="mb-2 text-6xl font-extrabold text-[#ECDCBF]">
            Dulon Mahadi
          </Heading>
          <Heading className="mb-4 text-4xl font-semibold text-[#F8F2DE]">
            MERN Stack Developer
          </Heading>
          <Text className="w-96 text-xl font-light text-[#F8F2DE]">
            I build accessible, pixel-perfect digital experiences for the web.
          </Text>
        </SectionCom>

        <SectionCom className="mb-14">
          <Navbar />
        </SectionCom>
        <SectionCom className="flex content-start gap-4 justify-items-start">
          <Social
            className="text-3xl cursor-pointer"
            link="https://github.com/14HAK"
          >
            <FaSquareGithub />
          </Social>
          <Social
            className="text-3xl cursor-pointer"
            link="https://www.linkedin.com/in/dulon-mahadi-mern/"
          >
            <FaLinkedin />
          </Social>
          <Social
            className="text-3xl cursor-pointer"
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
