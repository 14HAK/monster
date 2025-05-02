import React from "react";
import { Link } from "react-router-dom";
import Section from "./tags/Section";

const Navbar = (): React.ReactElement => {
  return (
    <>
      <Section className="">
        <ul className="flex list-none content-center justify-center gap-3">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </Section>
    </>
  );
};

export default Navbar;
