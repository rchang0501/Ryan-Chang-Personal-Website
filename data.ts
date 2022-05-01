import { RiComputerLine } from "react-icons/ri";
import { FaServer, FaMobile, FaCamera } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { IProject, Service, Skill } from "./types";

import { BsCircleFill } from "react-icons/bs";

export const services: Service[] = [
  {
    Icon: FaMobile,
    title: "Mobile App Development",
    about:
      "I can develop robust apps using <b>Kotlin, Java, Swift, React Native & JavaScript/ TypeScript</b>.  ",
  },
  {
    Icon: RiComputerLine,
    title: "Front-End Development",
    about:
      "I am experienced in building front-end apps using <b>React, JavaScript, TypeScript</b> ",
  },
  {
    Icon: FaServer,
    title: "Back-End Development",
    about:
      "I can design database schemas and services using <b>MongoDB, Express, TypeScript</b>",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "Machine Learning Development",
    about:
      "I can create and train machine learning models using <b>Tensorflow</b> and <b>OpenCV</b>",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "UI/UX designer",
    about:
      "I create stunning high-fidelity user interfaces using <b>Figma</b> and <b>Adobe CC</b>",
  },
  {
    Icon: MdDeveloperMode,
    title: "Competitive Coder",
    about:
      "I solve challenging problems on Leetcode using <b>C++, Java</b>, and <b>Python</b>",
  },
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Kotlin",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "Java",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "JavaScript",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "TypeScript",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "C++",
    level: "75",
  },
  {
    Icon: BsCircleFill,
    name: "Swift",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Python",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Bash",
    level: "65",
  },
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "React",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "React Native",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "MongoDB",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "SQLs",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Android Jetpack",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "SwiftUI/ UIKit",
    level: "75",
  },
  {
    Icon: BsCircleFill,
    name: "Tensorflow/OpenCV",
    level: "65",
  },
  {
    Icon: BsCircleFill,
    name: "Git",
    level: "80",
  },
];

export const projects: IProject[] = [
  {
    id: 1,
    name: "Auto Atlas",
    image_path: "/images/autoatlas.png",
    deployed_url: "",
    github_url: "https://github.com/rchang0501/auto-atlas",
    category: ["mobile", "react"],
    description:
      "React Native automotive travel assistant application. Leverages Expo framework, Redux for state management, Tailwind React Native for styling, and Google Directions, Places, & Distance Matrix APIs",
    key_techs: [
      "React Native",
      "JavaScript",
      "Google Cloud",
      "Redux",
      "Expo",
      "Tailwind",
    ],
  },

  {
    id: 2,
    name: "Rejuvenate",
    image_path: "/images/rejuvenate.png",
    deployed_url: "",
    github_url: "https://github.com/rchang0501/rejuvenate-android",
    category: ["mobile"],
    description:
      "Skincare management application built natively for Android and iOS. Android App developed using Jetpack for UI/UX development and Room for data handling. Employs modern Kotlin development principles and the MVVM architecture pattern. iOS developed Skincare management Android application using Jetpack for UI/UX development and Room for data handling. Employs modern Kotlin development principles and the MVVM architecture pattern.",
    key_techs: ["Android", "iOS", "Kotlin", "Swift"],
  },

  {
    id: 4,
    name: "iTrainer",
    image_path: "/images/itrainer.png",
    deployed_url: "",
    github_url: "https://github.com/rchang0501/iTrainer",
    category: ["mobile"],
    description:
      "H.I.I.T. workout iOS app. Leverages SwiftUI and modern Swift development practices. Utilizes SwiftUI components namely navigation stack and modal views for the UI, @State, @binding, @published, and @StateObject annotations for state management as well as data persistence and concurrency, and queues to handle asynchronous tasks.",
    key_techs: ["iOS", "Swift", "SwiftUI"],
  },

  {
    id: 3,
    name: "Focus on Nature",
    image_path: "/images/focusonnature.png",
    deployed_url: "",
    github_url: "https://github.com/uwblueprint/focus-on-nature",
    category: ["react", "web"],
    description:
      "UW Blueprint Focus on Nature platform for camp booking system. Developed using MERN (MongoDB, Express.JS, React, Next.JS) Stack and TypeScript. Leverages Stripe for payment management",
    key_techs: [
      "React",
      "TypeScript",
      "MongoDB",
      "Stripe",
      "Express.JS",
      "Next.JS",
    ],
  },

  {
    id: 5,
    name: "Shutter Search",
    image_path: "/images/shuttersearch.png",
    deployed_url: "",
    github_url: "https://github.com/rchang0501/shutt3r-search",
    category: ["mobile", "machine learning"],
    description:
      "Shutter Search is a Machine Learning Image Recognition Camera App built for Android. It can recognize and provide google search results of the image taken using the Firebase ML Kit.",
    key_techs: ["Java", "Google Cloud/Firebase", "Android"],
  },

  {
    id: 6,
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
    id: 7,
    name: "International COVID Tracker",
    description:
      "COVID-19 case tracker built with React.JS and React Leaflet. Utilizes Chart.JS to read data from the disease.sh API and is set up for hosting on Firebase",
    image_path: "/images/covidtracker.png",
    deployed_url: "",
    github_url: "https://github.com/rchang0501/International-COVID-Tracker",
    category: ["react", "web"],
    key_techs: [
      "React",
      "JavaScript",
      "Google Cloud/Firebase",
      "Chart.js",
      "Material UI",
    ],
  },

  {
    id: 8,
    name: "Shazam Canvas",
    image_path: "/images/shazamcanvas.png",
    deployed_url: "",
    github_url: "https://github.com/rchang0501/Shazam-Canvas",
    category: ["mobile", "machine learning"],
    description:
      "Image Classification App. Uses TensorFlow Image Classification database.",
    key_techs: ["Kotlin", "TensorFlow.JS", "Android"],
  },

  {
    id: 9,
    name: "Ontario DECA Website",
    image_path: "/images/deca.png",
    deployed_url: "",
    github_url: "https://github.com/rchang0501/deca.ca",
    category: ["web"],
    description:
      "My work as the Lead Front-End Developer and Media Offficer of Ontario DECA",
    key_techs: ["HTML", "CSS", "WordPress"],
  },

  {
    id: 10,
    name: "MGCI SAC Website",
    image_path: "/images/mgcisac.png",
    deployed_url: "!#",
    github_url: "https://github.com/rchang0501/MGCI-SAC-Website",
    category: ["web"],
    description:
      "My work as the Lead Front-End Developer on the MGCI SAC Website",
    key_techs: ["HTML", "CSS", "Google Sites"],
  },

  {
    id: 11,
    name: "M.A.T.C.H.",
    image_path: "/images/match.png",
    deployed_url: "",
    github_url: "https://github.com/rchang0501/M.A.T.C.H.",
    category: ["mobile"],
    description:
      "M.A.T.C.H. is a memory game app built for Android using Kotlin. Features include variable game modes, refresh options, and dynamic information panels.",
    key_techs: ["Kotlin", "Android"],
  },

  {
    id: 12,
    name: "Digital Agenda",
    image_path: "/images/agenda.png",
    deployed_url: "",
    github_url: "https://github.com/rchang0501/Digital-Agenda",
    category: ["react", "web"],
    description:
      "React.JS agenda app featuring a dynamic UI built with JavaScript, HTML, and CSS, a simple backend using a JSON server, and routing optimizations with react router.",
    key_techs: ["React", "JavaScript", "HTML", "CSS"],
  },
];
