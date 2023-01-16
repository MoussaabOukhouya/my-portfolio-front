import React from "react";
import { motion } from "framer-motion";

type Props = {backgroundType:string};

export default function HeroBackground({backgroundType}: Props) {

  if(backgroundType == "Hero"){
  return (
    <div className="flex justify-center">
      <div className="">
        <div className="bg-yellow-500 rounded-full w-52 h-52  mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-2000 " />
        <div className="bg-green-500 rounded-full w-52 h-52 mix-blend-multiply filter blur-xl opacity-40 animate-blob " />
      </div>
      <div className="">
        <div className="bg-red-500 rounded-full w-52 h-52 mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-3000" />
        <div className="bg-pink-500 rounded-full w-52 h-52 mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-4000" />
      </div>
    </div>
  );}
 else if(backgroundType == "About"){
  return (
   
           <div className="flex justify-center z-50 animate-rotate ">
      <div className="m-10">
        <div className="m-10 bg-yellow-500 rounded-full w-10 h-10  mix-blend-multiply filter  animate-blob  " />
        <div className="m-10 bg-green-500 rounded-full w-10 h-10 mix-blend-multiply filter  animate-blob " />
      </div>
      <div className="">
        <div className="m-10 bg-red-500 rounded-full w-10 h-10 mix-blend-multiply filter animate-blob  " />
        <div className="m-10 bg-pink-500 rounded-full w-10 h-10 mix-blend-multiply filter animate-blob " />
      </div>
    </div>

  );
 }

  
  return (<div className="hidden">default background</div>);
}
