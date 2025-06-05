import React from "react";
import Image from "./tags/Image";
import Section from "./tags/Section";
import Span from "./tags/Span";
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

import { FaStar } from "react-icons/fa6";

import cardImage from "@/assets/home/school.webp";

const TopCourses = (): React.ReactElement => {
  return (
    <>
      <Card className="col-span-12 overflow-hidden border-0 pt-0 shadow-none lg:col-span-3">
        <CardContent className="p-0">
          <Image src={cardImage} alt="class based students" />
        </CardContent>
        <CardHeader className="px-0">
          <CardTitle className="text-sm font-bold capitalize 2xl:text-xl">
            making music with other peoples
          </CardTitle>
          <CardDescription className="text-sm xl:text-xl">
            {"(03 - 04)"} years
          </CardDescription>
        </CardHeader>
        <CardContent className="grid w-full grid-cols-12 items-center px-0 text-sm">
          <Section className="col-span-5">
            <Badge className="" variant="outline">
              405/5{" "}
              <Span className="flex items-center justify-center pl-5 text-xl font-extrabold text-yellow-400 xl:text-2xl">
                <Span>
                  <FaStar />
                </Span>
              </Span>
            </Badge>
          </Section>
          <Section className="col-span-5">
            <Span className="text-sm font-bold text-green-800 xl:text-xl">
              $
            </Span>{" "}
            496.00
          </Section>
        </CardContent>
      </Card>
    </>
  );
};

export default TopCourses;
