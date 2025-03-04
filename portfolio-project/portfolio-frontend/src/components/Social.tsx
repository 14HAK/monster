import { motion } from "framer-motion";
import React from "react";

interface TSectionProps {
  children?: React.ReactNode;
  className: string;
  link: string;
}

const Social = ({
  children,
  className,
  link,
}: TSectionProps): React.ReactElement => {
  return (
    <>
      <motion.a
        className={`${className} transition-all duration-500 hover:font-bold hover:text-red-400`}
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        {children}
      </motion.a>
    </>
  );
};

export default Social;
