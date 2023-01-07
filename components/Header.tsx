import { motion } from 'framer-motion';
import React from 'react'
import { SocialIcon } from 'react-social-icons';

type Props = {}

export default function Header({}: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto md'>
        <motion.div
        initial = {{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate = {{
          x: 0,
          opacity: 1,
          scale: 1,         
        }}
        transition = {{
          duration: 1
        }}>
            <SocialIcon url='https://www.linkedin.com/in/oukhouyamoussaab/'/>
        </motion.div>

        <motion.div className=' cursor-pointer'
        initial = {{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate = {{
          x: 0,
          opacity: 1,
          scale: 1,         
        }}
        transition = {{
          duration: 1
        }}>
          <p>
            Get in touch
          </p>
        </motion.div>
    </header>
  );
}