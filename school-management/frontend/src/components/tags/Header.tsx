import { motion } from "framer-motion";
import React from "react";

interface TProps {
  children: React.ReactNode;
  className?: string;
}

const Header = ({ children, className }: TProps): React.ReactElement => {
  return (
    <>
      <motion.header className={`${className} `}>{children}</motion.header>
    </>
  );
};

export default Header;
