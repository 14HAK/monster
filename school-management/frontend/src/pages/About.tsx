import Section from "@/components/tags/Section";
import React from "react";

const About = (): React.ReactElement => {
  return (
    <>
      <Section>
        <Section className="grid grid-cols-12 grid-rows-1">
          <Section className="col-span-12 grid grid-cols-12 grid-rows-1 bg-red-600">
            <Section className="col-span-6 bg-red-600">About1</Section>
            <Section className="col-span-6 bg-blue-600">About1</Section>
          </Section>
          <Section className="col-span-12 grid grid-cols-12 grid-rows-1 bg-blue-600">
            <Section className="col-span-6 bg-blue-600">About1</Section>
            <Section className="col-span-6 bg-red-600">About1</Section>
          </Section>
        </Section>

        <Section className="col-span-12 grid grid-cols-12 grid-rows-1 bg-blue-600">
          <Section className="col-span-12 bg-green-600">About2</Section>
          <Section className="col-span-12 bg-violet-600">About2</Section>
        </Section>

        <Section className="col-span-12 grid grid-cols-12 grid-rows-1 bg-blue-600">
          <Section className="col-span-12 bg-red-600">About3</Section>
          <Section className="col-span-12 bg-yellow-600">About3</Section>
          <Section className="col-span-12 bg-slate-600">About3</Section>
        </Section>

        <Section className="col-span-12 grid grid-cols-12 grid-rows-1 bg-blue-600">
          <Section className="col-span-12 bg-orange-600">About2</Section>
          <Section className="col-span-12 bg-pink-600">About2</Section>
        </Section>

        <Section className="col-span-12 grid grid-cols-12 grid-rows-1 bg-blue-600">
          <Section className="col-span-6 bg-yellow-600">About2</Section>
          <Section className="col-span-6 bg-blue-600">About2</Section>
        </Section>
      </Section>
    </>
  );
};

export default About;
