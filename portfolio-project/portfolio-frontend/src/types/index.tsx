import { IconType } from "react-icons";

export interface TSkills {
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

export interface TProjects {
  img: string;
  title: string;
  description: string[];
  skills: TSkills[];
  link: string;
}
