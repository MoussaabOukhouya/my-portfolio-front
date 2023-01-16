import { animate, motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import Image from "next/image";
import logo from "./../assets/Images/MyLogo.png";
import React, { useState, useEffect  } from "react";
import Link from "next/link";

type Props = {};

export default function Header({}: Props) {
  const [isResizing, setIsResizing] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function handleResizeStart() {
      setIsResizing(true);
      setMenuOpen(false);
    }
    
    window.addEventListener('resize', handleResizeStart);
    return () => {
      window.removeEventListener('resize', handleResizeStart);
    };
  }, []);

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
          <a href="#hero" className="hover:animate-pulse">
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
        <div className=" m-2 z-50 ">
          <Link href="#About" className="">
            <button className="heroButtons">About</button>
          </Link>
          <Link href="#Experience" className="">
            <button className="heroButtons">Experience</button>
          </Link>
          <Link href="#Projects" className="">
            <button className="heroButtons">Projects</button>
          </Link>
          <Link href="#Skills" className="">
            <button className="heroButtons">Skills</button>
          </Link>
          <Link href="#Contact" className="">
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
        <button onClick={handleOpenButtonClick}  className="text-4xl self-end  text-white ">
          &#9776;
        </button>

        {menuOpen && (
          <div className=" overflow-y-scroll animate-text  bg-gradient-to-l from-slate-800 to-grayforme  fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
          <section
            className=" absolute top-0  w-full text-5xl flex flex-col
        justify-content-center origin-top animate-open-menu"
          >
            <motion.button
            initial={{
              x: 0,
              opacity: 0,
              scale: 1,
            }}
            animate={{
              
              rotate:360,
              opacity: 1,
              
            }}
            transition={{
              duration: 0.3,
            }}
            onClick={handleCloseButtonClick}
            className="text-8xl self-end px-6 text-white origin-top-right animate-close-menu">
                &times;
            </motion.button>
            
            <nav className="flex flex-col min-h-screen items-center py-8 text-white font-PermanentMarker ">
              <Link
                href="#About"
                className="mobileMenuLink w-full text-center py-6 hover:opacity-90 "
                onClick={handleCloseButtonClick}
              >
                <motion.button 
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
                  duration: 0.5,
                }}
                className="uppercase">About</motion.button>
              </Link>
              <Link
                href="#Experience"
                className="mobileMenuLink w-full text-center py-6 hover:opacity-90 "
                onClick={handleCloseButtonClick}
              >
                <motion.button
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
                  duration: 0.5,
                }}
                 className="uppercase">Experience</motion.button>
              </Link>
              <Link
                href="#Projects"
                className="mobileMenuLink w-full text-center py-6 hover:opacity-90"
                onClick={handleCloseButtonClick}
              >
                <motion.button
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
                  duration: 0.5,
                }}
                className="uppercase">Projects</motion.button>
              </Link>
              <Link
                href="#Skills"
                className="mobileMenuLink w-full text-center py-6 hover:opacity-90"
                onClick={handleCloseButtonClick}
              >
                <motion.button
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
                  duration: 0.5,
                }}
                className="uppercase">Skills</motion.button>
              </Link>
              <Link
                href="#Contact"
                className="mobileMenuLink w-full text-center py-6 hover:opacity-90"
                onClick={handleCloseButtonClick}
              >
                <motion.button 
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
                  duration: 0.5,
                }}
                className="uppercase">Contact</motion.button>
              </Link>
            </nav>
          </section>
        </div>
        )}
      </motion.div>
    </header>
 
  );
}
