import { motion } from "framer-motion";
import React from "react";

interface TSectionProps {
  children: React.ReactNode;
  className: string;
}

const Span = ({ children, className }: TSectionProps): React.ReactElement => {
  return (
    <>
      <motion.span className={`${className}`}>{children}</motion.span>
    </>
  );
};

export default Span;
