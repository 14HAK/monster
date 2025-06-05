import { CirclePlus } from "lucide-react";
import React from "react";
import Image from "./tags/Image";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

import cardImage from "@/assets/home/school.webp";

const BlogCard = (): React.ReactElement => {
  return (
    <>
      <Card className="col-span-12 overflow-hidden border-0 pt-0 shadow-none lg:col-span-3">
        <CardContent className="p-0">
          <Image
            className="rounded-lg"
            src={cardImage}
            alt="class based students"
          />
        </CardContent>
        <CardHeader className="">
          <CardDescription className="!-mt-2 text-xs capitalize">
            {"february 13, 2022 / "}class: 4
          </CardDescription>
          <CardTitle className="!pt-4 text-sm font-bold capitalize">
            find the right learning path for your world group...
          </CardTitle>
        </CardHeader>

        <Button
          className="ml-2 flex w-32 cursor-pointer justify-start gap-2 text-sm text-blue-400 hover:text-blue-600"
          onClick={() => console.log("Hello World!")}
          variant={null}
        >
          <CirclePlus className="text-xl" />
          <p>read more...</p>
        </Button>
      </Card>
    </>
  );
};

export default BlogCard;
