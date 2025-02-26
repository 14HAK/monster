import React from "react";
import { FaReact } from "react-icons/fa";
import Badge from "./Badge";
import Heading from "./Heading";
import SectionCom from "./SectionCom";
import Text from "./Text";

const ExperienceCard = (): React.ReactElement => {
  return (
    <>
      <SectionCom className="mb-16 grid max-h-full grid-cols-12 gap-x-4">
        <SectionCom className="col-span-3 text-2xl">2018 - 2024</SectionCom>
        <SectionCom className="col-span-9">
          <Heading className="mb-4 text-2xl">
            Senior Frontend Engineer, Accessibility
          </Heading>
          <Text className="text-md mb-2">
            Build and maintain critical components used to construct Klaviyo’s
            frontend, across the whole product. Work closely with
            cross-functional teams, including developers, designers, and product
            managers, to implement and advocate for best practices in web
            accessibility.
          </Text>

          <SectionCom className="flex gap-x-1.5">
            <Badge className="flex cursor-pointer items-center gap-x-0.5 rounded-full bg-teal-400 px-3 py-0 text-center text-sm font-semibold text-slate-700">
              <span>React</span>
              <FaReact />
            </Badge>
            <Badge className="flex cursor-pointer items-center gap-x-0.5 rounded-full bg-teal-400 px-3 py-0 text-center text-sm font-semibold text-slate-700">
              <span>React</span>
              <FaReact />
            </Badge>
          </SectionCom>
        </SectionCom>
      </SectionCom>
    </>
  );
};

export default ExperienceCard;
