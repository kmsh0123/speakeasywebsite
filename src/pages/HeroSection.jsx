import { Button } from '@material-tailwind/react'
import React from 'react'
import herosection from "../assets/herosection.png"

const HeroSection = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between items-center rounded-lg gap-10 pt-24 px-4' id="home">
      <div className='bg-[#504128] w-full md:w-1/2 p-5'>
        <h1 className='text-4xl sm:text-5xl md:text-6xl text-center p-6 text-white font-semibold'>
          Es hora de tu <br /> próxima <br /> aventura
        </h1>
        <p className='text-xl sm:text-2xl md:text-3xl text-center font-extrabold text-white'>
          Déjanos planearlo para ti
        </p>
        <div className='flex justify-center mt-8'>
          <Button className='bg-[#FF8C00]'>Reservar</Button>
        </div>
      </div>
      <div className='w-full md:w-1/2'>
        <img src={herosection} alt="hero" className='w-full h-auto rounded-lg object-cover' />
      </div>
    </div>
  )
}

export default HeroSection
