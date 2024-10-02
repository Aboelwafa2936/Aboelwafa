"use client"
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';

export default function Hero() {
  
  return (
    <>
      <section className='mb-28 max-w-[50rem] text-center sm:mb-0'>
        <div className="flex items-center justify-center mt-[100px]">
          <motion.figure
            className="relative my-5"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src="/personal-pic.png"
              width={150}
              height={150}
              quality={95}
              priority={true}
              alt="Picture of the author"
              className="h-26 w-26 rounded-full border-[0.35rem] object-cover border-white"
            />
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", delay: 0.2 }}
              className="absolute bottom-0 right-0 text-3xl"
            >
              👋
            </motion.span>
          </motion.figure>
        </div>
          <motion.p initial={{opacity: 0 , y: 100}} animate={{opacity: 1, y: 0}} transition={{delay: 0.3}} className="text-2xl font-medium !leading-[1.5] mb-10 mt-4 px-4 sm:text-3xl">
            <span className="font-bold">Hello, I&apos;m Ahmed.</span>
            I&apos;m a <span className="font-bold">frontend developer</span> with a
            passion for creating{" "}
            dynamic websites and applications.
            My expertise lies in{" "}
            <span className="underline">React</span>, and I love
            bringing ideas to life with intuitive and engaging user interfaces.
          </motion.p>
        <motion.div initial={{opacity: 0 , y: -100}} animate={{opacity: 1, y: 0}} transition={{delay: 0.3}} className="text-lg font-medium flex flex-col sm:flex-row sm:items-center gap-2 mt-4 sm:justify-center">
            <Link className="bg-gray-950 flex items-center gap-2 text-white py-2 px-4 rounded-2xl hover:scale-105 hover:bg-white hover:text-gray-950 transition-all duration-700" href={"#contact"}>Contact me here <BsArrowRight /></Link>
            <a className="flex items-center gap-3 text-gray-950 bg-white py-2 px-4 rounded-2xl hover:scale-105 hover:text-white hover:bg-gray-950 transition-all duration-700" href={'/Cv.pdf'} download>Download Cv <HiDownload /></a>
            <a href="https://www.linkedin.com/in/ahmed-abo-el-wafa-121b49255/" className='sm:flex px-4 justify-center rounded-xl py-2 bg-white dark:text-gray-900 hover:sm:scale-125 hover:scale-105 transition-all duration-700' target='_blank'><BsLinkedin /></a>
            <a href="https://github.com/Aboelwafa2936" className='sm:flex px-4 justify-center rounded-xl py-2 bg-white dark:text-gray-900 hover:sm:scale-125 hover:scale-105 transition-all duration-700' target='_blank'><FaGithubSquare /></a>
        </motion.div>
      </section>
    </>
  );
}
