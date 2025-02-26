import React from "react";
import { FaReact } from "react-icons/fa";
import ProjectCardImage from "../assets/images/ProjectCard.jpg";
import Badge from "./Badge";
import Heading from "./Heading";
import Image from "./Image";
import SectionCom from "./SectionCom";
import Text from "./Text";

const ProjectCard = (): React.ReactElement => {
  return (
    <>
      <SectionCom className="grid max-h-full grid-cols-12 p-5 mb-16 duration-700 rounded-md cursor-pointer gap-x-4 hover:bg-slate-600/50">
        <SectionCom className="col-span-3 text-2xl">
          <Image className="w-56 h-24 rounded-md" src={ProjectCardImage} />
        </SectionCom>
        <SectionCom className="col-span-9">
          <Heading className="mb-4 text-2xl">
            Senior Frontend Engineer, Accessibility
          </Heading>
          <Text className="mb-2 text-md">
            Build and maintain critical components used to construct Klaviyo
            {"’"}s frontend, across the whole product. Work closely with
            cross-functional teams, including developers, designers, and product
            managers, to implement and advocate for best practices in web
            accessibility.
          </Text>

          <SectionCom className="flex gap-x-1.5">
            <Badge className="flex cursor-pointer items-center gap-x-0.5 rounded-full bg-teal-400 px-3 py-0 text-center text-sm font-semibold text-slate-700">
              <span>React</span>
              <FaReact />
            </Badge>
            <Badge className="flex cursor-pointer items-center gap-x-0.5 rounded-full bg-red-800 px-3 py-0 text-center text-sm font-semibold text-slate-50">
              <span>React</span>
              <FaReact />
            </Badge>
          </SectionCom>
        </SectionCom>
      </SectionCom>
    </>
  );
};

export default ProjectCard;
