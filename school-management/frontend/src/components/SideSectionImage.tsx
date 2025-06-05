import React from "react";
import Image from "./tags/Image";
import Section from "./tags/Section";

import image from "@/assets/home/school.webp";

const SideSectionImage = (): React.ReactElement => {
  return (
    <>
      <Section className="col-span-12 h-auto w-full xl:col-span-6">
        <Section className="h-auto w-full place-self-center overflow-hidden rounded-sm bg-slate-800 shadow-2xl xl:w-[90%]">
          <Image src={image} alt="students in classroom" />
        </Section>
      </Section>
    </>
  );
};

export default SideSectionImage;
