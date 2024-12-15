"use client";

import Card from "@/components/Card";
import cardItems from "@/data/cardItems";
import { childVariants, containerVariants } from "@/util/variants";
import { motion } from "motion/react";

export default function Projects() {
  return (
    <main className="w-full px-5">
      <motion.div variants={containerVariants} initial='hidden' animate='visible' className="text-center mt-5">
        <motion.h1 variants={childVariants} className="text-h4 sm:text-h3 md:text-h2 lg:text-h1 font-quicksand">
          PROJECTS
        </motion.h1>
        <motion.p variants={childVariants} className="font-latoRegular text-body-small sm:text-body-normal md:text-body-medium">
          <span className="opacity-50 ">Here are some of the projects I&apos;ve worked on recently.</span>
        </motion.p>
      </motion.div>

      <motion.div variants={containerVariants} initial='hidden' animate='visible' className="grid grid-cols-1 justify-items-center items-start md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 mt-16">
        {cardItems.map((data) => (
          <Card key={data.id} data={data} />
        ))}
      </motion.div>
    </main>
  );
}
