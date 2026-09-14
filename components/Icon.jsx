import {
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
  FaBars,
  FaXmark,
  FaArrowRight,
  FaArrowUpRightFromSquare,
  FaCode,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaBootstrap,
  FaDownload,
  FaLocationDot,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import {
  SiNextdotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiTailwindcss,
  SiRedux,
  SiPostman,
  SiJavascript,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

export default function Icon({ name, size = 18, className = "" }) {
  const icons = {
    github: FaGithub,
    linkedin: FaLinkedinIn,
    whatsapp: FaWhatsapp,
    email: MdEmail,
    mail: MdEmail,
    menu: FaBars,
    close: FaXmark,
    arrow: FaArrowRight,
    arrowUpRight: FaArrowUpRightFromSquare,
    code: FaCode,
    download: FaDownload,
    location: FaLocationDot,
    react: FaReact,
    nodejs: FaNodeJs,
    html5: FaHtml5,
    css3: FaCss3Alt,
    git: FaGitAlt,
    bootstrap: FaBootstrap,
    nextjs: SiNextdotjs,
    express: SiExpress,
    postgresql: SiPostgresql,
    mongodb: SiMongodb,
    tailwind: SiTailwindcss,
    redux: SiRedux,
    postman: SiPostman,
    javascript: SiJavascript,
    api: TbApi,
  };
  const IconComponent = icons[name];
  if (!IconComponent) return null;
  return <IconComponent size={size} aria-hidden="true" className={className} />;
}
