import { motion } from "framer-motion";
import React from "react";

interface TProps {
  children: React.ReactNode;
  className?: string;
}

const Section = ({ children, className }: TProps): React.ReactElement => {
  return (
    <>
      <motion.section className={`${className}`}>{children}</motion.section>
    </>
  );
};

export default Section;
