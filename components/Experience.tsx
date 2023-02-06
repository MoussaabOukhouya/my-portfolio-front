import { motion } from "framer-motion";
import React from "react";
import ExperienceCard from "./ExperienceCard";

type Props = {};

export default function Experience({}: Props) {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView = {{opacity:1}}
    transition = {{duration:1.5}}
    className="h-screen flex relative  overflow-hidden flex-col text-left md:flex-row 
     px-6 justify-evenly mx-auto items-center max-w-5xl align-text ">
      <h3 className="absolute top-24 uppercase tracking-[12px] text-white text-2xl ">
        Experience
      </h3>
   
    <div className=" absolute mt-12 left-0 right-0  w-full flex space-x-5 overflow-x-scroll p-5 snap-x snap-mandatory snap-center  scrollbar scrollbar-track-slate-900 scrollbar-thumb-slate-800 ">
        <ExperienceCard/>
        <ExperienceCard/>
       
      </div>

     
    </motion.div>
  );
}
