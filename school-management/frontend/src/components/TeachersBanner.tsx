import React from "react";
import SideSectionImage from "./SideSectionImage";
import H1 from "./tags/H1";
import P from "./tags/P";
import Section from "./tags/Section";

const TeachersBanner = (): React.ReactElement => {
  return (
    <>
      <Section className="col-span-12 flex flex-col justify-center lg:col-span-3">
        <SideSectionImage />
        <H1 className="pt-2 pl-4 text-xl capitalize">mohammad younus</H1>
        <P className="pt-2 pl-4 capitalize">biology</P>
      </Section>
    </>
  );
};

export default TeachersBanner;
