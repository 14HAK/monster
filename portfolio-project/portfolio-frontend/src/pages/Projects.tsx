import React, { lazy, Suspense } from "react";
import SectionCom from "../components/SectionCom";
import { projects } from "../store";
const ProjectCard = lazy(() => import("../components/ProjectCard"));

const Projects = (): React.ReactElement => {
  return (
    <>
      <SectionCom className="mx-8 my-14">
        {projects?.map((project, index) => (
          <Suspense
            fallback={
              <div className="flex items-center justify-center h-screen">
                <div className="p-6 text-4xl font-light rounded-lg text-cyan-500">
                  loading...
                </div>
              </div>
            }
            key={index}
          >
            <ProjectCard project={project} key={index} />
          </Suspense>
        ))}
      </SectionCom>
    </>
  );
};

export default Projects;
