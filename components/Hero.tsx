import React from "react";
import { Cursor, Typewriter, useTypewriter } from "react-simple-typewriter";
import HeroBackground from "./HeroBackground";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "👋 Hi there !",
      "My name is Moussaab Oukhouya",
      "I have a passion for building efficient web applications.",
      "& I enjoy learning about new development technologies.",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center ">
      <HeroBackground />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="https://media.licdn.com/dms/image/C5603AQFEXviEgWuKFQ/profile-displayphoto-shrink_800_800/0/1635446368882?e=1678320000&v=beta&t=U7s7Ohwe6TmthG4m-e3zliCcVrQ1AnOoV2ylvQ68hH0"
        alt="Profile Image"
      />
      <div>
        <h2 className="bg-clip-text lg:text-3xl flex justify-center uppercase  pb-2 tracking-[8px] font-bold font-Spline
        animate-text bg-gradient-to-r from-purple-500 via-yellow-300 to-red-500 text-xl  text-transparent">
          Software Engineer
        </h2>
        <h1 className="text-xl lg:text-3xl  px-10 font-Acme ">
          <span className="text-gray-200 mr-3 bg-clip-text  ">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
      </div>
    </div>
  );
}
