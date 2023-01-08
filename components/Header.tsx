import { motion } from "framer-motion";
import React from "react";
import { SocialIcon } from "react-social-icons";
import Image from "next/image";
import logo from "./../assets/Images/MyLogo.png";
import hambMenu from "./../assets/Images/menu-icon.png";
import Link from "next/link";
type Props = {};

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 p-5 flex  justify-between  items-start  max-w-7xl mx-auto my-auto md ">
      <motion.div
        className="w-14 h-14 hover:animate-pulse "
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
        <div className="flex justify-items-center items-center mt-1">
          <a href="http://localhost:3000/" className="hover:animate-pulse">
            <Image src={logo} alt="myLogo" className="rounded-3xl" />
          </a>
        </div>
      </motion.div>

      <motion.div
        className="hidden md:block"
        initial={{
          x: +500,
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
        <div className=" ">
          <Link href="#about" className="m-3 ">
            <button className="heroButtons">About</button>
          </Link>
          <Link href="#experience" className="m-3">
            <button className="heroButtons">Experience</button>
          </Link>
          <Link href="#projects" className="m-3">
            <button className="heroButtons">Projects</button>
          </Link>
          <Link href="#skills" className="m-3">
            <button className="heroButtons">Skills</button>
          </Link>
          <Link href="#contact" className="m-3">
            <button className="heroButtons">Contact</button>
          </Link>
        </div>
      </motion.div>

      <motion.div
        className="cursor-pointer sm:hidden focus:outline-none"
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
        <Image src={hambMenu} alt="myLogo" className="w-10 h-10" />
      </motion.div>
    </header>
  );
}
