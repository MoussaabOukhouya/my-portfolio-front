import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import Image from "next/image";
import logo from "./../assets/Images/MyLogo.png";
import React, { useState } from "react";
import Link from "next/link";
type Props = {};

export default function Header({}: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOpenButtonClick = () => {
    setMenuOpen(true);
    setContainerVisible(false);
  };
  const handleCloseButtonClick = () => {
    setMenuOpen(false);
    setContainerVisible(true);
  };
  const [containerVisible, setContainerVisible] = useState(false);

  return (
    
    <header className="z-20 sticky top-0 p-5 flex  justify-between  items-start  max-w-7xl mx-auto my-auto">
      <motion.div
        className="w-16 h-16 hover:animate-pulse m-1.5 "
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
        <div className="flex justify-center items-center">
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
        <div className=" m-2 ">
          <Link href="#about" className="">
            <button className="heroButtons">About</button>
          </Link>
          <Link href="#experience" className="">
            <button className="heroButtons">Experience</button>
          </Link>
          <Link href="#projects" className="">
            <button className="heroButtons">Projects</button>
          </Link>
          <Link href="#skills" className="">
            <button className="heroButtons">Skills</button>
          </Link>
          <Link href="#contact" className="">
            <button className="heroButtons">Contact</button>
          </Link>
        </div>
      </motion.div>

      <motion.div
        className="{container ${containerVisible ? 'block': 'hidden'}} cursor-pointer focus:outline-none md:hidden m-0.5"
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
        <button onClick={handleOpenButtonClick} className="text-4xl self-end  text-white ">
          &#9776;
        </button>

        {menuOpen && (
          <div className=" fixed top-0 left-0 w-full h-full flex justify-center items-center ">
          <section
            className="absolute top-0 bg-black w-full text-5xl flex flex-col
        justify-content-center origin-top animate-open-menu"
          >
            <button 
            onClick={handleCloseButtonClick}
            className="text-8xl self-end px-6 text-white">
                &times;
            </button>
            
            <nav className="flex flex-col min-h-screen items-center py-8 text-white">
              <Link
                href="#about"
                className=" w-full text-center py-6 hover:opacity-90"
              >
                <button className="">About</button>
              </Link>
              <Link
                href="#experience"
                className="w-full text-center py-6 hover:opacity-90"
              >
                <button className="">Experience</button>
              </Link>
              <Link
                href="#projects"
                className="w-full text-center py-6 hover:opacity-90"
              >
                <button className="">Projects</button>
              </Link>
              <Link
                href="#skills"
                className="w-full text-center py-6 hover:opacity-90"
              >
                <button className="">Skills</button>
              </Link>
              <Link
                href="#contact"
                className="w-full text-center py-6 hover:opacity-90"
              >
                <button className="">Contact</button>
              </Link>
            </nav>
          </section>
        </div>
        )}
      </motion.div>
    </header>
 
  );
}
