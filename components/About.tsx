import React, { useEffect, useRef, useState } from "react";
import Animatedwords from "./Animatedwords";
import HeroBackground from "./HeroBackground";

const myString: string = 'As a highly skilled and motivated .NET developer, I am passionate about creating efficient web applications. Continuously seeking opportunities to learn and expand my knowledge on new development technologies, I am able to deliver innovative solutions to complex problems. With a strong team player mentality, I excel in collaborating with others to achieve common goals. My ability to actively listen and understand client requirements has allowed me to effectively meet their needs. I am currently expanding my skills in frontend development with technologies such as React, TypeScript and Tailwind CSS, and eager to take on more responsibility and contribute to the success of both new and existing projects.';


export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("Element is now visible");
          setIsVisible(true);
        } else {
          console.log("Element is now hidden");
          setIsVisible(false);
        }
      });
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);


  return (
    <div ref={ref} className="relative h-screen flex flex-col space-y-8 justify-center items-center text-center overflow-hidden  ">

      <div className="relative z-0 m-2 h-auto rounded-lg bg-black grid grid-cols-1 grid-rows-1 items-center justify-center  opacity-75 max-w-5xl">
        <div className="h-9 w-full bg-gray-500 opacity-50 rounded-lg"></div>
        <div className="absolute w-full h-auto top-0 z-10 ">
          <h3 className=" uppercase tracking-[12px] top-24 m-1 pl-1 text-xl font-semibold md:text-2xl lg:text-2xl font-RobotoSlab text-white text-center">
            About
          </h3>
          
        
        </div>
        <div className="m-2 p-4 ">
        {isVisible && (
            <div className="text-xs md:text-sm italic lg:text-lg text-left text-white leading-relaxed font-Spline">
              <Animatedwords text={myString} />
            </div>
          )}
        </div>
      </div>
      
    </div>
  );
}