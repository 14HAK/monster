import { motion } from "framer-motion";
import React from "react";

interface TProps {
  children: React.ReactNode;
  className?: string;
}

const Span = ({ children, className }: TProps): React.ReactElement => {
  return (
    <>
      <motion.span className={`${className} `}>{children}</motion.span>
    </>
  );
};

export default Span;
