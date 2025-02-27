import { motion } from "framer-motion";
import React from "react";
import ListItem from "./ListItem";
import SectionCom from "./SectionCom";

const Navbar = (): React.ReactElement => {
  return (
    <>
      <SectionCom className="">
        <motion.ol className="grid translate-2 grid-cols-1 gap-4 text-sm font-semibold uppercase">
          <ListItem
            className="text-[#F8F2DE] transition-all duration-700 hover:font-semibold hover:text-red-400"
            navName="about"
            to="/about"
          />
          <ListItem
            className="text-[#F8F2DE] transition-all duration-700 hover:font-semibold hover:text-red-400"
            navName="experiences"
            to="/experiences"
          />
          <ListItem
            className="text-[#F8F2DE] transition-all duration-700 hover:font-semibold hover:text-red-400"
            navName="projects"
            to="/projects"
          />
          <ListItem
            className="text-[#F8F2DE] transition-all duration-700 hover:font-semibold hover:text-red-400"
            navName="skills"
            to="/skills"
          />
        </motion.ol>
      </SectionCom>
    </>
  );
};

export default Navbar;
