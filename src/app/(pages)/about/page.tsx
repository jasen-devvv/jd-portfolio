"use client";

import skills from "@/data/skillItems";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { motion } from "motion/react";

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function About() {
  return (
    <main className="w-full px-5">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center mt-5"
      >
        <motion.h1
          variants={childVariants}
          className="text-h4 sm:text-h3 md:text-h2 lg:text-h1 font-quicksand"
        >
          ABOUT
        </motion.h1>
        <motion.p
          variants={childVariants}
          className="font-latoRegular text-body-small sm:text-body-normal md:text-body-medium"
        >
          <span className="opacity-50">A little bit about who I and my skills.</span>
        </motion.p>
      </motion.div>
      <div className="flex flex-col lg:flex-row justify-center mt-16 gap-x-16 mx-auto max-w-[60rem]">
        <motion.img
          variants={childVariants}
          initial="hidden"
          animate="visible"
          src="/img/logo.png"
          alt="Logo"
          className="rounded-full object-cover max-w-full mx-auto h-auto w-40 md:w-72 lg:w-96 lg:h-96 shadow-black-sb"
        />
        <div className="flex flex-col justify-between mt-5">
          <motion.p
            variants={childVariants}
            initial="hidden"
            animate={{ opacity: 0.6, y: 0, transition: { duration: 0.5 } }}
            className="text-black-1 font-latoRegular text-body-normal"
          >
            Hello! I'm Jana, a web developer passionate about creating
            interactive digital experience. With a strong foundation in design
            and full-stack technologies. I specialize in building responsive and
            accessible websites.
          </motion.p>

          <motion.h1
            variants={childVariants}
            initial="hidden"
            animate="visible"
            className="mt-5 text-h5 sm:text-h4 md:text-h3 lg:text-h2 font-latoBold"
          >
            Skills
          </motion.h1>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-2 mt-2"
          >
            {skills.map((skill) => (
              <motion.span
                variants={childVariants}
                key={skill.id}
                className="bg-white-2 py-2 px-4 text-black-1 font-latoBold text-body-normal rounded-full shadow-black-sb flex items-center gap-x-1"
              >
                {skill.icon}
                {skill.name}
              </motion.span>
            ))}
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-x-3 mt-5"
          >
            <motion.button
              variants={childVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-primary py-2 px-4 text-white-1 font-latoBold rounded-full border shadow-lg shadow-primary"
            >
              Download CV
            </motion.button>

            <motion.a
              variants={childVariants}
              className="bg-black-1 p-3 text-white-1 rounded-full shadow-black-sb"
              href="https://github.com/jasen-devvv"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub size={24} />
            </motion.a>
            <motion.a
              variants={childVariants}
              className="bg-info p-3 text-white-1 rounded-full shadow-black-sb"
              href="www.linkedin.com/in/jasen-dev"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin size={24} />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
