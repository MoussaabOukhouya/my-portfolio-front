import { motion } from 'framer-motion';
import React from 'react'

type Props = {text : String}

export default function Animatedwords({text}: Props) {

    const words = text.split(" ");

    const container = {
      hidden: { opacity: 0 },
      visible: (i = 1) => ({
        opacity: 1,
        transition: { staggerChildren: 0.32, delayChildren: 0.04 * i },
      }),
    };
  
    const child = {
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          type: "spring",
          damping: 12,
          stiffness: 100,
        },
      },
      hidden: {
        opacity: 0,
        x: 20,
        transition: {
          type: "spring",
          damping: 12,
          stiffness: 100,
        },
      },
    };

  return (
    <motion.div
      
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.div
          variants={child}
          style={{ marginRight: "8px", display:'inline-flex', lineHeight:'2em'   }}
          key={index}
        >
          {word}
        </motion.div>
      ))}
    </motion.div>
  );
};
