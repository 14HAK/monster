import React from "react";
import H1 from "./tags/H1";
import P from "./tags/P";
import Section from "./tags/Section";
import { Button } from "./ui/button";

const HeroAll = (): React.ReactElement => {
  return (
    <>
      <Section className="mx-32 grid grid-cols-12 grid-rows-1 items-center justify-center gap-0 transition-all duration-1000 ease-in-out">
        <Section className="text-fruity-whitepower col-span-6 px-8 py-8 transition-all duration-1000 ease-in-out">
            <H1 className="text-5xl font-extrabold capitalize">Contact</H1>
          </Section>
          <Section className="text-fruity-whitepower col-span-6 px-8 py-8 text-lg transition-all duration-1000 ease-in-out">
            location this page: suppose: /contact
          </Section>
      </Section>
    </>
  );
};

export default HeroAll;
