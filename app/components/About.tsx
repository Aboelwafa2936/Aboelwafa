"use client";
import HeadingSection from "./HeadingSection";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <motion.section
        id="about"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="scroll-mt-28 mb-28 max-w-[50rem] text-center sm:mb-0 px-4"
      >
        <HeadingSection title={"About Me"} />
        <p className="text-gray-700 text-lg leading-relaxed">
          <span className="font-semibold text-gray-900 dark:text-gray-400">
            Hey there, I&apos;m Ahmed!
          </span>{" "}
          I&apos;m a <span className="font-bold">frontend developer</span> with a
          passion for crafting{" "}
          <span className="font-semibold">stunning websites</span> and{" "}
          <span className="font-semibold">innovative applications</span>. My
          toolkit includes <span className="font-bold">React</span> {" "}
          <span className="font-bold"></span>, which I use to turn{" "}
          <span className="font-semibold">creative visions</span> into{" "}
          <span className="font-semibold">interactive realities</span>. When I&apos;m
          not immersed in code, you&apos;ll find me exploring the latest design
          trends or diving into new tech. Let’s create something amazing
          together!
        </p>
      </motion.section>
    </>
  );
}
