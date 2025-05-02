import { motion } from "framer-motion";
import React from "react";

interface TProps {
  children: React.ReactNode;
  className?: string;
}

const Nav = ({ children, className }: TProps): React.ReactElement => {
  return (
    <>
      <motion.nav className={`${className} `}>{children}</motion.nav>
    </>
  );
};

export default Nav;
