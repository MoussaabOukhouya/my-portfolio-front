import React from "react";
import { motion } from "framer-motion";
type Props = {};

export default function HeroBackground({}: Props) {
  return (
    <div className="fixed">
      <div className="relative flex justify-center ">
        <div className="bg-yellow-500 rounded-full w-52 h-52  mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-2000 " />
        <div className="bg-green-500 rounded-full w-52 h-52 mix-blend-multiply filter blur-xl opacity-40 animate-blob " />
      </div>
      <div className="relative flex justify-center">
        <div className="bg-red-500 rounded-full w-52 h-52 mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-3000" />
        <div className="bg-pink-500 rounded-full w-52 h-52 mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-4000" />
      </div>
    </div>
  );
}
