import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

// import SkillsNew from "@/assets/home/new-skills-badgeCard.svg"
import ExpertTeacher from "@/assets/home/expart-teachers-badgeCard.svg";
import Image from "./tags/Image";
// import OnlineDegrees from "@/assets/home/online-degrees-badgeCard.svg";

const BadgeCard = (): React.ReactElement => {
  return (
    <>
      <Card className="col-span-4 grid w-[100%] grid-cols-12 items-center justify-center rounded-none border-none p-5 shadow-sm">
        <CardContent className="col-span-4 flex h-20 w-20 items-center justify-center rounded-full bg-red-200">
          <Image src={ExpertTeacher} alt="" className="!w-16" />
        </CardContent>
        <CardHeader className="col-span-8 px-0">
          <CardTitle className="text-xl font-bold capitalize">
            expert teachers
          </CardTitle>
          <CardDescription className="">
            Lorem ipsum dolor sit amet...
          </CardDescription>
        </CardHeader>
      </Card>
    </>
  );
};

export default BadgeCard;
