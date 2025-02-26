import { motion } from "framer-motion";
import React from "react";
import ListItem from "./ListItem";
import SectionCom from "./SectionCom";

const Navbar = (): React.ReactElement => {
  return (
    <>
      <SectionCom className="">
        <motion.ol className="grid grid-cols-1 gap-4 text-sm font-semibold uppercase translate-2">
          <ListItem
            className="text-[#F8F2DE] transition-all duration-700 hover:font-semibold hover:text-red-400"
            navName="about"
            to="#/"
          />
          <ListItem
            className="text-[#F8F2DE] transition-all duration-700 hover:font-semibold hover:text-red-400"
            navName="experience"
            to="#/"
          />
          <ListItem
            className="text-[#F8F2DE] transition-all duration-700 hover:font-semibold hover:text-red-400"
            navName="projects"
            to="#/"
          />
          <ListItem
            className="text-[#F8F2DE] transition-all duration-700 hover:font-semibold hover:text-red-400"
            navName="skills"
            to="#/"
          />
        </motion.ol>
      </SectionCom>
    </>
  );
};

export default Navbar;
