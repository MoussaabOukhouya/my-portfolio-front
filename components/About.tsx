import React from 'react'
import HeroBackground from './HeroBackground'

type Props = {}

export default function About({}: Props) {
  return (
    <div className='relative h-screen flex flex-col space-y-8 justify-center items-center text-center overflow-hidden z-0'>
        <HeroBackground backgroundType='About'/>
    </div>
  )
}