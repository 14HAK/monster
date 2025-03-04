import { motion } from "framer-motion";
import React from "react";

interface TBadgeProps {
  children: React.ReactNode;
  className: string;
}

const Badge = ({ children, className }: TBadgeProps): React.ReactElement => {
  return (
    <>
      <motion.div className={`${className}`}>{children}</motion.div>
    </>
  );
};

export default Badge;
