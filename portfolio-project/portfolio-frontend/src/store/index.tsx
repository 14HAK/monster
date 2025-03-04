import { BiLogoPostgresql } from "react-icons/bi";
import { DiMongodb } from "react-icons/di";
import {
  FaBootstrap,
  FaCcMastercard,
  FaFortAwesome,
  FaGitAlt,
  FaGithub,
  FaHandsHelping,
  FaMicrochip,
  FaNode,
  FaNodeJs,
  FaNpm,
  FaPeopleArrows,
  FaPlaneDeparture,
  FaReact,
  FaYarn,
} from "react-icons/fa";
import {
  FaBoltLightning,
  FaChildren,
  FaComments,
  FaFlagCheckered,
  FaHtml5,
  FaPeopleGroup,
} from "react-icons/fa6";
import { GiInjustice, GiLion, GiWaveSurfer } from "react-icons/gi";
import { GrStripe } from "react-icons/gr";
import { HiMiniAcademicCap } from "react-icons/hi2";
import { ImBooks } from "react-icons/im";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoVercel } from "react-icons/io5";
import { LiaWindowRestoreSolid } from "react-icons/lia";
import { PiYarnFill } from "react-icons/pi";
import {
  RiJavascriptFill,
  RiNextjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import {
  SiCss3,
  SiExpress,
  SiFusionauth,
  SiGoogleauthenticator,
  SiHeadlessui,
  SiJavascript,
  SiMongodb,
  SiMongoose,
  SiMui,
  SiMysql,
  SiNetlify,
  SiPnpm,
  SiReacthookform,
  SiReactrouter,
  SiSass,
  SiShadcnui,
  SiTypescript,
  SiWebauthn,
} from "react-icons/si";
import { TbBrandFramerMotion, TbBrandRedux, TbFishHook } from "react-icons/tb";
import { VscVscode, VscVscodeInsiders } from "react-icons/vsc";
import { TExpereance, TProjects, TSkills } from "../types";

export const experiences: TExpereance[] = [
  {
    years: "2015 – 2017",
    title: "General Secretary | National Children Task Force (NCTF)",
    description: [
      "Led social initiatives to support disadvantaged children by visiting hospitals, railway stations, and other locations to identify and assist those in need.",
      "Organized events and distributed gifts to create memorable experiences for underprivileged children.",
      "Developed leadership, communication, and team coordination skills through active participation in nonprofit activities.",
    ],
    skills: [
      { title: "NCTF", icon: FaChildren },
      { title: "leadership", icon: GiLion },
      { title: "communication", icon: FaComments },
      { title: "team coordination", icon: FaPeopleGroup },
      { title: "social activities", icon: FaFlagCheckered },
      { title: "friendship", icon: FaHandsHelping },
      { title: "justice", icon: GiInjustice },
    ],
    link: "https://www.facebook.com/nctfcentral/?profile_tab_item_selected=photos&_rdr",
  },
  {
    years: "2018 – 2022",
    title: "University Life & Technical Learning(PUB UNIVERSITY)",
    description: [
      "Gained exposure to social festivals, travel experiences, and networking opportunities.",
      "Built a strong foundation in computer science subjects, including. Programming & Web Technologies: HTML, CSS, C++, Java (basic), Web Database Programming. Database Management: SQL, XAMPP. Software Development Lifecycle (SDLC).",
      "Developed problem-solving and analytical skills through academic projects and coursework. ",
    ],
    skills: [
      { title: "leadership", icon: FaFortAwesome },
      { title: "social communication", icon: FaPeopleArrows },
      { title: "social activities", icon: GiWaveSurfer },
      { title: "traveler", icon: FaPlaneDeparture },
      { title: "academic knowledge", icon: HiMiniAcademicCap },
      { title: "thesis statement && projects", icon: ImBooks },
    ],
    link: "https://drive.google.com/drive/folders/1hT3ohfodUi77YvdfixhFwB3YzNuLXCoF?usp=sharing",
  },
  {
    years: "2022 – 2024",
    title: "MERN Stack Developer | Programming Hero (Online Course)",
    description: [
      "Successfully completed Level-one and Level-two into three stages of the MERN Stack Development course from Programming Hero.",
      "compleat Frontend Development: React, Tailwind CSS, Redux Toolkit, React Router. Backend Development: Node.js, Express.js, Mongoose, REST API design. Database Management: MongoDB, Prisma. Authentication & Security: JWT, OAuth, role-based access control. Version Control & Deployment: Git, GitHub, Vercel, Docker.",
      "Worked on real-world projects, applying best practices in full-stack development.",
      "During this time, I have also learned something about myself.",
    ],
    skills: [
      { title: "HTML5", icon: FaHtml5 },
      { title: "CSS3", icon: IoLogoCss3 },
      { title: "Javascript", icon: RiJavascriptFill },
      { title: "React", icon: FaReact },
      { title: "tailwind", icon: RiTailwindCssFill },
      { title: "shadcn/ui", icon: SiShadcnui },
      { title: "visual studio", icon: VscVscode },
      { title: "MUI", icon: SiMui },
      { title: "react router", icon: SiReactrouter },
      { title: "react hook form", icon: SiReacthookform },
      { title: "Node", icon: FaNode },
      { title: "Express", icon: SiExpress },
      { title: "mongoDB", icon: SiMongodb },
      { title: "mongoose", icon: SiMongoose },
      { title: "Next.js", icon: RiNextjsFill },
      { title: "yarn", icon: FaYarn },
      { title: "SASS/SCSS", icon: SiSass },
      { title: "others", icon: PiYarnFill },
    ],
    link: "https://drive.google.com/file/d/162ziMlEvEnoKEbrtjfErnrSLYlcKvBPR/view?usp=sharing",
  },
];

//todo: next add yours project here:
export const projects: TProjects[] = [
  {
    img: "https://www.uniqode.com/blog/wp-content/uploads/2022/11/How-to-create-a-digital-business-card-768x432.png",
    title: "project titles here",
    description: [
      "project descriptions here step by step",
      "descriptions 2 step by steps in here",
    ],
    skills: [{ title: "React", icon: FaReact }],
    link: "https://www.youtube.com",
  },
  {
    img: "https://www.uniqode.com/blog/wp-content/uploads/2022/11/How-to-create-a-digital-business-card-768x432.png",
    title: "project titles here",
    description: [
      "project descriptions here step by step",
      "descriptions 2 step by steps in here",
    ],
    skills: [{ title: "React", icon: FaReact }],
    link: "https://www.youtube.com",
  },
];

//todo: next add yours skills here:
export const skills: TSkills[] = [
  { title: "Vscode", icon: VscVscodeInsiders },
  { title: "HTML5", icon: FaHtml5 },
  { title: "CSS3", icon: SiCss3 },
  { title: "Javascript", icon: SiJavascript },
  { title: "Git", icon: FaGitAlt },
  { title: "Github", icon: FaGithub },
  { title: "React", icon: FaReact },
  { title: "hooks/react", icon: TbFishHook },
  { title: "Redux", icon: TbBrandRedux },
  { title: "Redux-toolkit", icon: TbBrandRedux },
  { title: "Bootstrap", icon: FaBootstrap },
  { title: "Netlify", icon: SiNetlify },
  { title: "Vercel", icon: IoLogoVercel },
  { title: "react-router-dom", icon: SiReactrouter },
  { title: "react-hook-form", icon: SiReacthookform },
  { title: "HeadlessUi/react", icon: SiHeadlessui },
  { title: "Shadcnui/react", icon: SiShadcnui },
  { title: "Framer-motion", icon: TbBrandFramerMotion },
  { title: "Node", icon: FaNodeJs },
  { title: "Express", icon: SiExpress },
  { title: "Mongodb", icon: DiMongodb },
  { title: "Mongoose", icon: SiMongoose },
  { title: "REST API", icon: LiaWindowRestoreSolid },
  { title: "CRUD", icon: FaMicrochip },
  { title: "authentication", icon: SiFusionauth },
  { title: "authorization", icon: SiWebauthn },
  { title: "payment-system", icon: FaCcMastercard },
  { title: "JWT", icon: SiGoogleauthenticator },
  { title: "Stripe", icon: GrStripe },
  { title: "typescript", icon: SiTypescript },
  { title: "npm", icon: FaNpm },
  { title: "pnpm", icon: SiPnpm },
  { title: "yarn", icon: FaYarn },
  { title: "SCSS", icon: SiSass },
  { title: "Nextjs", icon: RiNextjsFill },
  { title: "Postgresql", icon: BiLogoPostgresql },
  { title: "Mysql", icon: SiMysql },
  { title: "others", icon: FaBoltLightning },
];
