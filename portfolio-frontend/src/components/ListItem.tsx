import { motion } from "framer-motion";
import React from "react";

interface TListItemProps {
  className: string;
  navName?: string;
  to: string;
  svg?: React.ReactElement;
}

const ListItem = ({
  className,
  navName,
  to,
}: TListItemProps): React.ReactElement => {
  return (
    <>
      <motion.li className={`${className} list-none`}>
        <a href={to} rel="noreferrer">
          ____{navName}
        </a>
      </motion.li>
    </>
  );
};

export default ListItem;
