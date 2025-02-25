import { motion } from "framer-motion";
import React from "react";

interface TSectionProps {
  children: React.ReactNode;
  className: string;
}

const Heading = ({
  children,
  className,
}: TSectionProps): React.ReactElement => {
  return (
    <>
      <motion.h1 className={`${className}`}>{children}</motion.h1>
    </>
  );
};

export default Heading;
