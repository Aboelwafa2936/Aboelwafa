"use client"

import { skillsData } from "@/lib/data";
import HeadingSection from "./HeadingSection";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.05
    }
  })
}


export default function Skills() {
  
  return (
    <>
    <section id="skills" className="scroll-mt-28 mb-28 max-w-[53rem] text-center sm:mb-0 px-4">
        <HeadingSection title={'My Skills'}/>
        <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white border border-black/[0.2] rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80 dark:border-white/[0.2]"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
    </>
  )
}
