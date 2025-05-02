import { motion } from "framer-motion";
import React from "react";

interface TProps {
  children: React.ReactNode;
  className?: string;
  src: string;
  alt: string;
}

const Image = ({
  children,
  className,
  src,
  alt,
}: TProps): React.ReactElement => {
  return (
    <>
      <motion.img
        src={`${src}`}
        alt={`${alt}`}
        className={`${className} h-full w-full object-cover`}
      >
        {children}
      </motion.img>
    </>
  );
};

export default Image;

//todo: image aspect ration with tailwind css:
// // html:
// <div className="w-48 aspect-square">
//   <img
//     src="/your-image.jpg"
//     alt="Square image"
//     className="object-cover w-full h-full"
//   />
// </div>;

// // tailwind.config.js
// module.exports = {
//   theme: {
//     extend: {},
//   },
//   plugins: [
//     require('@tailwindcss/aspect-ratio'),
//   ],
// };
