import { motion } from "framer-motion";
import React from "react";

interface TProps {
  children: React.ReactNode;
  className?: string;
}

const Footer = ({ children, className }: TProps): React.ReactElement => {
  return (
    <>
      <motion.footer
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2 }}
        className={`${className} `}
      >
        {children}
      </motion.footer>
    </>
  );
};

export default Footer;
