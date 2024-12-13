"use client";

import Card from "@/components/Card";
import cardItems from "@/data/cardItems";
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

export default function Projects() {
  return (
    <main className="w-full px-5">
      <motion.div variants={containerVariants} initial='hidden' animate='visible' className="text-center mt-5">
        <motion.h1 variants={childVariants} className="text-h4 sm:text-h3 md:text-h2 lg:text-h1 font-quicksand">
          PROJECTS
        </motion.h1>
        <motion.p variants={childVariants} className="font-latoRegular text-body-small sm:text-body-normal md:text-body-medium">
          <span className="opacity-50 ">Here are some of the projects I've worked on recently.</span>
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 justify-items-center items-start md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 mt-16">
        {cardItems.map((data) => (
          <Card key={data.id} data={data} />
        ))}
      </div>
    </main>
  );
}
