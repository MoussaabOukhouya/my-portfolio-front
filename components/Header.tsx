import { motion } from "framer-motion";
import React from "react";
import { SocialIcon } from "react-social-icons";
import Image from "next/image";
import logo from "./../assets/Images/MyLogo.png";
import hambMenu from "./../assets/Images/menu-icon.png";
type Props = {};

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 p-5 flex  justify-between items-center  max-w-7xl mx-auto my-auto md ">
      <motion.div
        className="w-10 h-10 hover:animate-pulse"
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
      >
        <a href="http://localhost:3000/" className="hover:animate-pulse" >
          <Image src={logo} alt="myLogo" className="rounded-3xl"  />
        </a>
      </motion.div>

      <motion.div
        className="cursor-pointer w-10 h-12"
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
      >
        <Image src={hambMenu} alt="Menu"  />
      </motion.div>
    </header>
  );
}
