import React from "react";
import SectionCom from "../components/SectionCom";
import Span from "../components/Span";
import Text from "../components/Text";

const About = (): React.ReactElement => {
  return (
    <>
      <SectionCom className="flex flex-col items-center mx-8 text-xl my-14">
        <Text className="mb-8">
          I am a web developer{" "}
          <Span className="text-red-400">( MERN FULLSTACK )</Span>. I have good
          skills on MERN stack. I can say that I am an intermediate level
          developer. However, it is true that I did not learn programming very
          quickly in this sector because I was stuck in tutorial hell. But when
          I understood, I learned it quickly{" "}
          <Span className="text-red-400">( in about six months )</Span>.
        </Text>
        <Text className="mb-8">
          I am interested in learning about new technologies, so I do not need
          much time to learn any technology. And if there is proper guidance, it
          is not a problem
          <Span className="text-red-400">______________________________</Span>.
          I know for sure that I can maintain my position in a big place,
          <Span className="text-red-400"> InshaAllah</Span>, I will try to do
          better than that, because I want to be a{" "}
          <Span className="text-red-400"> programming bug</Span>.
        </Text>
        <Text className="mb-8">
          For now, I have good skills in visual stdio code, html, css,
          javascript, github, git, typescript, react, react-router-dom,
          react-form, tailwind, node, express, mongoDB, mongoose, next.js and
          <Span className="text-red-400"> many more technologies</Span>.
        </Text>
        <Text className="mb-10">
          In my spare time, I usually
          <Span className="text-red-400"> read</Span>, hang out with my
          <Span className="text-red-400"> friends</Span>, and like to attend
          <Span className="text-red-400"> social activities</Span>. I also love
          <Span className="text-red-400"> traveling</Span> and
          <Span className="text-red-400"> learning</Span> new things.
        </Text>
      </SectionCom>
    </>
  );
};

export default About;
