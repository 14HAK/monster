import { Plus } from "lucide-react";
import React from "react";
import H1 from "./tags/H1";
import P from "./tags/P";
import Section from "./tags/Section";
import Span from "./tags/Span";

const Vote = (): React.ReactElement => {
  return (
    <>
      <Section className="">
        <H1 className="flex items-center gap-2 text-sm font-semibold lg:text-3xl">
          649
          <Span>
            <Plus />
          </Span>
        </H1>
        <P className="text-xs font-semibold md:text-sm xl:text-xl">courses</P>
      </Section>
    </>
  );
};

export default Vote;
