import React from 'react'
import Image from "next/image";

import coding from "./../assets/Images/coding.png";

type Props = {}

export default function ExperienceCard({}: Props) {
  return (
    <article>
        <Image src={coding} alt='coding' className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center "   />
    <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>.Net developer</h4>
        <p className='font-bold text-2xl mt-1'>Capgemini</p>
        <div className='flex space-x-2 my-2'>
            {/* tech used*/}
        </div>
    </div>
    <p>date</p>
    <ul>
        <li>Summary Points</li>
        <li>Summary Points</li>
        <li>Summary Points</li>
        <li>Summary Points</li>
        <li>Summary Points</li>
    </ul>
    </article>
  );
}