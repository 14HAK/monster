import { motion } from "framer-motion";
import React from "react";

interface TSectionProps {
  children: React.ReactNode;
  className: string;
}

const Text = ({ children, className }: TSectionProps): React.ReactElement => {
  return (
    <>
      <motion.p className={`${className}`}>{children}</motion.p>
    </>
  );
};

export default Text;
