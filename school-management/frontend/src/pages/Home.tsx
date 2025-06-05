import BadgeCard from "@/components/BadgeCard";
import BlogCard from "@/components/BlogCard";
import DiscoverCard from "@/components/DiscoverCard";
import EventBadge from "@/components/EventBadge";
import NoticeMini from "@/components/NoticeMini";
import ScheduleCard from "@/components/ScheduleCard";
import SectionProfile from "@/components/SectionProfile";
import SideSectionComponent from "@/components/SideSectionComponent";
import SideSectionImage from "@/components/SideSectionImage";
import Image from "@/components/tags/Image";
import Section from "@/components/tags/Section";
import Testimonial from "@/components/Testimonial";
import TopCategories from "@/components/TopCategories";
import TopCourses from "@/components/TopCourses";
import React from "react";

import imageTeacher from "@/assets/home/school-teacher.jpg";

const Home = (): React.ReactElement => {
  return (
    <>
      <Section className="">
        <Section className="grid grid-cols-12 grid-rows-1 items-center bg-red-100 px-8 py-16 md:px-16 md:py-24">
          <SideSectionImage />
          <SideSectionComponent />
        </Section>

        <Section className="grid grid-cols-12 grid-rows-1 gap-5 bg-blue-100 px-8 pt-16 lg:px-16 lg:py-24">
          <Section className="col-span-12 py-8">
            <SectionProfile
              content="# top categories"
              title="our areas of study"
              description="apply and join our school, which is you want on your own position"
            />
          </Section>
          <Section className="col-span-12 grid grid-cols-12 gap-5">
            <TopCategories />
            <TopCategories />
            <TopCategories />
            <TopCategories />
          </Section>
        </Section>

        <Section className="xs:hidden grid w-full grid-cols-12 items-center justify-center place-self-center bg-yellow-100 px-16 py-16 lg:flex">
          <BadgeCard />
          <BadgeCard />
          <BadgeCard />
        </Section>

        <Section className="grid grid-cols-12 grid-rows-1 gap-5 bg-teal-100 px-8 py-16 lg:px-16 lg:py-24">
          <Section className="col-span-12 py-8">
            <SectionProfile
              content="# top courses"
              title="find what fascinates you"
              description="chose the most powerful courses and always be on demand"
            />
          </Section>

          <Section className="col-span-12 grid grid-cols-12 gap-5">
            <TopCourses />
            <TopCourses />
            <TopCourses />
            <TopCourses />
          </Section>
        </Section>

        <Section className="grid grid-cols-12 grid-rows-1 gap-3 bg-red-100 py-16 lg:py-24">
          <Section className="col-span-12">
            <DiscoverCard />
          </Section>
        </Section>

        <Section className="xs:gap-5 grid grid-cols-12 items-center justify-center bg-green-100 px-8 py-16 lg:gap-0 lg:px-16 lg:py-24">
          <Section className="xs:col-span-12 lg:col-span-5">
            <Section className="h-[450px] w-[300px] place-self-center overflow-hidden rounded-sm bg-slate-800 shadow-2xl">
              <Image src={imageTeacher} alt="students in classroom " />
            </Section>
          </Section>
          <Section className="grid-raws-12 xs:col-span-12 grid items-start gap-8 lg:col-span-7">
            <Section className="row-span-3 h-full">
              <SectionProfile
                content="# join events"
                title="join upcoming events"
                description="apply and join our school, which is you want on your own position"
              />
            </Section>
            <Section className="row-span-9 grid h-auto gap-3">
              <EventBadge />
              <EventBadge />
              <EventBadge />
            </Section>
          </Section>
        </Section>

        <Section className="mx-auto grid w-full grid-cols-12 bg-pink-100 px-8 py-16 lg:px-16 lg:py-24">
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

        <Section className="mx-auto grid w-full grid-cols-12 bg-amber-50 px-8 py-16 lg:px-16 lg:py-24">
          <Section className="col-span-12 w-full py-8 text-center">
            <SectionProfile
              content="# popular articles"
              title="latest news from blog"
              description="update clarifications about oue system, abilities and consuming our students"
            />
          </Section>
          <Section className="col-span-12 grid grid-cols-12 gap-4">
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </Section>
        </Section>

        <Section className="grid grid-cols-12 grid-rows-1 items-start justify-center gap-8 place-self-center px-8 py-16 lg:gap-24 lg:px-16 lg:py-24">
          <Section className="col-span-12 grid grid-cols-12 gap-4 lg:col-span-6">
            <Section className="col-span-12">
              <SectionProfile
                content=""
                title="opening hours"
                description="school opening schedule "
              />
            </Section>
            <Section className="col-span-12">
              <ScheduleCard />
              <ScheduleCard />
              <ScheduleCard />
              <ScheduleCard />
              <ScheduleCard />
              <ScheduleCard />
              <ScheduleCard />
            </Section>
          </Section>
          <Section className="col-span-12 grid grid-cols-12 gap-4 lg:col-span-6">
            <Section className="col-span-12">
              <SectionProfile
                content=""
                title="notice board"
                description="find latest and newer notice"
              />
            </Section>
            <Section className="col-span-12">
              <NoticeMini />
              <NoticeMini />
            </Section>
          </Section>
        </Section>
      </Section>
    </>
  );
};

export default Home;
