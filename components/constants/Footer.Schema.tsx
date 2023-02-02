/** @format */

import { BsLinkedin, BsTwitter } from "react-icons/bs";
import { SiUpwork } from "react-icons/si";
import { IoLogoGitlab, IoLogoGithub } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

export const footerIcons = [
  {
    link: "https://www.linkedin.com/in/martins-ngene/",
    icon: <BsLinkedin />,
    name: "Linkedin",
  },
  {
    link: "https://twitter.com/martins_ngene",
    icon: <BsTwitter />,
    name: "Twitter",
  },
  {
    link: "https://www.upwork.com/freelancers/~011f39bb11ceb728bb",
    icon: <SiUpwork />,
    name: "Upwork",
  },
  {
    link: "https://gitlab.com/Martinsngene",
    icon: <IoLogoGitlab />,
    name: "Gitlab",
  },
  {
    link: "https://github.com/Martinsngene",
    icon: <IoLogoGithub />,
    name: "Github",
  },
  { link: "mailto:martinsngene@gmail.com", icon: <MdEmail />, name: "Email" },
];
