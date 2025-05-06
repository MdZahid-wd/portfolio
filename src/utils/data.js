import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaInstagram,
  FaLinkedin,
  FaJava,
} from "react-icons/fa";
import { BiLogoJavascript } from "react-icons/bi";
import { SiExpress, SiMongodb, SiMysql, SiWebpack } from "react-icons/si";
import {
  VscVscode,
  VscCommentUnresolved,
  VscTerminalPowershell,
} from "react-icons/vsc";
import {
  FaGitAlt,
  FaXTwitter,
  FaDribbble,
  FaFaceFlushed,
} from "react-icons/fa6";
import { MdGroups3 } from "react-icons/md";

import PROJECT_IMG_1 from "../assets/images/chatApp.jpg";
import PROJECT_IMG_2 from "../assets/images/TaskManager.jpg";
// import PROJECT_IMG_3 from "";
// import PROJECT_IMG_4 from "";
// import PROJECT_IMG_5 from "";
// import PROJECT_IMG_6 from "";
// import PROJECT_IMG_7 from "";

export const MENU_LINKS = [
  { id: "01", label: "Home", offset: -100, to: "hero" },
  { id: "02", label: "Skills", offset: -100, to: "skills" },
  { id: "03", label: "About Me", offset: -100, to: "about" },
  { id: "04", label: "Projects", offset: -100, to: "projects" },
  { id: "05", label: "Contact", offset: -100, to: "contact" },
];
export const STATS = [
  { id: "01", count: "10", label: "Years of \nExperience" },
  { id: "02", count: "12", label: "Certifications \nEarned" },
  { id: "03", count: "43", label: "Projects \nCompleted" },
  { id: "04", count: "37+", label: "Happly \nClients" },
];
export const SKILL_TABS = [
  { id: "01", label: "All", value: "all" },
  { id: "02", label: "Frontend", value: "Frontend" },
  { id: "03", label: "Backend", value: "backend" },
  { id: "04", label: "Tools/frameWork", value: "tools" },
  { id: "05", label: "Soft-Skills", value: "soft-skills" },
];

export const SKILLS = [
  {
    id: "01",
    icon: FaReact,
    skill: "React JS",
    progress: 50,
    type: "Frontend",
    description:
      "Experienced in building scalable, component-driven web application using React-js. proficient in ",
  },
  {
    id: "02",
    icon: FaHtml5,
    skill: "HTML5",
    progress: 95,
    type: "Frontend",
    description: "",
  },

  {
    id: "03",
    icon: FaCss3,
    skill: "CSS3",
    progress: 95,
    type: "Frontend",
    description: "",
  },

  {
    id: "04",
    icon: BiLogoJavascript,
    skill: "java-Script",
    progress: 40,
    type: "Frontend",
    description: " ",
  },
  {
    id: "05",
    icon: FaNodeJs,
    skill: "Node-js",
    progress: 60,
    type: "backend",
    description: " ",
  },
  {
    id: "06",
    icon: SiExpress,
    skill: "Express",
    progress: 60,
    type: "tools",
    description: "",
  },
  {
    id: "07",
    icon: SiMongodb,
    skill: "MongoDB",
    progress: 70,
    type: "backend",
    description: " ",
  },
  {
    id: "08",
    icon: SiMysql,
    skill: "MySQL",
    progress: 80,
    type: "soft-skills",
    description: "",
  },
  {
    id: "09",
    icon: FaJava,
    skill: "java SE",
    progress: 70,
    type: "soft-skills",
    description: "",
  },
];

export const ABOUT_ME = {
  content:
    "i am a passionate frontend develover with a strong foundation in building respossive and user-centric\nMy journey in web development started with a simple curiosity-how does the web work",
  socialLinks: [
    { id: "01", label: "Facebook", icon: FaFaceFlushed, Link: "#" },
    { id: "02", label: "Instagram", icon: FaInstagram, Link: "#" },
    { id: "03", label: "Twitter", icon: FaXTwitter, Link: "#" },
    { id: "04", label: "LinkedIn", icon: FaLinkedin, Link: "#" },
    { id: "05", label: "Dribble", icon: FaDribbble, Link: "#" },
  ],
  email: "zahidmd9830@gmail.com",
  phone: "8240291948",
  website: "www.linkedin.com/in/zahid2004",
};

export const PROJECTS = [
  {
    id: 1,
    title:
      "full stack notes app using MERN | MongoDB, Express, React Js, Node js",
    image: PROJECT_IMG_1,
    tags: ["MERN", "Socke/io", "Telwind-css"],
  },
  {
    id: 2,
    title:
      "full stack notes app using MERN | MongoDB, Express, React Js, Node js",
    image: PROJECT_IMG_2,
    tags: ["MongoDB", "React-js", "Telwind-css", "Node.js"],
  },
];
