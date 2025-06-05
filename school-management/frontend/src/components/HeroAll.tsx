import React from "react";
import H1 from "./tags/H1";
import Section from "./tags/Section";

const HeroAll = (): React.ReactElement => {
  return (
    <>
      <Section className="mx-8 grid grid-cols-12 grid-rows-1 items-center justify-center gap-0 transition-all duration-1000 ease-in-out md:mx-24 lg:mx-32">
        <Section className="text-fruity-whitepower col-span-6 px-8 py-8 transition-all duration-1000 ease-in-out">
          <H1 className="text-2xl font-extrabold capitalize md:text-5xl 2xl:text-6xl">
            Contact
          </H1>
        </Section>
        <Section className="text-fruity-whitepower col-span-6 px-8 py-8 text-sm transition-all duration-1000 ease-in-out lg:text-xl">
          /dashboard/student
        </Section>
      </Section>
    </>
  );
};

export default HeroAll;
