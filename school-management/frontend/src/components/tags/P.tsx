import { motion } from "framer-motion";
import React from "react";

interface TProps {
  children: React.ReactNode;
  className?: string;
}

const P = ({ children, className }: TProps): React.ReactElement => {
  return (
    <>
      <motion.p className={`${className} tracking-wider`}>{children}</motion.p>
    </>
  );
};

export default P;
