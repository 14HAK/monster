import React from "react";
import Badge from "../components/Badge";
import SectionCom from "../components/SectionCom";
import { skills } from "../store";

const Skills = (): React.ReactElement => {
  return (
    <>
      <SectionCom className="flex flex-col items-center mx-8 text-xl my-14">
        <SectionCom className="flex flex-wrap gap-4 p-8">
          {skills?.map((skill, index) => (
            <Badge
              className="flex cursor-pointer items-center gap-2 rounded-full bg-[#ECDCBF] px-3 py-2 text-center text-sm font-semibold text-red-800"
              key={index}
            >
              <span>{skill?.title} </span>
              {<skill.icon className="text-2xl" />}
            </Badge>
          ))}
        </SectionCom>
      </SectionCom>
    </>
  );
};

export default Skills;
