import { CirclePlus, CircleUser } from "lucide-react";
import React from "react";
import Vote from "./Vote";
import H1 from "./tags/H1";
import P from "./tags/P";
import Section from "./tags/Section";
import Span from "./tags/Span";
import { Button } from "./ui/button";

const DiscoverCard = (): React.ReactElement => {
  return (
    <>
      {/* <!-- discover section --> */}
      <Section className="bg-opacity-90 grid grid-cols-12 bg-blue-950 bg-[url('/pattern.svg')] bg-cover bg-center bg-no-repeat py-16 text-white bg-blend-overlay lg:py-24">
        <Section className="col-span-12 flex flex-col items-center justify-center gap-2">
          <H1 className="text-3xl font-bold capitalize lg:text-5xl">
            what will you discover?
          </H1>
          <P className="w-[80%] pt-3 text-sm font-bold lg:w-[40%]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
            officia cupiditate doloribus dicta architecto nisi alias vero
            consequuntur magni sapiente?
          </P>
          <Section className="flex gap-3 pt-8">
            <Button className="flex cursor-pointer items-center justify-center gap-1.5 rounded-sm bg-blue-300 px-5 py-2 text-sm font-bold text-slate-800 capitalize transition-all duration-500 hover:bg-amber-400">
              <Span>
                <CirclePlus />
              </Span>
              <Span>view course</Span>
            </Button>
            <Button className="flex cursor-pointer items-center justify-center gap-1.5 rounded-sm bg-red-300 px-5 py-2 text-sm font-bold text-slate-800 capitalize transition-all duration-500 hover:bg-amber-400">
              <Span>
                <CircleUser />
              </Span>
              <Span>contact us</Span>
            </Button>
          </Section>
        </Section>
        <Section className="col-span-12 h-5">
          <Section className="lg-w[40%] relative top-[2rem] mx-auto flex w-[90%] justify-evenly rounded-sm bg-green-600 p-5 font-bold text-white xl:top-[4rem]">
            <Vote />
            <Vote />
            <Vote />
            <Vote />
          </Section>
        </Section>
      </Section>
    </>
  );
};

export default DiscoverCard;
