import { CirclePlus } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import Span from "./tags/Span";
import { Button } from "./ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

const NoticeMini = (): React.ReactElement => {
  return (
    <>
      <Card className="mb-8 block gap-0 border-0 p-0 shadow-none outline-0">
        <CardHeader className="px-0">
          <CardTitle className="line-clamp-2 w-[100%] text-sm font-semibold capitalize md:text-xl">
            the importance of interactive creativity. knowledge gain, fail or
            success. try and try.
          </CardTitle>
          <CardDescription className="text-semibold text-xs text-slate-500 capitalize">
            published: 22, Jun. 2021
          </CardDescription>
        </CardHeader>

        <Button
          className="mt-2 !px-0"
          onClick={() => console.log("Hello World!")}
          variant={"null"}
        >
          <Link
            to={"/"}
            className="fade-in flex items-center justify-start gap-x-2 !px-0 transition-colors duration-200 hover:text-teal-500"
          >
            <CirclePlus className="text-sm font-bold lg:text-xl" />
            <Span>read more...</Span>
          </Link>
        </Button>
      </Card>
    </>
  );
};

export default NoticeMini;
