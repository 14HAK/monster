import React, { lazy, Suspense } from "react";
import SectionCom from "../components/SectionCom";
import { experiences } from "../store/index.tsx";
const ExperienceCard = lazy(() => import("../components/ExperienceCard"));

const Experience = (): React.ReactElement => {
  return (
    <>
      <SectionCom className="flex flex-col items-center mx-8 my-14">
        {experiences?.map((experience, index) => (
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
            <ExperienceCard experience={experience} key={index} />
          </Suspense>
        ))}
      </SectionCom>
    </>
  );
};

export default Experience;
