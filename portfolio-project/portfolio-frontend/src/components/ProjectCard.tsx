import React, { lazy } from "react";
import { FaLink } from "react-icons/fa";
import { Link } from "react-router-dom";
import { TProjects } from "../types";

const Badge = lazy(() => import("./Badge"));
const Heading = lazy(() => import("./Heading"));
const SectionCom = lazy(() => import("./SectionCom"));
const Span = lazy(() => import("./Span"));
const Text = lazy(() => import("./Text"));
const Image = lazy(() => import("./Image"));

interface ProjectCardProps {
  project: TProjects;
  // other props
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { img, title, description, skills, link } = project;
  return (
    <>
      <SectionCom className="mb-16 grid max-h-full cursor-pointer grid-cols-12 gap-x-4 rounded-md p-8 duration-700 hover:bg-[#ECDCBF]/10">
        <SectionCom className="col-span-3 text-2xl">
          <Image className="w-56 h-24 rounded-md" src={img} />
        </SectionCom>
        <SectionCom className="col-span-9">
          <Heading className="mb-4 text-2xl text-[#F8F2DE] hover:text-red-400 hover:underline">
            <Link
              className="flex content-center justify-start gap-x-0.5"
              to={link}
              target="_blank"
              rel="noreferrer"
            >
              {title}
              <Span className="pl-1 text-red-400">
                <FaLink />
              </Span>
            </Link>
          </Heading>
          <SectionCom className="mb-8 text-xl">
            {description?.map((item, index) => (
              <Text className="mb-2 text-xl capitalize" key={index}>
                {item}{" "}
              </Text>
            ))}
          </SectionCom>

          <SectionCom className="flex gap-x-1.5">
            {skills?.map((skill, index) => (
              <Badge
                className="flex cursor-pointer items-center gap-x-0.5 rounded-full bg-[#ECDCBF] px-3 py-0 text-center text-sm font-semibold text-red-800"
                key={index}
              >
                <span>{skill?.title} </span>
                {<skill.icon />}
              </Badge>
            ))}
          </SectionCom>
        </SectionCom>
      </SectionCom>
    </>
  );
};

export default ProjectCard;
