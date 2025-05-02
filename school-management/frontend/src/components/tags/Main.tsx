import { motion } from "framer-motion";
import React from "react";

interface TProps {
  children: React.ReactNode;
  className?: string;
}

const Main = ({ children, className }: TProps): React.ReactElement => {
  return (
    <>
      <motion.main className={`${className} `}>{children}</motion.main>
    </>
  );
};

export default Main;
