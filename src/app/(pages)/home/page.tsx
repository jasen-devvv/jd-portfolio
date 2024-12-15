"use client"

import ParticlesLink from "@/components/ParticlesLink";
import { childVariants, containerVariants } from "@/util/variants";
import { motion } from "motion/react";

export default function Home() {
  return (
    <main className="w-full px-5">
      <ParticlesLink />
      <motion.div variants={containerVariants} initial='hidden' animate='visible' className="z-50 relative text-center mt-20">
        <motion.h1 variants={childVariants} className="text-black-1 font-quicksand text-h4 sm:text-h3 md:text-h2 lg:text-h1">JANA</motion.h1>
        <motion.p variants={childVariants} className="font-latoRegular text-body-small sm:text-body-normal md:text-body-medium"><span className="opacity-70">FULL STACK DEVELOPER | FIGMA DESIGNER</span></motion.p>
        <motion.img variants={childVariants} src="/img/logo.png" alt="Logo" className="mt-5 rounded-full object-cover max-w-full mx-auto h-auto w-40 md:w-50 lg:w-60 shadow-black-sb" />
      </motion.div>
    </main>
  );
}
