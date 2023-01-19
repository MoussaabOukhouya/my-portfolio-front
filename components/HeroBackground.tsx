import { motion } from "framer-motion";
import React, { useMemo } from 'react'
import { useCallback } from "react";
import { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

type Props = {backgroundType:string};

export default function HeroBackground({backgroundType}: Props) {
  const options = useMemo(() => {
    // using an empty options object will load the default options, which are static particles with no background and 3px radius, opacity 100%, white color
    // all options can be found here: https://particles.js.org/docs/interfaces/Options_Interfaces_IOptions.IOptions.html
    return {
      
      fullScreen: {
        enable: true, // enabling this will make the canvas fill the entire screen, it's enabled by default
        zIndex: -1, // this is the z-index value used when the fullScreen is enabled, it's 0 by default
      },
      interactivity: {
        events: {
          onClick: {
            enable: true, // enables the click event
            mode: "push", // adds the particles on click
          },
          onHover: {
            enable: true, // enables the hover event
            mode: "repulse", // make the particles run away from the cursor
          },
        },
        modes: {
          push: {
            quantity: 1, // number of particles to add on click
          },
          repulse: {
            distance: 100, // distance of the particles from the cursor
          },
          
        },
      },
      particles: {
        number: {
          density: {
            enable: true,
            area: 1900
          },
          limit: 0,
          value: 45
        },
        links: {
          enable: true, // enabling this will make particles linked together
          distance: 200, // maximum distance for linking the particles
        },
        move: {
          enable: true, // enabling this will make particles move in the canvas
          speed: { min: 1, max: 2 }, // using a range in speed value will make particles move in a random speed between min/max values, each particles have its own value, it won't change in time by default
        },
        opacity: {
          value: { min: 0.2, max: 0.4 }, // using a different opacity, to have some semitransparent effects
        },
        size: {
          value: { min: 1, max: 3 }, // let's randomize the particles size a bit
        },
      },
    };
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
    // loadFull(engine); // for this sample the slim version is enough, choose whatever you prefer, slim is smaller in size but doesn't have all the plugins and the mouse trail feature
  }, []);

  
  if(backgroundType == "for contact better"){
  return (
    <div className="flex justify-center z-">
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
 else if(backgroundType == "About" || backgroundType == "Hero"){
  return (
   <div className="">
    
    <Particles  init={particlesInit} options={options} />

   </div>

  );
 }

  else
  return (<div className="bg-red-900">default background</div>);
}
