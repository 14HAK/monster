import React from "react";
import { FaLink, FaReact } from "react-icons/fa";
import ProjectCardImage from "../assets/images/ProjectCard.jpg";
import Badge from "./Badge";
import Heading from "./Heading";
import Image from "./Image";
import SectionCom from "./SectionCom";
import Span from "./Span";
import Text from "./Text";

const ProjectCard = (): React.ReactElement => {
  return (
    <>
      <SectionCom className="mb-16 grid max-h-full cursor-pointer grid-cols-12 gap-x-4 rounded-md p-8 duration-700 hover:bg-[#ECDCBF]/10">
        <SectionCom className="col-span-3 text-2xl">
          <Image className="h-24 w-56 rounded-md" src={ProjectCardImage} />
        </SectionCom>
        <SectionCom className="col-span-9">
          <Heading className="mb-4 text-2xl text-[#F8F2DE] hover:text-red-400 hover:underline">
            <a
              className="flex content-center justify-start gap-x-0.5"
              href="https://www.youtube.com"
              target="_blank"
              rel="noreferrer"
            >
              Senior Frontend Engineer, Accessibility
              <Span className="pl-1 text-red-400">
                <FaLink />
              </Span>
            </a>
          </Heading>
          <SectionCom className="mb-8 text-xl">
            <Text className="">
              Build and maintain critical components used to construct Klaviyo
              {"’"}s frontend, across the whole product. Work closely with
              cross-functional teams, including developers, designers, and
              product managers, to implement and advocate for best practices in
              web accessibility.
            </Text>
          </SectionCom>

          <SectionCom className="flex gap-x-1.5">
            <Badge className="flex cursor-pointer items-center gap-x-0.5 rounded-full bg-[#ECDCBF] px-3 py-0 text-center text-sm font-semibold text-red-800">
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
