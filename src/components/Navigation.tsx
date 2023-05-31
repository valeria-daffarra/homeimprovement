import React from "react"
import { WithChildrenProps } from '../types';
import { GiCalendar } from "react-icons/gi";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion"
const navigationVariants = {
  initial: {
    x: "-0.2rem",
    opacity: 0,
    transition: {
      ease: "easeOut",
      staggerChildren: 0.1,
    },
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      ease: "easeOut",
      staggerChildren: 0.1,
    },
  },
}


type MenuProps = {
    menuOpen: any;
};

const Navigation: React.FunctionComponent<MenuProps> = ({ menuOpen }) => {
  return (
    <AnimatePresence>
      {menuOpen && (
        <nav className="grid place-items-center w-1/3 h-10 m-auto mt-6 e">
          <motion.ul
            variants={navigationVariants}
            initial="initial"
            animate="animate"
            exit="initial"
            className="fixed z-20 top-[4.25rem] p-4 rounded-lg bg-[#E6E9E5] text-right justify-between w-1/8 "
          >
            <motion.li variants={navigationVariants} className="py-0.5 text-[#475569] hover:text-primary"><Link href="/">Home</Link></motion.li>
            <motion.li variants={navigationVariants} className="py-0.5 text-[#475569] hover:text-primary"><Link href="#service" scroll={false}>Services</Link></motion.li>
            <motion.li variants={navigationVariants} className="py-0.5 text-[#475569] hover:text-primary"><Link href="/portfolio">Portfolio</Link></motion.li>
            <motion.li variants={navigationVariants} className="py-0.5 text-[#475569] hover:text-primary"><Link href="#contact" scroll={false}>Contact</Link></motion.li>
            <motion.li variants={navigationVariants} className="py-0.5"><button className="rounded-full bg-primary hover:bg-secondary active:bg-secondary p-1 font-thin leading-none text-white">
                <Link href='/booking' className=''>Book Now</Link>
            </button></motion.li>
          </motion.ul>
        </nav>
      )}
    </AnimatePresence>
  )
}
export default Navigation