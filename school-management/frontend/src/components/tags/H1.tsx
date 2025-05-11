import { motion } from "framer-motion";
import React from "react";

interface TProps {
  children: React.ReactNode;
  className?: string;
}

const H1 = ({ children, className }: TProps): React.ReactElement => {
  return (
    <>
      <motion.h1 className={`${className} font-semibold tracking-wider`}>
        {children}
      </motion.h1>
    </>
  );
};

export default H1;
