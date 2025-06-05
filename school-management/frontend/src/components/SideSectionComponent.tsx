import { CheckCheck, Phone } from "lucide-react";
import React from "react";
import Section from "./tags/Section";
import Span from "./tags/Span";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

const SideSectionComponent = (): React.ReactElement => {
  return (
    <>
      <Section className="col-span-12 grid gap-5 lg:col-span-6">
        <Card className="border-0 bg-transparent shadow-none">
          <CardHeader className="grid grid-cols-1">
            <CardTitle className="font-body text-3xl capitalize">
              when ambition meets opportunity.
            </CardTitle>
            <CardDescription className="font-body pt-2 text-sm text-slate-500 xl:text-xl">
              explore new skills, deepen exiting positions, and get lost
              creativity what you find just surprise and inspire you. with so
              mush explore is not exiting passions and get lost in creativity.
            </CardDescription>
          </CardHeader>
          <CardContent className="font-body">
            <ul className="flex flex-col items-start justify-center gap-3 capitalize">
              <li className="flex space-x-2">
                <CheckCheck className="text-xl font-bold text-red-500 xl:text-2xl" />
                <Span className="text-body text-sm xl:text-xl">
                  up skill your organization
                </Span>
              </li>
              <li className="flex space-x-2">
                <CheckCheck className="text-xl font-bold text-red-500 xl:text-2xl" />
                <Span className="text-body text-sm xl:text-xl">
                  access more than 100+ courses
                </Span>
              </li>
              <li className="flex space-x-2">
                <CheckCheck className="text-xl font-bold text-red-500 xl:text-2xl" />
                <Span className="text-body text-sm xl:text-xl">
                  learn the latest skills
                </Span>
              </li>

              <li className="flex space-x-2 pt-3">
                <Phone className="text-2xl font-bold text-blue-500 xl:text-3xl" />
                <Span className="text-body font-body text-xl xl:text-2xl">
                  +880-1325699748
                </Span>
              </li>
            </ul>
          </CardContent>
          <CardFooter className="">
            <Button className="font-body px-5 py-2 text-slate-200 capitalize hover:bg-orange-500">
              click more
            </Button>
          </CardFooter>
        </Card>
      </Section>
    </>
  );
};

export default SideSectionComponent;
