import { motion } from "framer-motion";
import React from "react";

interface TSectionProps {
  children: React.ReactNode;
  className: string;
}

const SectionCom = ({
  children,
  className,
}: TSectionProps): React.ReactElement => {
  return (
    <>
      <motion.section className={`${className}`}>{children}</motion.section>
    </>
  );
};

export default SectionCom;
