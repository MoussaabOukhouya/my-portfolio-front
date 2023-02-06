import React from 'react'
import Image from "next/image";
import cappgemini from "./../assets/Images/capgemini.png";
import csharp from "./../assets/Images/Techs/c-sharp.png";
import dotnet from "./../assets/Images/Techs/dotnet.png";
import visualStudio from "./../assets/Images/Techs/visual-studio.png";
import svn from "./../assets/Images/Techs/TortoiseSVN.png";

import { motion } from 'framer-motion';

type Props = {}

export default function ExperienceCard({}: Props) {
  return (
    <article className='w-3/4 flex flex-col rounded-lg items-center flex-shrink-0
      snap-center bg-white pb-5 m-2
     cursor-pointer transition-opacity duration-200 overflow-hidden opacity-40 hover:opacity-100   focus:bg-white '>
        <motion.div
        initial = {{
            y: -100,
            opacity: 0,
        }}
        transition = {{ duration: 1.2}}
        whileInView = {{opacity:1,y:0}}
        viewport={{once:true}}>
        <Image src={cappgemini} alt='coding' className="w-32 h-32 rounded-full object-cover object-center" />
        </motion.div>
    <div className='px-0 md:px-10'>
        <h4 className='text-3xl font-light'>.Net developer</h4>
        <p className='font-bold text-2xl mt-1'>Capgemini</p>
        <div className='flex space-x-2'>
            {/* tech used*/}
            <Image className='h-10 w-10 rounded-full mt-1' src={csharp} alt='c-sharp' />
            <Image className='h-10 w-10 rounded-full mt-1' src={dotnet} alt='DotNet' />
            <Image className='h-10 w-10 rounded-full mt-1' src={visualStudio} alt='Visual Studio' />
            <Image className='h-10 w-10 rounded-full mt-1' src={svn} alt='Tortoise SVN' />

        </div>
    </div>
    <div className='p-4'>
    <p className='uppercase text-center mb-2 italic'>October 25 2021 - Present</p>
    <ul className='list-disc space-y-1 ml-5 text-base'>
        <li>Development of the different user stories.</li>
        <li>Maintenance of the various project applications and correction of anomalies</li>
        <li>Implementation of SQL database scripts.</li>
        <li> Preparation of delivery packages.</li>
    </ul>
    </div>
   
    </article>
  );
}