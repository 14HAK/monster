import React from "react";
import ExperienceCard from "../components/ExperienceCard";
import SectionCom from "../components/SectionCom";

const Experience = (): React.ReactElement => {
  return (
    <>
      <SectionCom className="mx-8 my-14 flex flex-col items-center">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </SectionCom>
    </>
  );
};

export default Experience;
