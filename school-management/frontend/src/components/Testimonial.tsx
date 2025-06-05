import ImageAvatar from "@/assets/home/avatar.jpg";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Dot, Star } from "lucide-react";
import React from "react";

const Testimonial = (): React.ReactElement => {
  return (
    <>
      <section className="isolate overflow-hidden">
        <div className="mx-auto w-full lg:max-w-4xl">
          {/* Rating Stars */}
          <div className="flex space-x-1.5">
            {Array.from({ length: 4 }).map((_, i) => (
              <span key={i}>
                <Star className="fill-blue-500 stroke-0" />
              </span>
            ))}
            <span>
              <Star className="fill-blue-300 stroke-0" />
            </span>
          </div>
          <figure className="pt-4">
            <blockquote className="text-xl font-semibold">
              <p>
                “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                expedita voluptas culpa sapiente alias molestiae. Numquam
                corrupti in laborum sed rerum et corporis.”
              </p>
            </blockquote>
            <figcaption className="mt-4 flex flex-col">
              <div className="*:ring-background z-0 flex items-center -space-x-6 *:ring-3">
                <Avatar className="z-0 size-10 overflow-hidden rounded-full border-2 bg-white">
                  <AvatarImage src={ImageAvatar} />
                </Avatar>
                <Avatar className="z-10 size-12 overflow-hidden rounded-full border-2 bg-white">
                  <AvatarImage src={ImageAvatar} />
                </Avatar>
                <Avatar className="z-20 size-16 overflow-hidden rounded-full border-2 bg-white">
                  <AvatarImage src={ImageAvatar} />
                </Avatar>
              </div>
              <div className="text-card mt-4 flex">
                <div className="font-semibold text-gray-900 capitalize">
                  Judith Black
                </div>
                <Dot className="font-semibold text-gray-900" />
                <div className="text-gray-600 uppercase">
                  CEO of Workstation
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
