import React from "react";
import Section from "./tags/Section";
import { Separator } from "./ui/separator";

const ScheduleCard = (): React.ReactElement => {
  return (
    <>
      <Section className="flex justify-between">
        <span className="font-nunito500 text-xl capitalize">Saturday</span>
        <span>:</span>
        <span>08:00 AM - 04:00 PM</span>
      </Section>
      <Separator className="mb-4 !w-[100%] lg:!w-[100%]" />
    </>
  );
};

export default ScheduleCard;
