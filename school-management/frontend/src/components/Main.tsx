import { motion } from "framer-motion";
import React from "react";

interface TSectionProps {
  children: React.ReactNode;
  className: string;
}

const Main = ({ children, className }: TSectionProps): React.ReactElement => {
  return (
    <>
      <motion.section className={`${className} `}>{children}</motion.section>
    </>
  );
};

export default Main;
