"use client"

import timelineItems from "@/data/timelineItems";
import { containerVariants, childVariants } from "@/util/variants";
import { motion } from "motion/react";

export default function Timeline() {
  return (
    <main className="w-full px-5">
      <motion.div variants={containerVariants} initial='hidden' animate='visible' className="text-center mt-5">
        <motion.h1 variants={childVariants} className="text-h4 sm:text-h3 md:text-h2 lg:text-h1 font-quicksand">
          TIMELINE
        </motion.h1>
        <motion.p variants={childVariants} className="font-latoRegular text-body-small sm:text-body-normal md:text-body-medium">
          <span className="opacity-50 ">A journey through my education and career.</span>
        </motion.p>
      </motion.div>

      <motion.div variants={childVariants} initial='hidden' animate='visible' className="flex items-center justify-center mt-16 py-4 px-6">
        <ol>
          {timelineItems.map((timeline, index) => (
              <li key={index} className="border-l-2 border-primary">
                <div className="flex justify-start">
                  <div className="bg-primary w-10 h-10 p-2 flex items-center justify-center rounded-full -ml-5">
                    {timeline.icon}
                  </div>
                  <div className="block p-6 rounded-lg shadow-lg bg-gray-100 max-w-lg ml-6 mb-10">
                    <div className="flex justify-between mb-4">
                      <p className="font-quicksand font-bold text-black-1 hover:text-black-2 focus:text-black-3 duration-300 transition ease-in-out text-sm">
                        {timeline.title}
                      </p>
                      <p className="font-quicksand font-bold text-black-1 hover:text-black-2 focus:text-black-3 duration-300 transition ease-in-out text-sm">
                        {timeline.year}
                      </p>
                    </div>
                    <p className="text-black-1 font-latoRegular text-body-normal opacity-70 mb-6">{timeline.description}</p>
                  </div>
                </div>
              </li>
          ))}
        </ol>
      </motion.div>
    </main>
  );
}
