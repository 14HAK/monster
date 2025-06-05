import { ArrowRight, Clock3, MapPinCheck } from "lucide-react";
import React from "react";
import Section from "./tags/Section";
import Span from "./tags/Span";

const EventBadge = (): React.ReactElement => {
  return (
    <>
      <Section className="flex justify-between rounded-r-sm bg-blue-100 font-semibold">
        <Section className="flex flex-2/12 flex-col items-center justify-center rounded-l-sm bg-blue-500 p-2 text-white">
          <Span className="text-xl font-bold capitalize lg:text-3xl">dec</Span>
          <Span className="text-sm font-bold lg:text-xl">26</Span>
        </Section>
        <Section className="flex flex-4/12 items-center justify-center">
          <Span className="pl-1 text-sm capitalize">product design</Span>
        </Section>
        <Section className="flex flex-4/12 items-center justify-center">
          <Clock3 className="text-green-500" />
          <Span className="pl-1 text-xs font-semibold text-slate-400">
            <Span>11:50AM </Span>to
            <Span> 04:00PM</Span>
          </Span>
        </Section>
        <Section className="flex flex-4/12 items-center justify-center">
          <MapPinCheck className="text-green-500" />
          <Span className="pl-1 text-xs font-semibold text-slate-400">
            <Span className="capitalize">Narayanganj, </Span>
            <Span> DHAKA</Span>
          </Span>
        </Section>
        <Section className="flex flex-2/12 items-center justify-center">
          <ArrowRight className="text-blue-500" />
        </Section>
      </Section>
    </>
  );
};

export default EventBadge;
