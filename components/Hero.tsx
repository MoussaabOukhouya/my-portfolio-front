import React from "react";
import { Cursor, Typewriter, useTypewriter } from "react-simple-typewriter";
import HeroBackground from "./HeroBackground";
import Image from "next/image";
import me from "./../assets/Images/Me.png";
import logo from "./../assets/Images/MyLogo.png";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "👋 Hi There !",
      "My name is Moussaab Oukhouya",
      " 👨‍💻 I have a passion for building efficient web applications.",
      "& I enjoy learning about new development technologies. 👾",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="relative h-screen flex flex-col space-y-8 justify-center items-center text-center overflow-hidden z-0">
      <HeroBackground backgroundType="Hero" />
      <div className="absolute flex flex-col justify-center   ">
        <Image
          className=" rounded-full h-32 w-32 mx-auto object-cover "
          src={me}
          alt="Profile Image"
        />
        <div>
          <h2
            className="bg-clip-text lg:text-3xl flex justify-center uppercase  pb-2 tracking-[12px] font-bold font-Spline 
        animate-text bg-gradient-to-r from-purple-500 via-yellow-300 to-red-500 text-xl  text-transparent m-2"
          >
            Software Engineer
          </h2>
          <h1 className="text-xl lg:text-3xl  px-10 font-Acme  ">
            <span className="text-gray-200 mr-3 bg-clip-text  ">{text}</span>
            <Cursor cursorColor="#F7AB0A" />
          </h1>
        </div>
      </div>
    </div>
  );
}
