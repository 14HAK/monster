import TeacherAvatar from "@/assets/home/avatar.jpg";
import Teacher from "@/assets/home/school-teacher.jpg";
import Students from "@/assets/home/school.webp";
import DiscoverCard from "@/components/DiscoverCard";
import SectionProfile from "@/components/SectionProfile";
import SideSectionImage from "@/components/SideSectionImage";
import H1 from "@/components/tags/H1";
import Image from "@/components/tags/Image";
import P from "@/components/tags/P";
import Section from "@/components/tags/Section";
import Span from "@/components/tags/Span";
import TeachersBanner from "@/components/TeachersBanner";
import Testimonial from "@/components/Testimonial";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { CircleAlert } from "lucide-react";
import React from "react";

const About = (): React.ReactElement => {
  return (
    <>
      <Section className="scroll-smooth">
        <Section className="col-span-6 grid grid-cols-12 grid-rows-1 gap-4 bg-slate-100 px-8 py-16 lg:px-16 lg:py-24">
          <Section className="col-span-12 grid grid-cols-12 grid-rows-12 items-center justify-start gap-2 lg:col-span-6">
            <Section className="col-span-7 col-start-0 row-span-5 row-start-0 overflow-clip rounded-sm bg-teal-200 lg:col-start-2 lg:row-start-3">
              <Image src={Students} alt="" />
            </Section>
            <Section className="col-span-6 col-start-0 row-span-3 row-start-2 overflow-clip rounded-sm bg-pink-200 lg:col-span-3 lg:col-start-6 lg:row-start-8">
              <Image src={Students} alt="" />
            </Section>
            <Section className="col-span-12 col-start-8 row-span-10 row-start-2 w-[100%] overflow-clip rounded-sm bg-green-200 lg:col-span-10 lg:col-start-9">
              <Image src={Teacher} alt="" className="!h-96" />
            </Section>
          </Section>

          <Section className="col-span-12 grid grid-cols-12 items-center justify-center p-5 lg:col-span-6">
            <Section className="col-span-12 mb-4 flex flex-col gap-4 lg:gap-8">
              <H1 className="text-2xl font-semibold capitalize lg:text-5xl">
                when ambitions meets opportunity
              </H1>
              <P className="text-lg font-light">
                explore new skills, deepen exiting passions, and get lost
                creativity what you find just might surprise and inspire you.
                with so much explore is not exiting passions, ad get lost in
                creativity&apos;s
              </P>
            </Section>

            <Section className="col-span-12 grid grid-cols-12 self-start">
              <Section className="col-span-2">
                <Avatar className="z-0 size-14 overflow-hidden rounded-full border-2 bg-white">
                  <AvatarImage src={TeacherAvatar} />
                </Avatar>
              </Section>
              <Section className="col-span-8 flex flex-col gap-y-2">
                <H1 className="text-sm font-semibold capitalize">
                  when ambitions meets opportunity
                </H1>
                <P className="text-sm font-light">
                  explore new skills, deepen exiting passions, and get lost
                  creativity what you find just might...
                </P>
              </Section>
            </Section>
          </Section>
        </Section>

        <Section className="col-span-12 grid grid-cols-12 grid-rows-1 items-start justify-center bg-red-100 px-8 py-8 lg:px-16 lg:py-24">
          <Section className="col-span-12 grid grid-rows-12 items-center justify-center gap-4 lg:col-span-6">
            <Section className="row-span-6 lg:row-span-3">
              <H1 className="text-3xl font-semibold capitalize lg:text-5xl">
                our education system works for you
              </H1>
            </Section>
            <Section className="row-span-6 lg:row-span-3">
              <P className="font-nunito400 text-sm">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
                minima debitis deleniti voluptatem ad, inventore explicabo est
                pariatur nobis delectus eaque omnis optio blanditiis mollitia
                obcaecati ipsa aspernatur ullam illo vel, sequi dicta officia!
                Id.
              </P>
            </Section>
            <Section className="row-span-6 lg:row-span-3">
              <P className="font-nunito400 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                deleniti delectus quod excepturi ipsa dolor, sequi laboriosam
                minima cum nobis aspernatur ea eaque tempore iste?
              </P>
            </Section>
          </Section>
          <Section className="col-span-12 mt-4 lg:col-span-6 lg:mt-0">
            <SideSectionImage />
          </Section>
        </Section>

        <Section className="grid grid-cols-12 grid-rows-1 gap-3 bg-teal-100 py-16 lg:py-24">
          <Section className="col-span-12">
            <DiscoverCard />
          </Section>
        </Section>

        <Section className="mx-auto grid w-full grid-cols-12 bg-yellow-100 px-8 py-16 lg:px-16 lg:py-24">
          <Section className="col-span-12 w-full py-8 text-left lg:text-center">
            <SectionProfile
              content="# parents testimonials"
              title="what parents say about us"
              description=""
            />
          </Section>
          <Section className="col-span-12">
            <Testimonial />
          </Section>
        </Section>

        <Section className="grid grid-cols-12 grid-rows-1 gap-4 bg-green-100 px-8 py-16 lg:px-16 lg:py-24">
          <Section className="col-span-12">
            <SectionProfile
              content="# meet your teachers"
              title="our honorable teachers"
              description="chose the most powerful courses, you like!"
            />
          </Section>
          <Section className="col-span-12 grid grid-cols-12 gap-8 lg:gap-4">
            <TeachersBanner />
            <TeachersBanner />
            <TeachersBanner />
            <TeachersBanner />
          </Section>
        </Section>

        <Section className="grid grid-cols-12 grid-rows-1 items-center justify-center gap-8 bg-purple-100 px-8 py-16 align-middle lg:px-16 lg:py-24">
          <Section className="col-span-12 flex flex-col gap-4 lg:col-span-6">
            <Section className="">
              <H1 className="text-3xl font-bold capitalize">
                online admission going on! session 03/2025
              </H1>
            </Section>
            <Section className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              voluptatum sapiente recusandae nam delectus dolor in culpa dicta
              ab doloremque!
            </Section>
            <Section className="mt-8">
              <Button className="flex cursor-pointer items-center justify-center gap-1.5 rounded-sm bg-transparent px-5 py-2 text-sm font-bold text-blue-800 capitalize ring-2 ring-blue-800 transition-all duration-500 hover:bg-transparent hover:text-red-800 hover:ring-red-500">
                <Span>
                  <CircleAlert />
                </Span>
                <Span>online admission</Span>
              </Button>
            </Section>
          </Section>
          <Section className="col-span-12 lg:col-span-6">
            <Accordion
              type="single"
              collapsible
              className="flex w-full flex-col gap-0.5"
              defaultValue="item-1"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="rounded-t-sm rounded-b-none bg-blue-100 px-4 py-2">
                  are your product for commercial use?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 rounded-b-sm bg-red-100 p-4 text-balance">
                  <P className="px-8">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Deserunt eius qui dignissimos? Natus nulla harum
                    repudiandae, facilis, molestias praesentium fugiat vitae
                    nesciunt saepe mollitia enim.
                  </P>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="rounded-t-sm rounded-b-none bg-blue-100 px-4 py-2">
                  are your product for commercial use?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 rounded-b-sm bg-red-100 p-4 text-balance">
                  <P className="px-8">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Rerum, fugit libero, voluptas impedit beatae, possimus ab
                    eligendi adipisci repellat animi facere perferendis amet
                    vero culpa.
                  </P>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="rounded-t-sm rounded-b-none bg-blue-100 px-4 py-2">
                  are your product for commercial use?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 rounded-b-sm bg-red-100 p-4 text-balance">
                  <P className="px-8">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ullam est, quos voluptatibus, quia quibusdam sequi, vero ut
                    magnam quidem nostrum iste. Ea minima alias perspiciatis
                    quia non laudantium delectus aperiam.
                  </P>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="rounded-t-sm rounded-b-none bg-blue-100 px-4 py-2">
                  are your product for commercial use?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 rounded-b-sm bg-red-100 p-4 text-balance">
                  <P className="px-8">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Eligendi esse porro enim. Nam, ea nihil?
                  </P>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Section>
        </Section>
      </Section>
    </>
  );
};

export default About;
