"use client"
import { delay, motion } from 'framer-motion'

export default function SectionDivider() {
  return (
    <>
    <motion.div initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{delay: 0.3}} className="hidden sm:block rounded-full my-24 w-[.15rem] h-16 bg-gray-300">
    </motion.div>
    </>
  )
}
