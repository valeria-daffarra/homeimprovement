import React from 'react';
import { motion } from 'framer-motion';
const lineOneVariants = {
  initial: {
    rotate: '0deg',
    transition: {
      ease: 'easeOut',
    },
  },
  animate: {
    y: '3px',
    rotate: '45deg',
    transformOrigin: 'center center',
    transition: {
      ease: 'easeOut',
    },
  },
}
const lineTwoVariants = {
  initial: { rotate: '0deg' },
  animate: {
    y: '-3px',
    rotate: '-45deg',
    transformOrigin: 'center center',
    transition: {
      ease: 'easeOut',
    },
  },
}
type MenuProps = {
    menuOpen: any;
    cycleMenuOpen: any;
};

const Menu: React.FunctionComponent<MenuProps> = ({ menuOpen, cycleMenuOpen }) => {
  return (
    <div className="grid place-items-center z-30 fixed top-6 right-6 border border-gray-900 w-10 h-10 rounded-full">
      <motion.div
        className="flex flex-col justify-between w-6 h-2 cursor-pointer"
        onClick={cycleMenuOpen}
      >
        <motion.div
          variants={lineOneVariants}
          initial="initial"
          animate={menuOpen ? 'animate' : 'initial'}
          className="bg-gray-900 w-full h-0.5"
        ></motion.div>
        <motion.div
          variants={lineTwoVariants}
          initial="initial"
          animate={menuOpen ? 'animate' : 'initial'}
          className="bg-gray-900 w-full h-0.5"
        ></motion.div>
      </motion.div>
    </div>
  )
}
export default Menu