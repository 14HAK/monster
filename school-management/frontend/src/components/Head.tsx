import React from "react";
import { useLocation } from "react-router-dom";
import HeroAll from "./HeroAll";
import HeroHead from "./HeroHead";

const Head = (): React.ReactElement => {
  //todo:
  // this component divided into two sub component "HeroHead.tsx" and "HeroAll.tsx".
  // in here this component as a "heroHead.tsx"
  const { pathname } = useLocation();

  return (
    <>{pathname === "/" || pathname === "/home" ? <HeroHead /> : <HeroAll />}</>
  );
};

export default Head;
