import { DiCodeigniter } from "react-icons/di";
import {
  FaBootstrap,
  FaCss3Alt,
  FaGolang,
  FaHtml5,
  FaJs,
  FaLaravel,
  FaPython,
  FaReact,
  FaVuejs,
} from "react-icons/fa6";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiPhp } from "react-icons/si";

const skillsItems = [
  { id: 1, name: "HTML", icon: <FaHtml5 color="#E34F26" size={24} /> },
  { id: 2, name: "CSS", icon: <FaCss3Alt color="#1572B6" size={24} /> },
  { id: 3, name: "JAVASCRIPT", icon: <FaJs color="#F7DF1E" size={24} /> },
  { id: 4, name: "PHP", icon: <SiPhp color="#777BB4" size={24} /> },
  { id: 5, name: "PYTHON", icon: <FaPython color="#3776AB" size={24} /> },
  { id: 6, name: "GOLANG", icon: <FaGolang color="#00ADD8" size={24} /> },
  { id: 7, name: "BOOTSTRAP", icon: <FaBootstrap color="#7952B3" size={24} /> },
  {
    id: 8,
    name: "TAILWINDCSS",
    icon: <RiTailwindCssFill color="#06B6D4" size={24} />,
  },
  { id: 9, name: "CODEIGNITER", icon: <DiCodeigniter color="#EF4223" size={24} /> },
  { id: 10, name: "LARAVEL", icon: <FaLaravel color="#FF2D20" size={24} /> },
  { id: 11, name: "REACT", icon: <FaReact color="#61DAFB" size={24} /> },
  { id: 12, name: "VUE", icon: <FaVuejs color="#41B883" size={24} /> },
  { id: 13, name: "NEXT JS", icon: <RiNextjsFill color="#000000" size={24} /> },
];

export default skillsItems;
