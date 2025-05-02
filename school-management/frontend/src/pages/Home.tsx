import H1 from "@/components/tags/H1";
import P from "@/components/tags/P";
import Section from "@/components/tags/Section";
import { Button } from "@/components/ui/button";
import React from "react";

const Home = (): React.ReactElement => {
  return (
    <>
      <Section className="">
        <H1 className="text-fruity-greenlight w-full text-5xl">HOME PAGE</H1>
        <P className="font-nunito200 text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
          obcaecati tempora laudantium distinctio error vitae explicabo incidunt
          officia debitis aliquam inventore esse consequatur repellat rerum
          facilis maxime ullam, eaque voluptatum.
        </P>
        <section className="bg-fruity-greenlight">
          <H1 className="text-dm bg-fruity-yellowdark text-7xl font-bold">
            Welcome to My Site
          </H1>

          <Button variant={"secondary"} size={"lg"}>
            Get Started
          </Button>
        </section>
      </Section>
    </>
  );
};

//todo: home page
export default Home;
