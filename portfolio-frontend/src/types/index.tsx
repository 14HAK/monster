import { IconType } from "react-icons";

interface TSkills {
  title: string;
  icon: IconType;
}

export interface TExpereance {
  years: string;
  title: string;
  description: string[];
  skills: TSkills[];
  link: string;
}
