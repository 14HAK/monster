import { motion } from "framer-motion";
import React from "react";

interface TProps {
  children: React.ReactNode;
  className?: string;
}

const Footer = ({ children, className }: TProps): React.ReactElement => {
  return (
    <>
      <motion.footer className={`${className} `}>{children}</motion.footer>
    </>
  );
};

export default Footer;
