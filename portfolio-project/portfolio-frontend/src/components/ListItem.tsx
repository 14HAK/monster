import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

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
        <Link to={to} rel="noreferrer">
          ____{navName}
        </Link>
      </motion.li>
    </>
  );
};

export default ListItem;
