import React from "react";
import Image from "./tags/Image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

import cardImage from "@/assets/home/school.webp";

const TopCategories = (): React.ReactElement => {
  return (
    <>
      <Card className="col-span-12 gap-4 overflow-hidden border-0 pt-0 shadow-xs lg:col-span-3 lg:shadow-lg">
        <CardContent className="p-0">
          <Image src={cardImage} alt="class based students" />
        </CardContent>
        <CardHeader className="">
          <CardTitle className="font-nunito900 text-xl capitalize 2xl:text-2xl">
            P.K Program
          </CardTitle>
          <CardDescription className="text-sm 2xl:text-xl">
            {"(03 - 04)"} years
          </CardDescription>
        </CardHeader>
        <CardContent className="w-full text-sm 2xl:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </CardContent>
      </Card>
    </>
  );
};

export default TopCategories;
