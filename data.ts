import { RiComputerLine } from "react-icons/ri";
import { FaServer, FaMobile, FaCamera } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { IProject, Service, Skill } from "./types";

import { BsCircleFill } from "react-icons/bs";

export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: "Front-End Development",
    about:
      "I can build robust websites using <b> HTML</b>,<b>CSS</b>, and <b>React.js</b> ",
  },
  {
    Icon: FaMobile,
    title: "App Development",
    about:
      "I can develop robust mobile apps using <b>Java, Kotlin, </b> and <b> Swift </b> ",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "UI/UX designer",
    about:
      "I create stunning user interfaces using <b>Adobe CC</b>, <b>Figma</b>, and <b>Framer</b> ",
  },
  {
    Icon: FaServer,
    title: "Back-End Development",
    about:
      "I communicate with databases and servers using <b>GraphQL </b> & <b>Express.js</b>",
  },
  {
    Icon: MdDeveloperMode,
    title: "Competitive Coder",
    about: "I am a problem solver in <b>Leet Code</b> and <b>HackerRank</b>",
  },
  {
    Icon: FaCamera,
    title: "Photographer",
    about:
      "I photograph <b> professional headshots </b> and beautiful landscapes ",
  },
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Java",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "JavaScript",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "TypeScript",
    level: "65",
  },
  {
    Icon: BsCircleFill,
    name: "React",
    level: "75",
  },
  {
    Icon: BsCircleFill,
    name: "Kotlin",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Swift",
    level: "55",
  },
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Figma",
    level: "82",
  },
  {
    Icon: BsCircleFill,
    name: "Framer",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Adobe Illustrator",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Adobe Photoshop",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Adobe XD",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Adobe Premiere Pro",
    level: "75",
  },
];

export const projects: IProject[] = [
  {
    id: 1,
    name: "ASL Lens",
    image_path: "/images/asllens.png",
    deployed_url: "",
    github_url: "https://github.com/rchang0501/ASL-Lens",
    category: ["react", "machine learning"],
    description:
      "React.JS App that uses custom-built Tensorflow.JS Object Detection ML Model hosted on IBM Cloud to identify and translate American Sign Language (ASL) to plain English",
    key_techs: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "IBM Cloud",
      "Tensorflow.JS",
      "OpenCV",
    ],
  },

  {
    id: 2,
    name: "Shutt3r Search",
    image_path: "/images/shuttersearch.png",
    deployed_url: "",
    github_url: "https://github.com/rchang0501/shutt3r-search",
    category: ["app", "machine learning"],
    description:
      "Shutt3r Search is a Machine Learning Image Recognition Camera App built for Android. It can recognize and provide google search results of the image taken using the Firebase ML Kit.",
    key_techs: ["Java", "Google Cloud/Firebase", "Android"],
  },

  {
    id: 3,
    name: "International COVID Tracker",
    description:
      "COVID-19 case tracker built with React.JS and React Leaflet. Utilizes Chart.JS to read data from the disease.sh API and is set up for hosting on Firebase",
    image_path: "/images/covidtracker.png",
    deployed_url: "",
    github_url: "https://github.com/rchang0501/International-COVID-Tracker",
    category: ["react", "website"],
    key_techs: [
      "React",
      "JavaScript",
      "Google Cloud/Firebase",
      "Chart.js",
      "Material UI",
    ],
  },

  {
    id: 4,
    name: "Shazam Canvas",
    image_path: "/images/shazamcanvas.png",
    deployed_url: "",
    github_url: "https://github.com/rchang0501/Shazam-Canvas",
    category: ["app", "machine learning"],
    description:
      "Image Classification App. Uses TensorFlow Image Classification database.",
    key_techs: ["Kotlin", "TensorFlow.JS", "Android"],
  },

  {
    id: 5,
    name: "Ontario DECA Website",
    image_path: "/images/deca.png",
    deployed_url: "",
    github_url: "https://github.com/rchang0501/deca.ca",
    category: ["website"],
    description:
      "My work as the Lead Front-End Developer and Media Offficer of Ontario DECA",
    key_techs: ["HTML", "CSS", "WordPress"],
  },

  {
    id: 6,
    name: "MGCI SAC Website",
    image_path: "/images/mgcisac.png",
    deployed_url: "!#",
    github_url: "https://github.com/rchang0501/MGCI-SAC-Website",
    category: ["website"],
    description:
      "My work as the Lead Front-End Developer on the MGCI SAC Website",
    key_techs: ["HTML", "CSS", "Google Sites"],
  },

  {
    id: 7,
    name: "M.A.T.C.H.",
    image_path: "/images/match.png",
    deployed_url: "",
    github_url: "https://github.com/rchang0501/M.A.T.C.H.",
    category: ["app"],
    description:
      "M.A.T.C.H. is a memory game app built for Android using Kotlin. Features include variable game modes, refresh options, and dynamic information panels.",
    key_techs: ["Kotlin", "Android"],
  },

  {
    id: 8,
    name: "Digital Agenda",
    image_path: "/images/agenda.png",
    deployed_url: "",
    github_url: "https://github.com/rchang0501/Digital-Agenda",
    category: ["react", "website"],
    description:
      "React.JS agenda app featuring a dynamic UI built with JavaScript, HTML, and CSS, a simple backend using a JSON server, and routing optimizations with react router.",
    key_techs: ["React", "JavaScript", "HTML", "CSS"],
  },
];
