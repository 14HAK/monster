import React from "react";
import ProjectCard from "../components/ProjectCard";
import SectionCom from "../components/SectionCom";

const Projects = (): React.ReactElement => {
  return (
    <>
      <SectionCom className="mx-8 my-14">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </SectionCom>
    </>
  );
};

export default Projects;
