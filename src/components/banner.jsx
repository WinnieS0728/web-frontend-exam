import React from "react";
import ManImage from "./man";
import logo from "../assets/imgs/logo.png";
import { motion } from "framer-motion";

export default function Banner() {
  return (
    <section
      className={`relative`}
      id='banner'
    >
      <ManImage />
      <motion.img
        src={logo}
        alt='logo'
        className='w-1/3 absolute left-[55%] bottom-[18%] z-50'
        animate={{
          scale: [1, 1.3, 1],
        }}
        transition={{
          repeat: Infinity,
          repeatDelay: 0.8 + 1.5,
          duration: 0.8,
        }}
      />
    </section>
  );
}
