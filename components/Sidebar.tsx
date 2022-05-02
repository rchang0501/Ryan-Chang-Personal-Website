import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiFillYoutube,
} from "react-icons/ai";
import { GiTie } from "react-icons/gi";
import { GoLocation } from "react-icons/go";
import { useTheme } from "next-themes";
import Image from "next/image";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <Image
        src="/images/ryanchang.jpg"
        alt="avatar"
        className=" mx-auto border rounded-full "
        height="128px"
        width="128px"
        layout="intrinsic"
        quality="100"
      />
      <h3 className="my-4 text-3xl font-bold tracking-wider font-prompt">
        <span className="text-blue ">Ryan</span> Chang
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500">
        Software Developer
      </p>
      {/* Resume */}
      <a
        href="https://drive.google.com/file/d/15GAzSxPkM4dF78GqpZcpAFnfXJxEjYzD/view?usp=sharing"
        className="flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-200 dark:bg-black-500"
      >
        <GiTie className="w-6 h-6" />
        <span>My Resume</span>
      </a>

      {/* Socials */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full ">
        <a
          href="https://www.linkedin.com/in/rchang0501/"
          aria-label="Linkedin"
        >
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://github.com/rchang0501" aria-label="GitHub">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />{" "}
        </a>
        <a
          href="https://www.youtube.com/channel/UCV2Qn0HdOtAsPBEfr-lJNig"
          aria-label="YouTube"
        >
          <AiFillYoutube className="w-8 h-8 cursor-pointer" />
        </a>
      </div>

      {/* Contacts */}
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200 dark:bg-black-500"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center">
          <GoLocation className="mr-2" /> <span>Toronto, Ontario </span>
        </div>
        <p className="my-2 "> ryan.chang@uwaterloo.ca </p>
        <p className="my-2"> (416) 316-5322 </p>
      </div>

      {/* Email Button */}

      <button
        className="w-8/12 px-5 py-2 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 hover:scale-105 focus:outline-none"
        onClick={() => window.open("mailto:ryan.chang@uwaterloo.ca")}
      >
        Email me
      </button>
      <button
        onClick={changeTheme}
        className="w-8/12 px-5 py-2 my-4 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 focus:outline-none hover:scale-105 "
      >
        {/* //TODO remove bg black */}
        Switch Theme
      </button>
    </>
  );
};

export default Sidebar;
