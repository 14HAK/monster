import React from "react";
import { MdOutlineArrowRight } from "react-icons/md";
import H1 from "./tags/H1";
import P from "./tags/P";
import Section from "./tags/Section";
import Span from "./tags/Span";
import { Button } from "./ui/button";

const HeroHead = (): React.ReactElement => {
  return (
    <>
      <Section className="mx-32 grid grid-cols-12 grid-rows-1 items-center justify-center gap-0 transition-all duration-1000 ease-in-out">
        <Section className="col-span-6 grid grid-cols-1 gap-3 px-8 py-16 transition-all duration-1000 ease-in-out">
          <P className="text-md text-fruity-whitepower">
            take your learning to next level.
          </P>
          <H1 className="text-4xl font-extrabold capitalize transition-all duration-1000 ease-in-out">
            the next world changing brake through could come for you!
          </H1>
          <Button className="text-fruity-blacksmooth hover:text-fruity-whitepower mt-8 w-32 bg-white transition-all duration-1000 ease-in-out hover:last:pr-3">
            View course
            <Span className="">
              <MdOutlineArrowRight />
            </Span>
          </Button>
        </Section>
        <Section className="col-span-6"> </Section>
      </Section>
    </>
  );
};

export default HeroHead;
