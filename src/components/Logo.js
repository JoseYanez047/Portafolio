import Link from 'next/link'
import React from 'react'
import {motion} from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <motion className='flex items-center justify-center mt-2'>
      <MotionLink
        href="/"
        className='w-16 h-12 bg-dark text-light flex items-center justify-center text-2xl font-mono rounded-md relative'
        whileHover={{
          color: "#000000",
          backgroundColor: ["#121212", "rgba(245, 245, 245, 1)"],
          transition: { duration: 1 }
        }}
      >
        {/* Barra superior de la terminal */}
        <div className="absolute top-0 left-0 w-full h-2 bg-light rounded-t-md border border-black"></div>
        <span className="z-10">JY_</span>
      </MotionLink>
    </motion>
  );
};



export default Logo