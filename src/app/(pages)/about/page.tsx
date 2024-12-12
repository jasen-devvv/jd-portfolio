import skills from "@/data/skillItems";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function About() {
  return (
    <main className="w-full px-5">
      <div className="text-center mt-5">
        <h1 className="text-h4 sm:text-h3 md:text-h2 lg:text-h1 font-quicksand">
          ABOUT
        </h1>
        <p className="opacity-50 font-latoRegular text-body-small sm:text-body-normal md:text-body-medium">
          A little bit about who I and my skills.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row justify-center mt-16 gap-x-16 mx-auto max-w-[60rem]">
        <img
          src="/img/logo.png"
          alt="Logo"
          className="rounded-full object-cover max-w-full mx-auto h-auto w-40 md:w-72 lg:w-96 lg:h-96 shadow-black-sb"
        />
        <div className="flex flex-col justify-between mt-5">
          <p className="opacity-60 text-black-1 font-latoRegular text-body-normal">
            Hello! I'm Jana, a web developer passionate about creating
            interactive digital experience. With a strong foundation in design
            and full-stack technologies. I specialize in building responsive and
            accessible websites.
          </p>

          <h1 className="mt-5 text-h5 sm:text-h4 md:text-h3 lg:text-h2 font-latoBold">
            Skills
          </h1>
          <div className="flex flex-wrap gap-2 mt-2">
            {skills.map((skill) => (
              <span
                key={skill.name}
                className="bg-white-2 py-2 px-4 text-black-1 font-latoBold text-body-normal rounded-full shadow-black-sb flex items-center gap-x-1"
              >
                {skill.icon}
                {skill.name}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-x-3 mt-5">
            <button className="bg-primary py-2 px-4 text-white-1 font-latoBold rounded-full border shadow-lg shadow-primary">
              Download CV
            </button>
            <a
              className="bg-black-1 p-3 text-white-1 rounded-full shadow-black-sb"
              href="https://github.com/jasen-devvv"
            >
              <FaGithub size={24} />
            </a>
            <a
              className="bg-info p-3 text-white-1 rounded-full shadow-black-sb"
              href="www.linkedin.com/in/jasen-dev"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
