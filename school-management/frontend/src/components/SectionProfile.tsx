import React from "react";
import Section from "./tags/Section";
import { CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

interface Tprops {
  content: string;
  title: string;
  description: string;
}

const SectionProfile = ({
  content,
  title,
  description,
}: Tprops): React.ReactElement => {
  return (
    <>
      <Section className="">
        <CardContent className="px-0 uppercase opacity-40">
          {content}
        </CardContent>
        <CardHeader className="grid grid-cols-1 gap-2 px-0">
          <CardTitle className="text-2xl capitalize lg:text-4xl">
            {title}
          </CardTitle>
          <CardDescription className="font-nunito600 text-sm capitalize lg:text-xl">
            {description}
          </CardDescription>
        </CardHeader>
      </Section>
    </>
  );
};

export default SectionProfile;
