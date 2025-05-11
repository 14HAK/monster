import H1 from "@/components/tags/H1";
import Image from "@/components/tags/Image";
import Section from "@/components/tags/Section";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

const image =
  "https://images.contentstack.io/v3/assets/blt37c70560052acd4f/blt0ddf908b594bfcec/5e12ca6099f6f64041a2bde6/iStock-530772108.jpg?auto=webp&format=pjpg&quality=80&width=1200&height=727&fit=crop";

const Home = (): React.ReactElement => {
  return (
    <>
      <Section className="">
        <Section className="grid grid-cols-12 grid-rows-1 items-center gap-2 bg-slate-200 px-16 py-32">
          <Section className="col-span-6 h-auto w-full">
            <Section className="h-auto w-[80%] place-self-center overflow-hidden rounded-sm bg-slate-800 shadow-2xl">
              <Image src={image} alt="students in classroom" />
            </Section>
          </Section>
          <Section className="col-span-6">
            <Card className="font-nunito border-0 bg-transparent text-sm shadow-none">
              <CardHeader className="grid grid-cols-1 gap-8">
                <CardTitle>
                  <H1 className="text-4xl capitalize">
                    when ambition meets opportunity.
                  </H1>
                </CardTitle>
                <CardDescription>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit maiores laudantium quasi quod, nesciunt rerum.
                </CardDescription>
              </CardHeader>
              <CardContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur, nostrum, aliquam fugiat provident ad eveniet cum non
                deserunt harum perspiciatis excepturi laborum magni praesentium
                voluptatum ipsam, animi libero! Aliquid sunt libero sapiente
                fugit similique dicta, recusandae necessitatibus quos expedita
                neque a dolorem, aliquam, ipsa animi. Laborum accusamus tempora
                consectetur debitis.
              </CardContent>
              <CardFooter>
                <Button
                  className="bg-slate-800 text-sm text-slate-200 hover:bg-slate-900"
                  variant="outline"
                >
                  click more
                </Button>
              </CardFooter>
            </Card>
          </Section>
        </Section>

        <Section className="grid grid-cols-12 grid-rows-1">
          <Section className="col-span-6 bg-violet-600">Home1</Section>
          <Section className="col-span-6 bg-yellow-600">Home1</Section>
        </Section>

        <Section className="grid grid-cols-12 grid-rows-1">
          <Section className="col-span-12 bg-green-600">Home2</Section>
        </Section>

        <Section className="grid grid-cols-12 grid-rows-1">
          <Section className="col-span-12 bg-violet-600">Home3</Section>
          <Section className="col-span-12 bg-yellow-600">Home3</Section>
        </Section>

        <Section className="grid grid-cols-12 grid-rows-1">
          <Section className="col-span-12 bg-orange-600">Home4</Section>
          <Section className="col-span-12 bg-pink-600">Home4</Section>
        </Section>

        <Section className="grid grid-cols-12 grid-rows-1">
          <Section className="col-span-5 bg-slate-600">Home5</Section>
          <Section className="col-span-7 bg-green-600">Home5</Section>
        </Section>

        <Section className="grid grid-cols-12 grid-rows-1">
          <Section className="col-span-12 bg-orange-600">Home6</Section>
          <Section className="col-span-12 bg-red-600">Home6</Section>
          <Section className="col-span-12 bg-amber-600">Home6</Section>
        </Section>

        <Section className="grid grid-cols-12 grid-rows-1">
          <Section className="col-span-12 bg-green-600">Home7</Section>
          <Section className="col-span-12 bg-violet-600">Home7</Section>
        </Section>

        <Section className="grid grid-cols-12 grid-rows-1">
          <Section className="col-span-6 bg-pink-600">Home8</Section>
          <Section className="col-span-6 bg-green-600">Home8</Section>
        </Section>
      </Section>
    </>
  );
};

//todo: Section page
export default Home;
