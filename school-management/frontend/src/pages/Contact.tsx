import Section from "@/components/tags/Section";
import React from "react";

const Contact = (): React.ReactElement => {
  return (
    <>
      <Section>
        <Section className="grid grid-cols-12 grid-rows-1">
          <Section className="col-span-6 grid grid-cols-12 grid-rows-1 bg-red-600">
            <Section className="col-span-12 bg-green-600">Contact1</Section>
            <Section className="col-span-12 bg-orange-600">Contact1</Section>
          </Section>
          <Section className="col-span-6 bg-blue-600">Contact1</Section>
        </Section>

        <Section className="grid grid-cols-12 grid-rows-1">
          <Section className="col-span-6 bg-teal-600">Contact2</Section>
          <Section className="col-span-6 bg-slate-600">Contact2</Section>
        </Section>
      </Section>
    </>
  );
};

export default Contact;
